/* Copyright (C) 2023 anonymous

This file is part of PSFree.

PSFree is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

PSFree is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.  */

import { Int } from './int64.mjs';
import * as o from './offset.mjs';

// view.buffer is the underlying ArrayBuffer of a TypedArray but since
// we will corrupting the m_vector of our target views later, the ArrayBuffer's
// buffer will not correspond to our fake m_vector anyway.
//
// can't use:
//
// function read32(u8_view, offset) {
//     let res = new Uint32Array(u8_view.buffer, offset, 1);
//     return res[0];
// }
//
// to implement read32, we need to index the view instead:
//
// function read32(u8_view, offset) {
//     let res = 0;
//     for (let i = 0; i < 4; i++) {
//         res += u8_view[offset + i] << i*8;
//     }
//     return res;
// }

// for reads less than 8 bytes
function read(u8_view, offset, size) {
    let res = 0;
    for (let i = 0; i < size; i++) {
        res += u8_view[offset + i] << i*8;
    }
    return res;
}

export function read16(u8_view, offset) {
    return read(u8_view, offset, 2);
}

export function read32(u8_view, offset) {
    return read(u8_view, offset, 4);
}

export function read64(u8_view, offset) {
    let res = [];
    for (let i = 0; i < 8; i++) {
        res.push(u8_view[offset + i]);
    }
    return new Int(res);
}

// for writes less than 8 bytes
function write(u8_view, offset, value, size) {
    for (let i = 0; i < size; i++) {
        u8_view[offset + i]  = (value >> i*8) & 0xff;
    }
}

export function write16(u8_view, offset, value) {
    write(u8_view, offset, value, 2);
}

export function write32(u8_view, offset, value) {
    write(u8_view, offset, value, 4);
}

export function write64(u8_view, offset, value) {
    if (!(value instanceof Int)) {
        throw TypeError('write64 value must be an Int');
    }

    let low = value.low();
    let high = value.high();

    for (let i = 0; i < 4; i++) {
        u8_view[offset + i]  = (low >> i*8) & 0xff;
    }
    for (let i = 0; i < 4; i++) {
        u8_view[offset + 4 + i]  = (high >> i*8) & 0xff;
    }
}

export function sread64(str, offset) {
    let res = [];
    for (let i = 0; i < 8; i++) {
        res.push(str.charCodeAt(offset + i));
    }
    return new Int(res);
}

export class Memory {
    constructor(main, main_addr, worker, worker_addr, worker_index)  {
        this.main = main;
        this.main_addr = main_addr;
        this.worker = worker;
        this.worker_addr = worker_addr;

        worker.a = main; // ensure a butterfly
        let butterfly = read64(main, worker_index + o.js_butterfly);
        this.butterfly = butterfly;

        write32(main, worker_index + o.view_m_length, 0xffffffff);
        // setup main's m_vector to worker
        write64(main, worker_index + o.view_m_vector, main_addr);
        write64(worker, o.view_m_vector, worker_addr);

        this._current_addr = main_addr;
    }

    addrof(obj) {
        if (typeof obj !== 'object'
            && typeof obj !== 'function'
        ) {
            throw TypeError('addrof argument not a JS object');
        }
        this.worker.a = obj;
        write64(this.main, o.view_m_vector, this.butterfly.sub(0x10));
        let res = read64(this.worker, 0);
        write64(this.main, o.view_m_vector, this._current_addr);

        return res;
    }

    set_addr(addr) {
        if (!(addr instanceof Int)) {
            throw TypeError('addr must be an Int');
        }
        this._current_addr = addr;
        write64(this.main, o.view_m_vector, this._current_addr);
    }

    get_addr() {
        return this._current_addr;
    }

    read8(addr) {
        this.set_addr(addr);
        return this.worker[0];
    }

    read16(addr) {
        this.set_addr(addr);
        return read16(this.worker, 0);
    }

    read32(addr) {
        this.set_addr(addr);
        return read32(this.worker, 0);
    }

    read64(addr) {
        this.set_addr(addr);
        return read64(this.worker, 0);
    }

    write8(addr, value) {
        this.set_addr(addr);
        this.worker[0] = value;
    }

    write16(addr, value) {
        this.set_addr(addr);
        write16(this.worker, 0, value);
    }

    write32(addr, value) {
        this.set_addr(addr);
        write32(this.worker, 0, value);
    }

    write64(addr, value) {
        this.set_addr(addr);
        write64(this.worker, 0, value);
    }
}

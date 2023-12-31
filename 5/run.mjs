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

import {
    debug_log,
    clear_log,
} from './module/utils.mjs';

import { wait_mem } from './exploit.mjs';

async function run() {
    await wait_mem();
    clear_log();

    // Put your payload at code.mjs or similar. The dynamic import ensures you
    // have a Memory instance for use.

    //const code = await import('./code.mjs');
    //code.run();
}

run();

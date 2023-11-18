class rop {
    constructor(stack_size = 0x80000, reserved_stack = 0x10000) {
        this.stack_size = stack_size;
        this.reserved_stack = reserved_stack;
        this.stack_dwords = stack_size / 0x4;
        this.reserved_stack_index = this.reserved_stack / 0x4;
        this.stack_memory = p.malloc(this.stack_dwords + 0x2 + 0x200);
        this.stack_array = this.stack_memory.backing;
        this.stack_entry_point = this.stack_memory.add32(this.reserved_stack);
        this.return_value = this.stack_memory.add32(this.stack_size);
        this.initial_count = 0;
        this.count = 0;
        this.branches = this.return_value.add32(0x8);
        this.branches_count = 0;
        this.branch_types = {
            EQUAL: 0x314500,
            ABOVE: 0x314501,
            BELOW: 0x314502,
            GREATER: 0x314503,
            LESSER: 0x314504,
        };
    }
    set_initial_count(count) {
        this.initial_count = count;
        if (this.count == 0) {
            this.count = this.initial_count;
        }
    }
    clear() {
        this.count = this.initial_count;
        this.branches_count = 0;
        for (let i = 0; i < this.stack_dwords; i++) {
            this.stack_array[i] = 0x0;
        }
    }
    increment_stack() {
        return this.count++;
    }
    set_entry(index, value) {
        if (value instanceof int64) {
            this.stack_array[this.reserved_stack_index + index * 2] = value.low;
            this.stack_array[this.reserved_stack_index + index * 2 + 1] = value.hi;
        } else if (typeof (value) == 'number') {
            this.stack_array[this.reserved_stack_index + index * 2] = value;
            this.stack_array[this.reserved_stack_index + index * 2 + 1] = 0x0;
            if (value > 0xFFFFFFFF) {
                alert("you're trying to write a value exceeding 32-bits without using a int64 instance");
            }
        } else {
            alert("You're trying to write a non number/non int64 value?");
        }
    }
    push(value) {
        this.set_entry(this.increment_stack(), value);
    }
    push_write4(dest, value) {
        this.push(gadgets["pop rdi"]);
        this.push(dest);
        this.push(gadgets["pop rax"]);
        this.push(value);
        this.push(gadgets["mov [rdi], eax"]);
    }
    push_write8(dest, value) {
        this.push(gadgets["pop rdi"]);
        this.push(dest);
        this.push(gadgets["pop rsi"]);
        this.push(value);
        this.push(gadgets["mov [rdi], rsi"]);
    }
    write_result(dest) {
        this.push(gadgets["pop rdi"]);
        this.push(dest);
        this.push(gadgets["mov [rdi], rax"]);
    }
    write_result4(dest) {
        this.push(gadgets["pop rdi"]);
        this.push(dest);
        this.push(gadgets["mov [rdi], eax"]);
    }
    push_sysv(rdi, rsi, rdx, rcx, r8, r9) {
        if (rdi != undefined) {
            this.push(gadgets["pop rdi"]);
            this.push(rdi);
        }
        if (rsi != undefined) {
            this.push(gadgets["pop rsi"]);
            this.push(rsi);
        }
        if (rdx != undefined) {
            this.push(gadgets["pop rdx"]);
            this.push(rdx);
        }
        if (rcx != undefined) {
            this.push(gadgets["pop rcx"]);
            this.push(rcx);
        }
        if (r8 != undefined) {
            this.push(gadgets["pop r8"]);
            this.push(r8);
        }
        if (r9 != undefined) {
            this.push(gadgets["pop r9"]);
            this.push(r9);
        }
    }
    fcall(rip, rdi, rsi, rdx, rcx, r8, r9) {
        this.push_sysv(rdi, rsi, rdx, rcx, r8, r9);
        if (this.stack_entry_point.add32(this.count * 0x8).low & 0x8) {
            this.push(gadgets["ret"]);
        }
        this.push(rip);
    }
    get_rsp() {
        return this.stack_entry_point.add32(this.count * 0x8);
    }
    jmp_to_rsp(dest) {
        this.push(gadgets["pop rsp"]);
        this.push(dest);
    }
    self_healing_syscall(sysc, rdi, rsi, rdx, rcx, r8, r9) {
        this.push_sysv(rdi, rsi, rdx, rcx, r8, r9);
        let restore_point = this.get_rsp();
        this.push(gadgets["ret"]);
        this.push(gadgets["ret"]);
        this.push(gadgets["ret"]);
        if (this.stack_entry_point.add32(this.count * 0x8).low & 0x8) {
            this.push(gadgets["ret"]);
            restore_point.add32inplace(0x8);
        }
        this.push(syscalls[sysc]);
        this.push_write8(restore_point, gadgets["ret"]);
        this.push_write8(restore_point.add32(0x08), gadgets["ret"]);
        this.push_write8(restore_point.add32(0x10), gadgets["ret"]);
        this.push_write8(restore_point.add32(0x18), syscalls[sysc]);
    }
    push_inc8(dest, value) {
        this.push(gadgets["pop rdi"]);
        this.push(dest);
        this.push(gadgets["pop rax"]);
        this.push(dest);
        this.push(gadgets["mov rax, [rax]"]);
        this.push(gadgets["pop rdx"]);
        this.push(value);
        this.push(gadgets["add rax, rdx"]);
        this.push(gadgets["mov [rdi], rax"]);
    }
    get_branch() {
        return this.branches.add32(this.branches_count++ * 0x10);
    }
    create_branch(type, value_address, compare_value) {
        let branch_addr = this.get_branch();
        this.push(gadgets["pop rcx"]);
        this.push(value_address);
        this.push(gadgets["pop rax"]);
        this.push(compare_value);
        this.push(gadgets["cmp [rcx], eax"]);
        this.push(gadgets["pop rax"]);
        this.push(0);
        if (type == this.branch_types.EQUAL) {
            this.push(gadgets["sete al"]);
        } else if (type == this.branch_types.ABOVE) {
            this.push(gadgets["seta al"]);
        } else if (type == this.branch_types.BELOW) {
            this.push(gadgets["setb al"]);
        } else if (type == this.branch_types.GREATER) {
            this.push(gadgets["setg al"]);
        } else if (type == this.branch_types.LESSER) {
            this.push(gadgets["setl al"]);
        } else {
            alert("illegal branch type.");
        }
        this.push(gadgets["shl rax, 3"]);
        this.push(gadgets["pop rdx"]);
        this.push(branch_addr);
        this.push(gadgets["add rax, rdx"]);
        this.push(gadgets["mov rax, [rax]"]);
        this.push(gadgets["pop rdi"]);
        let branch_pointer_pointer_idx = this.increment_stack();
        this.push(gadgets["mov [rdi], rax"]);
        this.push(gadgets["pop rsp"]);
        let branch_pointer = this.get_rsp();
        this.increment_stack();
        this.set_entry(branch_pointer_pointer_idx, branch_pointer);
        return branch_addr;
    }
    set_branch_points(branch_addr, rsp_condition_met, rsp_condition_not_met) {
        p.write8(branch_addr.add32(0x0), rsp_condition_not_met);
        p.write8(branch_addr.add32(0x8), rsp_condition_met);
    }
    increment_dword(address) {
        this.push(gadgets["pop rax"]);
        this.push(address);
        this.push(gadgets["inc dword [rax]"]);
    }
}
class worker_rop extends rop {
    constructor(stack_size, reserved_stack) {
        super(stack_size, reserved_stack);
        p.pre_chain(this);
    }
    clear() {
        super.clear();
        p.pre_chain(this);
    }
    async call(rip, rdi, rsi, rdx, rcx, r8, r9) {
        this.fcall(rip, rdi, rsi, rdx, rcx, r8, r9);
        this.write_result(this.return_value);
        await this.run();
        return p.read8(this.return_value);
    }
    async syscall(sysc, rdi, rsi, rdx, rcx, r8, r9) {
        return await this.call(syscalls[sysc], rdi, rsi, rdx, rcx, r8, r9);
    }
    async add_syscall(sysc, rdi, rsi, rdx, rcx, r8, r9) {
        this.fcall(syscalls[sysc], rdi, rsi, rdx, rcx, r8, r9);
    }
    async add_syscall_ret(retstore, sysc, rdi, rsi, rdx, rcx, r8, r9) {
        this.fcall(syscalls[sysc], rdi, rsi, rdx, rcx, r8, r9);
        this.write_result(retstore);
    }
    async run() {
        await p.launch_chain(this);
        this.clear();
    }
}
class thread_rop extends rop {
    constructor(name = "rop_thread", stack_size, reserved_stack) {
        super(stack_size, reserved_stack);
        this.set_initial_count(1);
        p.write8(this.stack_memory, gadgets["ret"]); 
        p.write8(this.stack_memory.add32(0x08), 0x0); 
        p.write8(this.stack_memory.add32(0x10), this.stack_entry_point); 
        p.write8(this.stack_memory.add32(0x18), 0x0); 
        p.write8(this.stack_memory.add32(0x20), 0x0); 
        p.write8(this.stack_memory.add32(0x28), 0x0); 
        p.write8(this.stack_memory.add32(0x30), 0x0); 
        p.write8(this.stack_memory.add32(0x38), 0x0); 
        p.write4(this.stack_memory.add32(0x40), 0x37F); 
        p.write4(this.stack_memory.add32(0x44), 0x9FE0); 
        p.writestr(this.stack_memory.add32(0x50), name); 
    }
    async spawn_thread() {
        this.fcall(libKernelBase.add32(OFFSET_lk_pthread_exit), 0x44414544);
        await chain.call(libKernelBase.add32(OFFSET_lk_pthread_create_name_np), this.stack_memory.add32(0x48), 0x0, libSceLibcInternalBase.add32(OFFSET_lc_longjmp), this.stack_memory, this.stack_memory.add32(0x50));
        return p.read8(this.stack_memory.add32(0x48));
    }
}

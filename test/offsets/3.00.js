var sys_exit_addr = libkernel_base + 0x33B80;                           // sys_exit
var fork_addr = libkernel_base + 0x34B30;                               // sys_fork
var read_addr = libkernel_base + 0x32D50;                               // sys_read
var write_addr = libkernel_base + 0x32CB0;                              // sys_write
var open_addr = libkernel_base + 0x33350;                               // sys_open
var close_addr = libkernel_base + 0x33980;                              // sys_close
var wait_addr = libkernel_base + 0x32570;                               // sys_wait4
var unlink_addr = libkernel_base + 0x34670;                             // sys_unlink
var chdir_addr = libkernel_base + 0x34000;                              // sys_chdir
var chmod_addr = libkernel_base + 0x33A00;                              // sys_chmod
var getpid_addr = libkernel_base + 0x32ED0;                             // sys_getpid
var setuid_addr = libkernel_base + 0x329D0;                             // sys_setuid
var getuid_addr = libkernel_base + 0x33FE0;                             // sys_getuid
var gateuid_addr = libkernel_base + 0x33390;                            // sys_geteuid
var recvmsg_addr = libkernel_base + 0x33430;                            // sys_recvmsg
var sendmsg_addr = libkernel_base + 0x33660;                            // sys_sendmsg
var recfrom_addr = libkernel_base + 0x341B0;                            // sys_recvfrom
var accept_addr = libkernel_base + 0x328D0;                             // sys_accept
var getpeername_addr = libkernel_base + 0x326F0;                        // sys_getpeername
var getsockname_addr = libkernel_base + 0x34810;                        // sys_getsockname
var access_addr = libkernel_base + 0x34330;                             // sys_access
var chflags_addr = libkernel_base + 0x344B0;                            // sys_chflags
var fchflags_addr = libkernel_base + 0x33E80;                           // sys_fchflags
var sync_addr = libkernel_base + 0x34D60;                               // sys_sync
var kill_addr = libkernel_base + 0x33330;                               // sys_kill
var getppid_addr = libkernel_base + 0x32DD0;                            // sys_getppid
var dup_addr = libkernel_base + 0x34390;                                // sys_dup
var pipe_addr = libkernel_base + 0x32D20;                               // sys_pipe
var getgid_addr = libkernel_base + 0x349D0;                             // sys_getegid
var profil_addr = libkernel_base + 0x34D20;                             // sys_profil
var getgid_addr = libkernel_base + 0x32870;                             // sys_getgid
var getlogin_addr = libkernel_base + 0x32850;                           // sys_getlogin
var setlogin_addr = libkernel_base + 0x340E0;                           // sys_setlogin
var sigaltstack_addr = libkernel_base + 0x32A90;                        // sys_sigaltstack
var ioctl_addr = libkernel_base + 0x32BF0;                              // sys_ioctl
var reboot_addr = libkernel_base + 0x33EC0;                             // sys_reboot
var revoke_addr = libkernel_base + 0x33DC0;                             // sys_revoke
var execve_addr = libkernel_base + 0x340C0;                             // sys_execve
var msync_addr = libkernel_base + 0x33A60;                              // sys_msync
var munmap_addr = libkernel_base + 0x33250;                             // sys_munmap
var mpotect_addr = libkernel_base + 0x33FC0;                            // sys_mprotect
var madvise_addr = libkernel_base + 0x33140;                            // sys_madvise
var mincore_addr = libkernel_base + 0x33310;                            // sys_mincore
var getgroups_addr = libkernel_base + 0x327D0;                          // sys_getgroups
var setgroups_addr = libkernel_base + 0x32D70;                          // sys_setgroups
var setitimer_addr = libkernel_base + 0x327B0;                          // sys_setitimer
var getitimer_addr = libkernel_base + 0x325D0;                          // sys_getitimer
var getdtablesize_addr = libkernel_base + 0x33E20;                      // sys_getdtablesize
var dup2_addr = libkernel_base + 0x34230;                               // sys_dup2
var fcntl_addr = libkernel_base + 0x33860;                              // sys_fcntl
var select_addr = libkernel_base + 0x333B0;                             // sys_select
var fsync_addr = libkernel_base + 0x32810;                              // sys_fsync
var setpriority_addr = libkernel_base + 0x33740;                        // sys_setpriority
var socket_addr = libkernel_base + 0x32F90;                             // sys_socket
var connect_addr = libkernel_base + 0x34020;                            // sys_connect
var netcontrol_addr = libkernel_base + 0x34990;                         // sys_netcontrol
var getpriority_addr = libkernel_base + 0x32590;                        // sys_getpriority
var sys_netabort = libkernel_base + 0x345B0;                            // sys_netabort
var netgetsockinfo_addr = libkernel_base + 0x34930;                     // sys_netgetsockinfo
var bind_addr = libkernel_base + 0x34630;                               // sys_bind
var setsockopt_addr = libkernel_base + 0x338A0;                         // sys_setsockopt
var listen_addr = libkernel_base + 0x32B90;                             // sys_listen
var socketex_addr = libkernel_base + 0x33BA0;                           // sys_socketex
var socketclose_addr = libkernel_base + 0x33570;                        // sys_socketclose
var gettimeofday_addr = libkernel_base + 0x34D40;                       // sys_gettimeofday
var getrusage_addr = libkernel_base + 0x34E20;                          // sys_getrusage
var getsockopt_addr = libkernel_base + 0x32550;                         // sys_getsockopt
var readv_addr = libkernel_base + 0x337E0;                              // sys_readv
var writev_addr = libkernel_base + 0x33640;                             // sys_writev
var settimeofday_addr = libkernel_base + 0x34290;                       // sys_settimeofday
var fchmod_addr = libkernel_base + 0x331D0;                             // sys_fchmod
var netgetiflist_addr = libkernel_base + 0x33A40;                       // sys_netgetiflist
var setreuid_addr = libkernel_base + 0x34910;                           // sys_setreuid
var setreuid_addr = libkernel_base + 0x33530;                           // sys_setregid
var rename_addr = libkernel_base + 0x34490;                             // sys_rename
var flock_addr = libkernel_base + 0x334B0;                              // sys_flock
var sendto_addr = libkernel_base + 0x34D80;                             // sys_sendto
var shutdown_addr = libkernel_base + 0x34BB0;                           // sys_shutdown
var socketpair_addr = libkernel_base + 0x33F40;                         // sys_socketpair
var mkdir_addr = libkernel_base + 0x33CE0;                              // sys_mkdir
var rmdir_addr = libkernel_base + 0x32F30;                              // sys_rmdir
var utimes_addr = libkernel_base + 0x32440;                             // sys_utimes
var adjtime_addr = libkernel_base + 0x348D0;                            // sys_adjtime
var kqueueex_addr = libkernel_base + 0x33A20;                           // sys_kqueueex
var setsid_addr = libkernel_base + 0x33C80;                             // sys_setsid
var sysarch_addr = libkernel_base + 0x32770;                            // sys_sysarch
var setegid_addr = libkernel_base + 0x34710;                            // sys_setegid
var seteuid_addr = libkernel_base + 0x325B0;                            // sys_seteuid
var stat_addr = libkernel_base + 0x34770;                               // sys_stat
var fstat_addr = libkernel_base + 0x34B70;                              // sys_fstat
var lstat_addr = libkernel_base + 0x33550;                              // sys_lstat
var pathconf_addr = libkernel_base + 0x32C50;                           // sys_pathconf
var fpathconf_addr = libkernel_base + 0x33F00;                          // sys_fpathconf
var getrlimit_addr = libkernel_base + 0x33490;                          // sys_getrlimit
var setrlimit_addr = libkernel_base + 0x33070;                          // sys_setrlimit
var getdirentries_addr = libkernel_base + 0x34690;                      // sys_getdirentries
var __sysctl_addr = libkernel_base + 0x34470;                           // sys___sysctl
var mlock_addr = libkernel_base + 0x33B20;                              // sys_mlock
var munlock_addr = libkernel_base + 0x34510;                            // sys_munlock
var futimes_addr = libkernel_base + 0x32FD0;                            // sys_futimes
var poll_addr = libkernel_base + 0x335B0;                               // sys_poll
var clock_gettime_addr = libkernel_base + 0x32670;                      // sys_clock_gettime
var clock_settime_addr = libkernel_base + 0x33AE0;                      // sys_clock_settime
var clock_getres_addr = libkernel_base + 0x34AE0;                       // sys_clock_getres
var ktimer_create_addr = libkernel_base + 0x346B0;                      // sys_ktimer_create
var ktimer_delete_addr = libkernel_base + 0x32E30;                      // sys_ktimer_delete
var ktimer_settime_addr = libkernel_base + 0x34B90;                     // sys_ktimer_settime
var ktimer_gettime_addr = libkernel_base + 0x34040;                     // sys_ktimer_gettime
var ktimer_getoverrun_addr = libkernel_base + 0x331F0;                  // sys_ktimer_getoverrun
var nanosleep_addr = libkernel_base + 0x34570;                          // sys_nanosleep
var getcounter_addr = libkernel_base + 0x33DA0;                         // sys_ffclock_getcounter
var ffclock_setestimate_addr = libkernel_base + 0x32D90;                // sys_ffclock_setestimate
var ffclock_getestimate_addr = libkernel_base + 0x33C20;                // sys_ffclock_getestimate
var clock_getcpuclockid2_addr = libkernel_base + 0x34610;               // sys_clock_getcpuclockid2
var issetugid_addr = libkernel_base + 0x341D0;                          // sys_issetugid
var getdents_addr = libkernel_base + 0x34970;                           // sys_getdents
var preadv_addr = libkernel_base + 0x34080;                             // sys_preadv
var pwritev_addr = libkernel_base + 0x335D0;                            // sys_pwritev
var getsid_addr = libkernel_base + 0x332D0;                             // sys_getsid
var aio_suspend_addr = libkernel_base + 0x34790;                        // sys_aio_suspend
var mlockall_addr = libkernel_base + 0x32E50;                           // sys_mlockall
var munlockall_addr = libkernel_base + 0x34250;                         // sys_munlockall
var sched_setparam_addr = libkernel_base + 0x32F50;                     // sys_sched_setparam
var sched_getparam_addr = libkernel_base + 0x33BC0;                     // sys_sched_getparam
var sched_setscheduler_addr = libkernel_base + 0x32710;                 // sys_sched_setscheduler
var sched_getscheduler_addr = libkernel_base + 0x33590;                 // sys_sched_getscheduler
var sched_yield_addr = libkernel_base + 0x333F0;                        // sys_sched_yield
var sched_get_priority_max_addr = libkernel_base + 0x32990;             // sys_sched_get_priority_max
var sched_get_priority_min_addr = libkernel_base + 0x32AB0;             // sys_sched_get_priority_min
var sched_rr_get_interval_addr = libkernel_base + 0x32CE0;              // sys_sched_rr_get_interval
var sigprocmask_addr = libkernel_base + 0x324A0;                        // sys_sigprocmask
var sigsuspend_addr = libkernel_base + 0x324E0;                         // sys_sigsuspend
var sigpending_addr = libkernel_base + 0x343B0;                         // sys_sigpending
var sigtimedwait_addr = libkernel_base + 0x344D0;                       // sys_sigtimedwait
var sigwaitinfo_addr = libkernel_base + 0x34110;                        // sys_sigwaitinfo
var kqueue_addr = libkernel_base + 0x346F0;                             // sys_kqueue
var kevent_addr = libkernel_base + 0x32950;                             // sys_kevent
var mtypeprotect_addr = libkernel_base + 0x328F0;                       // sys_mtypeprotect
var uuidgen_addr = libkernel_base + 0x32A10;                            // sys_uuidgen
var sendfile_addr = libkernel_base + 0x34E60;                           // sys_sendfile
var fstatfs_addr = libkernel_base + 0x32EB0;                            // sys_fstatfs
var ksem_close_addr = libkernel_base + 0x32A70;                         // sys_ksem_close
var ksem_post_addr = libkernel_base + 0x33800;                          // sys_ksem_post
var ksem_wait_addr = libkernel_base + 0x340A0;                          // sys_ksem_wait
var ksem_trywait_addr = libkernel_base + 0x34E40;                       // sys_ksem_trywait
var ksem_init_addr = libkernel_base + 0x32BB0;                          // sys_ksem_init
var ksem_open_addr = libkernel_base + 0x345D0;                          // sys_ksem_open
var ksem_unlink_addr = libkernel_base + 0x342B0;                        // sys_ksem_unlink
var ksem_getvalue_addr = libkernel_base + 0x32A30;                      // sys_ksem_getvalue
var ksem_destroy_addr = libkernel_base + 0x34270;                       // sys_ksem_destroy
var sigaction_addr = libkernel_base + 0x34750;                          // sys_sigaction
var sigreturn_addr = libkernel_base + 0x343F0;                          // sys_sigreturn
var getcontext_addr = libkernel_base + 0x330D0;                         // sys_getcontext
var setcontext_addr = libkernel_base + 0x33E00;                         // sys_setcontext
var swapcontext_addr = libkernel_base + 0x33F20;                        // sys_swapcontext
var sigwait_addr = libkernel_base + 0x33120;                            // sys_sigwait
var thr_create_addr = libkernel_base + 0x327F0;                         // sys_thr_create
var thr_exit_addr = libkernel_base + 0x32B50;                           // sys_thr_exit
var thr_self_addr = libkernel_base + 0x334F0;                           // sys_thr_self
var thr_kill_addr = libkernel_base + 0x32B70;                           // sys_thr_kill
var ksem_timedwait_addr = libkernel_base + 0x34190;                     // sys_ksem_timedwait
var thr_suspend_addr = libkernel_base + 0x324C0;                        // sys_thr_suspend
var thr_wake_addr = libkernel_base + 0x32DF0;                           // sys_thr_wake
var kldunloadf_addr = libkernel_base + 0x33E60;                         // sys_kldunloadf
var _umtx_op_addr = libkernel_base + 0x34B50;                           // sys__umtx_op
var thr_new_addr = libkernel_base + 0x34890;                            // sys_thr_new
var sigqueue_addr = libkernel_base + 0x347F0;                           // sys_sigqueue
var thr_set_name_addr = libkernel_base + 0x34150;                       // sys_thr_set_name
var rtprio_thread_addr = libkernel_base + 0x33700;                      // sys_rtprio_thread
var pread_addr = libkernel_base + 0x32E90;                              // sys_pread
var pwrite_addr = libkernel_base + 0x33FA0;                             // sys_pwrite
var mmap_addr = libkernel_base + 0x34870;                               // sys_mmap
var lseek_addr = libkernel_base + 0x34370;                              // sys_lseek
var truncate_addr = libkernel_base + 0x33410;                           // sys_truncate
var ftruncate_addr = libkernel_base + 0x32E70;                          // sys_ftruncate
var thr_kill2_addr = libkernel_base + 0x32460;                          // sys_thr_kill2
var shm_open_addr = libkernel_base + 0x34DE0;                           // sys_shm_open
var shm_unlink_addr = libkernel_base + 0x34850;                         // sys_shm_unlink
var cpuset_getid_addr = libkernel_base + 0x33090;                       // sys_cpuset_getid
var cpuset_getaffinity_addr = libkernel_base + 0x34C50;                 // sys_cpuset_getaffinity
var cpuset_setaffinity_addr = libkernel_base + 0x34410;                 // sys_cpuset_setaffinity
var openat_addr = libkernel_base + 0x32830;                             // sys_openat
var __cap_rights_get_addr = libkernel_base + 0x33EE0;                   // sys___cap_rights_get
var pselect_addr = libkernel_base + 0x33920;                            // sys_pselect
var regmgr_call_addr = libkernel_base + 0x339E0;                        // sys_regmgr_call
var jitshm_create_addr = libkernel_base + 0x33760;                      // sys_jitshm_create
var jitshm_alias_addr = libkernel_base + 0x33D40;                       // sys_jitshm_alias
var dl_get_list_addr = libkernel_base + 0x32C30;                        // sys_dl_get_list
var dl_get_info_addr = libkernel_base + 0x33A80;                        // sys_dl_get_info
var evf_create_addr = libkernel_base + 0x339C0;                         // sys_evf_create
var evf_delete_addr = libkernel_base + 0x32E10;                         // sys_evf_delete
var evf_open_addr = libkernel_base + 0x33D60;                           // sys_evf_open
var evf_close_addr = libkernel_base + 0x33940;                          // sys_evf_close
var evf_wait_addr = libkernel_base + 0x33C00;                           // sys_evf_wait
var evf_trywait_addr = libkernel_base + 0x343D0;                        // sys_evf_trywait
var evf_set_addr = libkernel_base + 0x33D80;                            // sys_evf_set
var evf_clear_addr = libkernel_base + 0x342F0;                          // sys_evf_clear
var evf_cancel_addr = libkernel_base + 0x33100;                         // sys_evf_cancel
var query_memory_protection_addr = libkernel_base + 0x33BE0;            // sys_query_memory_protection
var batch_map_addr = libkernel_base + 0x334D0;                          // sys_batch_map
var osem_create_addr = libkernel_base + 0x336E0;                        // sys_osem_create
var osem_delete_addr = libkernel_base + 0x326B0;                        // sys_osem_delete
var osem_open_addr = libkernel_base + 0x32630;                          // sys_osem_open
var osem_close_addr = libkernel_base + 0x34C30;                         // sys_osem_close
var osem_wait_addr = libkernel_base + 0x33CC0;                          // sys_osem_wait
var osem_trywait_addr = libkernel_base + 0x342D0;                       // sys_osem_trywait
var osem_post_addr = libkernel_base + 0x33F60;                          // sys_osem_post
var osem_cancel_addr = libkernel_base + 0x33840;                        // sys_osem_cancel
var namedobj_create_addr = libkernel_base + 0x335F0;                    // sys_namedobj_create
var namedobj_delete_addr = libkernel_base + 0x332F0;                    // sys_namedobj_delete
var set_vm_container_addr = libkernel_base + 0x34EC0;                   // sys_set_vm_container
var debug_init_addr = libkernel_base + 0x32DB0;                         // sys_debug_init
var opmc_enable_addr = libkernel_base + 0x33720;                        // sys_opmc_enable
var opmc_disable_addr = libkernel_base + 0x32790;                       // sys_opmc_disable
var opmc_set_ctl_addr = libkernel_base + 0x337A0;                       // sys_opmc_set_ctl
var opmc_set_ctr_addr = libkernel_base + 0x337C0;                       // sys_opmc_set_ctr
var opmc_get_ctr_addr = libkernel_base + 0x34210;                       // sys_opmc_get_ctr
var virtual_query_addr = libkernel_base + 0x33030;                      // sys_virtual_query
var is_in_sandbox_addr = libkernel_base + 0x34650;                      // sys_is_in_sandbox
var dmem_container_addr = libkernel_base + 0x33210;                     // sys_dmem_container
var get_authinfo_addr = libkernel_base + 0x33AC0;                       // sys_get_authinfo
var mname_addr = libkernel_base + 0x32610;                              // sys_mname
var dynlib_dlsym_addr = libkernel_base + 0x32C10;                       // sys_dynlib_dlsym
var dynlib_get_list_addr = libkernel_base + 0x32F10;                    // sys_dynlib_get_list
var dynlib_get_info_addr = libkernel_base + 0x349B0;                    // sys_dynlib_get_info
var dynlib_load_prx_addr = libkernel_base + 0x338C0;                    // sys_dynlib_load_prx
var dynlib_unload_prx_addr = libkernel_base + 0x328B0;                  // sys_dynlib_unload_prx
var dynlib_do_copy_relocations_addr = libkernel_base + 0x34730;         // sys_dynlib_do_copy_relocations
var dynlib_get_proc_param_addr = libkernel_base + 0x336C0;              // sys_dynlib_get_proc_param
var dynlib_process_needed_and_relocate_addr = libkernel_base + 0x34A10; // sys_dynlib_process_needed_and_relocate
var sandbox_path_addr = libkernel_base + 0x32480;                       // sys_sandbox_path
var mdbg_service_addr = libkernel_base + 0x32FF0;                       // sys_mdbg_service
var randomized_path_addr = libkernel_base + 0x33680;                    // sys_randomized_path
var rdup_addr = libkernel_base + 0x344F0;                               // sys_rdup
var dl_get_metadata_addr = libkernel_base + 0x32AF0;                    // sys_dl_get_metadata
var workaround8849_addr = libkernel_base + 0x33230;                     // sys_workaround8849
var is_development_mode_addr = libkernel_base + 0x329F0;                // sys_is_development_mode
var get_self_auth_info_addr = libkernel_base + 0x33B60;                 // sys_get_self_auth_info
var dynlib_get_info_ex_addr = libkernel_base + 0x34E00;                 // sys_dynlib_get_info_ex
var budget_get_ptype_addr = libkernel_base + 0x34EA0;                   // sys_budget_get_ptype
var get_paging_stats_of_all_threads_addr = libkernel_base + 0x32D00;    // sys_get_paging_stats_of_all_threads
var get_proc_type_info_addr = libkernel_base + 0x34C10;                 // sys_get_proc_type_info
var get_resident_count_addr = libkernel_base + 0x32420;                 // sys_get_resident_count
var get_resident_fmem_count_addr = libkernel_base + 0x33780;            // sys_get_resident_fmem_count
var thr_get_name_addr = libkernel_base + 0x34830;                       // sys_thr_get_name
var set_gpo_addr = libkernel_base + 0x33E40;                            // sys_set_gpo
var get_paging_stats_of_all_objects_addr = libkernel_base + 0x33B40;    // sys_get_paging_stats_of_all_objects
var test_debug_rwmem_addr = libkernel_base + 0x32930;                   // sys_test_debug_rwmem
var free_stack_addr = libkernel_base + 0x32A50;                         // sys_free_stack
var ipmimgr_call_addr = libkernel_base + 0x32650;                       // sys_ipmimgr_call
var get_gpo_addr = libkernel_base + 0x33AA0;                            // sys_get_gpo
var get_vm_map_timestamp_addr = libkernel_base + 0x34E80;               // sys_get_vm_map_timestamp
var opmc_set_hw_addr = libkernel_base + 0x34430;                        // sys_opmc_set_hw
var opmc_get_hw_addr = libkernel_base + 0x32F70;                        // sys_opmc_get_hw
var get_cpu_usage_all_addr = libkernel_base + 0x325F0;                  // sys_get_cpu_usage_all
var mmap_dmem_addr = libkernel_base + 0x33C60;                          // sys_mmap_dmem
var physhm_open_addr = libkernel_base + 0x33010;                        // sys_physhm_open
var physhm_unlink_addr = libkernel_base + 0x33820;                      // sys_physhm_unlink
var thr_suspend_ucontext_addr = libkernel_base + 0x34DC0;               // sys_thr_suspend_ucontext
var thr_resume_ucontext_addr = libkernel_base + 0x332B0;                // sys_thr_resume_ucontext
var thr_get_ucontext_addr = libkernel_base + 0x33270;                   // sys_thr_get_ucontext
var thr_set_ucontext_addr = libkernel_base + 0x33370;                   // sys_thr_set_ucontext
var set_timezone_info_addr = libkernel_base + 0x32FB0;                  // sys_set_timezone_info
var set_phys_fmem_limit_addr = libkernel_base + 0x33D00;                // sys_set_phys_fmem_limit
var utc_to_localtime_addr = libkernel_base + 0x330B0;                   // sys_utc_to_localtime
var localtime_to_utc_addr = libkernel_base + 0x34EE0;                   // sys_localtime_to_utc
var set_uevt_addr = libkernel_base + 0x34060;                           // sys_set_uevt
var get_cpu_usage_proc_addr = libkernel_base + 0x32BD0;                 // sys_get_cpu_usage_proc
var get_map_statistics_addr = libkernel_base + 0x33450;                 // sys_get_map_statistics
var set_chicken_switches_addr = libkernel_base + 0x341F0;               // sys_set_chicken_switches
var get_kernel_mem_statistics_addr = libkernel_base + 0x34B10;          // sys_get_kernel_mem_statistics
var get_sdk_compiled_version_addr = libkernel_base + 0x33D20;           // sys_get_sdk_compiled_version
var app_state_change_addr = libkernel_base + 0x32690;                   // sys_app_state_change
var dynlib_get_obj_member_addr = libkernel_base + 0x348B0;              // sys_dynlib_get_obj_member
var process_terminate_addr = libkernel_base + 0x32730;                  // sys_process_terminate
var blockpool_open_addr = libkernel_base + 0x32EF0;                     // sys_blockpool_open
var blockpool_map_addr = libkernel_base + 0x32C90;                      // sys_blockpool_map
var blockpool_unmap_addr = libkernel_base + 0x346D0;                    // sys_blockpool_unmap
var dynlib_get_info_for_libdbg_addr = libkernel_base + 0x34310;         // sys_dynlib_get_info_for_libdbg
var blockpool_batch_addr = libkernel_base + 0x333D0;                    // sys_blockpool_batch
var fdatasync_addr = libkernel_base + 0x32B30;                          // sys_fdatasync
var dynlib_get_list2_addr = libkernel_base + 0x33050;                   // sys_dynlib_get_list2
var dynlib_get_info2_addr = libkernel_base + 0x34DA0;                   // sys_dynlib_get_info2
var aio_submit_addr = libkernel_base + 0x34550;                         // sys_aio_submit
var aio_multi_delete_addr = libkernel_base + 0x32AD0;                   // sys_aio_multi_delete
var aio_multi_wait_addr = libkernel_base + 0x33900;                     // sys_aio_multi_wait
var aio_multi_poll_addr = libkernel_base + 0x329B0;                     // sys_aio_multi_poll
var aio_get_data_addr = libkernel_base + 0x34450;                       // sys_aio_get_data
var aio_multi_cancel_addr = libkernel_base + 0x338E0;                   // sys_aio_multi_cancel
var get_bio_usage_all_addr = libkernel_base + 0x32890;                  // sys_get_bio_usage_all
var aio_create_addr = libkernel_base + 0x33F80;                         // sys_aio_create
var aio_submit_cmd_addr = libkernel_base + 0x349F0;                     // sys_aio_submit_cmd
var aio_init_addr = libkernel_base + 0x348F0;                           // sys_aio_init
var get_page_table_stats_addr = libkernel_base + 0x34350;               // sys_get_page_table_stats
var dynlib_get_list_for_libdbg_addr = libkernel_base + 0x347B0;         // sys_dynlib_get_list_for_libdbg
var blockpool_move_addr = libkernel_base + 0x34950;                     // sys_blockpool_move
var virtual_query_all_addr = libkernel_base + 0x347D0;                  // sys_virtual_query_all
var reserve_2mb_page_addr = libkernel_base + 0x33880;                   // sys_reserve_2mb_page
var cpumode_yield_addr = libkernel_base + 0x34130;                      // sys_cpumode_yield
var wait6_addr = libkernel_base + 0x33C40;                              // sys_wait6
var cap_rights_limit_addr = libkernel_base + 0x336A0;                   // sys_cap_rights_limit
var cap_ioctls_limit_addr = libkernel_base + 0x32C70;                   // sys_cap_ioctls_limit
var cap_ioctls_get_addr = libkernel_base + 0x339A0;                     // sys_cap_ioctls_get
var cap_fcntls_limit_addr = libkernel_base + 0x34170;                   // sys_cap_fcntls_limit
var cap_fcntls_get_addr = libkernel_base + 0x32910;                     // sys_cap_fcntls_get
var bindat_addr = libkernel_base + 0x34C70;                             // sys_bindat
var connectat_addr = libkernel_base + 0x33470;                          // sys_connectat
var chflagsat_addr = libkernel_base + 0x326D0;                          // sys_chflagsat
var accept4_addr = libkernel_base + 0x32520;                            // sys_accept4
var pipe2_addr = libkernel_base + 0x32B10;                              // sys_pipe2
var aio_mlock_addr = libkernel_base + 0x33510;                          // sys_aio_mlock
var procctl_addr = libkernel_base + 0x34BF0;                            // sys_procctl
var ppoll_addr = libkernel_base + 0x33EA0;                              // sys_ppoll
var futimens_addr = libkernel_base + 0x33DE0;                           // sys_futimens
var utimensat_addr = libkernel_base + 0x34590;                          // sys_utimensat
var numa_getaffinity_addr = libkernel_base + 0x33B00;                   // sys_numa_getaffinity
var numa_setaffinity_addr = libkernel_base + 0x33960;                   // sys_numa_setaffinity
var get_phys_page_size_addr = libkernel_base + 0x32970;                 // sys_get_phys_page_size
var get_ppr_sdk_compiled_version_addr = libkernel_base + 0x34BD0;       // sys_get_ppr_sdk_compiled_version
var openintr_addr = libkernel_base + 0x331B0;                           // sys_openintr
var dl_get_info_2_addr = libkernel_base + 0x33CA0;                      // sys_dl_get_info_2
var acinfo_add_addr = libkernel_base + 0x33290;                         // sys_acinfo_add
var acinfo_delete_addr = libkernel_base + 0x32500;                      // sys_acinfo_delete
var acinfo_get_all_for_coredump_addr = libkernel_base + 0x34530;        // sys_acinfo_get_all_for_coredump
var ampr_ctrl_debug_addr = libkernel_base + 0x345F0;                    // sys_ampr_ctrl_debug
var sys_workspace_ctrl_addr = libkernel_base + 0x32750;                 // sys_workspace_ctrl
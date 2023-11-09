PSFree is a WebKit exploit using CVE-2022-22620 to gain arbitrary read/write.

This exploit was initially for the PS4 firmware version 8.03. CelesteBlue has
tested and confirmed that the original works on 7.00-8.52 and helped in making
the patches for 6.50-6.72, 9.00-9.60, and PS5 1.00-5.50.

CREDITS:
* CelesteBlue from ps4-dev on discord.com for testing and porting to other
  firmwares
* Quentin Meffre (@0xdagger) and Mehdi Talbi (@abu_y0ussef) for the 6.xx
  buildBubbleTree() UaF exploit that served as the framework for this exploit
* Maddie Stone for the CVE writeup


OLD README:
PSFree is a WebKit exploit using CVE-2022-22620 to gain arbitrary read/write.

This exploit is for the PS4 firmware version 8.03


Porting to other firmware versions:

The only non-portable parts of the exploit (assuming the firmware is
vulnerable) are:
    1. the size of SerializedScriptValue and the offsets of its fields
    2. how to achieve an arbitrary decrement primitive

There also other objects used by this exploit such as StringImpl. They too are
also subject to change between different firmware versions but are very stable
hence why we did not list them.

Number 2 is used to corrupt the length of the JSArrayBufferView. This exploit
manipulated the destructor ~SerializedScriptValue() to achieve the wanted
result.

There is possibly a restricted free primitive via repeatedly corrupting any
object that gets allocated at a JSArrayBufferView and changing its contents so
that is frees another object.

For example you could modify a StringImpl to have its data pointer point to a
target address and set its BufferOwnership to BufferOwned and have it
destroyed.

The primitive is restricted as you can only fastFree() addresses known by the
fastMalloc allocator. This means an address on the fastMalloc heap, regardless
of whether it is free or not.

This means you can recreate any previous fastMalloc use-after-free exploit.

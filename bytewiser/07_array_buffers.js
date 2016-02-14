var n = Number(process.argv[2])
var ui32 = new Uint32Array([ n ])
var ui16 = new Uint16Array(ui32.buffer)
console.log(JSON.stringify(ui16))

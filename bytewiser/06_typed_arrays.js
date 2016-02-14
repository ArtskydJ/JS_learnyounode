process.stdin.on('data', function (buf) {
	var typedArray = new Uint8Array(buf)
	console.log(JSON.stringify(typedArray))
})

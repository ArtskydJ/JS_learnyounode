var chunks = []

process.stdin.on('data', function (buf) {
	chunks.push(buf)
}).on('end', function () {
	console.log(Buffer.concat(chunks))
})

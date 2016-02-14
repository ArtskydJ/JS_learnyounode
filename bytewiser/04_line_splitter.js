var fs = require('fs')

var NEWLINE = '\n'.charCodeAt(0)

var filePath = process.argv[2]

fs.readFile(filePath, function (err, buf) {
	var lastNewline = 0
	for (var i = 0; i < buf.length; i++) {
		if (buf[i] === NEWLINE || i === buf.length - 1) {
			console.log(buf.slice(lastNewline, i))
			lastNewline = i + 1
		}
	}
})

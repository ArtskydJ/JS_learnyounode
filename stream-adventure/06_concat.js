var concat = require('concat-stream')

process.stdin.pipe(concat(function reverse(buf) {
	console.log( buf.toString().split('').reverse().join('') )
}))

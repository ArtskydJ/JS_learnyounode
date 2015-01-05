var combine = require('stream-combiner')
var zlib = require('zlib')
var split = require('split')
var through = require('through2')

module.exports = function () {
	var genre = ''
	var books = []
	return combine(
		process.stdin,
		split(),
		through(function (chunk, enc, cb) {
			var obj = JSON.parse(chunk.toString())
			if (obj.type == 'genre') {
				this.push({genre: genre, books: books})
				genre = obj.name
				books = []
			} else {
				books.push(obj.name)
			}
			cb()
		}, function (cb) {
			this.push({genre: genre, books: books})
			cb()
		}),
		zlib.createGzip(),
		process.stdout
	)
}
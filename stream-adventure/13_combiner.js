var combine = require('stream-combiner')
var zlib = require('zlib')
var split = require('split')
var through = require('through2')

function genreSplitter() {
	var row = null
	return through(write, end)

	function write(chunk, enc, cb) {
		var obj = JSON.parse(chunk.toString() || '{}');
		if (obj.type === 'genre') {
			var str = row && JSON.stringify(row)
			str && this.push(str + '\n')
			row = { name: obj.name, books: [] }
		} else if (obj.type === 'book') {
			row.books.push(obj.name)
		}
		cb()
	}

	function end(cb) {
		this.push(JSON.stringify(row) + '\n')
		cb()
	}
}

module.exports = function () {
	return combine(
		split(),
		genreSplitter(),
		zlib.createGzip()
	)
}

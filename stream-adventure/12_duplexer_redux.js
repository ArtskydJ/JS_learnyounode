var duplexer = require('duplexer')
var stream = require('stream')

module.exports = function (counter) {
	var input = new stream.Readable()
	return duplexer(input, counter)
}

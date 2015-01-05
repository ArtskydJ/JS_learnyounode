var through = require('through2-map')
module.exports = function (up, newLine) {
	if (typeof up === 'undefined') { up = true }
	return through(function makeUpper(buf) {
		var s = buf.toString()
		return ( (up? s.toUpperCase() : s.toLowerCase()) + (newLine? '\n' : '') )
	})
}

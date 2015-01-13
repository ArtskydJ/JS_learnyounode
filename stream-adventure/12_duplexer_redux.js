var duplexer = require('duplexer')
var thru = require('through2')

module.exports = function (counter) {
	var counts = {}
	var capture = thru.obj(function ondata(obj, e, cb) {
		counts[obj.country] = (counts[obj.country] || 0) + 1
		cb() //through2 cruft
	}, counter.setCounts.bind(counter, counts))
	return duplexer(capture, counter) //writable, readable
}

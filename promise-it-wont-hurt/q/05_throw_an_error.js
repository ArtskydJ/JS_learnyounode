var q = require('q')
var badJSON = process.argv[2]

function parsePromised() {
	var defer = q.defer()
	try {
		defer.fulfill(JSON.parse(badJSON))
	} catch (e) {
		defer.reject(e)
	}
	return defer.promise
}

parsePromised()
	.then(console.log, console.log)

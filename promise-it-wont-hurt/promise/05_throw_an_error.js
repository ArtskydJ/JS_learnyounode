var Promise = require('promise')
var badJSON = process.argv[2]

function parsePromised() {
	return new Promise(function (fulfill, reject) {
		try {
			fulfill(JSON.parse(badJSON))
		} catch (e) {
			reject(e)
		}
	})
}

parsePromised()
	.then(console.log, console.log)

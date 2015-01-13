var q = require('q')
var defer = q.defer()
defer.promise
	.then(attachTitle)
	.then(console.log)

function attachTitle(whom) {
	return 'DR. ' + whom
}

defer.fulfill('MANHATTAN')

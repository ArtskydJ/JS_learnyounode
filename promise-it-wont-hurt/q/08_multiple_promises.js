var q = require('q')
var a = q.defer()
var b = q.defer()
setTimeout(function () {
	a.fulfill('PROMISES')
	b.fulfill('FTW')
}, 200)

function all() {
	return q.all([].slice.call(arguments))
}

all(a.promise, b.promise).then(console.log)

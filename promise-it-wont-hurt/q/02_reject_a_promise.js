var q = require('q')
var defer = q.defer()
defer.promise.then(null, console.log)

setTimeout(function () {
	defer.reject('REJECTED!') //new Error('REJECTED!')
}, 300)

var Promise = require('promise')

var promise = new Promise(function resolver(fulfill, reject) {
	setTimeout(function () {
		fulfill('RESOLVED!')
	}, 300)
})
promise.then(console.log)
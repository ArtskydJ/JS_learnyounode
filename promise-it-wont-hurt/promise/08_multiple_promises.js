var Promise = require('promise')
var a = new Promise(function (fulfill, reject) {
	setTimeout(fulfill, 200, 'PROMISES')
})
var b = new Promise(function (fulfill, reject) {
	setTimeout(fulfill, 200, 'FTW')
})

function all() {
	return Promise.all(arguments)
}

all(a, b).then(console.log)

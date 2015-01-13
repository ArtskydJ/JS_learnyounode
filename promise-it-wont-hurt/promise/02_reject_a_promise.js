var Promise = require('promise')
var p = new Promise(function (fulfill, reject) {
	setTimeout(reject, 300, 'REJECTED!') //new Error('REJECTED!')
})
p.then(null, console.log)

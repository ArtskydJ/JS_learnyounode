var Promise = require('promise')
var p = new Promise(function (fulfill, reject) {
	fulfill('SECOND')
})
p.then(console.log)
console.log('FIRST')

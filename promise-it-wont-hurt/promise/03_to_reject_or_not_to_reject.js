var Promise = require('promise')
var p = new Promise(function (fulfill, reject) {
	fulfill('I FIRED')
	reject('I DID NOT FIRE')
})
p.then(console.log, console.log)

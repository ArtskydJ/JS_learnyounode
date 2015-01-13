var Promise = require('promise')
var promise = new Promise(function (fulfill, reject) {
	fulfill('MANHATTAN')
})
promise
	.then(''.concat.bind('DR. '))
	.then(console.log)

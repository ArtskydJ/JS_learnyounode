var Promise = require('promise')
var requester = require('./requester.js')

requester('http://localhost:7000/')
	.then(''.concat.bind('http://localhost:7001/'))
	.then(requester)
	.then(JSON.parse)
	.then(console.log)
	.done()

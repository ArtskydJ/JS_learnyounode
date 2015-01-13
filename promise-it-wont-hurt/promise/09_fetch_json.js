var Promise = require('promise')
var requester = require('./requester.js')

requester('http://localhost:1337')
	.then(JSON.parse)
	.then(console.log)

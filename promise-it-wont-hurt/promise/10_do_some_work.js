var Promise = require('promise')
var requester = require('./requester.js')

requester('http://localhost:7000/')
	.then(function (str) {
		return 'http://localhost:7001/' + str
	}).then(requester)
	.then(JSON.parse)
	.then(console.log)
	.done()

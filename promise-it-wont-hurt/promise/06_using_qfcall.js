var Promise = require('promise')
var badJSON = process.argv[2]

new Promise(JSON.parse.bind(JSON, badJSON))
	.then(null, console.log)

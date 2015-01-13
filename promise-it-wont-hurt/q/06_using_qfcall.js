var q = require('q')
var badJSON = process.argv[2]

q.try(JSON.parse, badJSON)
	.then(null, console.log)

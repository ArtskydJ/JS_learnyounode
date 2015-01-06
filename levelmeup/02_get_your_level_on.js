var Level = require('level')
var dir = process.argv[2]
var key = process.argv[3]

var db = new Level(dir)

db.get(key, function (err, val) {
	console.log(val)
})

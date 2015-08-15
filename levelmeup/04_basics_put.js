var Level = require('level')
var db = Level(process.argv[2])
var obj = JSON.parse(process.argv[3])

Object.keys(obj).forEach(function (key) {
	db.put(key, obj[key])
})

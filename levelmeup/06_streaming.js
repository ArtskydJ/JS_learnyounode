var Level = require('level')
var dir = process.argv[2]

var db = Level(dir)

db.createReadStream().on('data', function (data) {
	console.log(data.key + '=' + data.value)
})

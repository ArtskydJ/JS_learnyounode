var Level = require('level')
var dir = process.argv[2]

var db = new Level(dir)

loop(0)

function loop(n) {
	var key = 'key' + n
	db.get(key, function (err, val) {
		if (!err) console.log(key + '=' + val)
		if (n < 100) loop(n+1)
	})
}

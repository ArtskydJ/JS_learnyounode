var Level = require('level')
var dir = process.argv[2]
var jsonStr = process.argv[3]

var jsonObj = JSON.parse(jsonStr)
var keys = Object.keys(jsonObj)

Level(dir, function init(err, db) {
	loop(0)

	function loop(n) {
		var key = keys[n]
		var val = jsonObj[key]
		//setTimeout(function () {
		db.put(key, val, function (err) {
			if (err) {
				console.error(err, n)
			}
			if (n < keys.length-1) {
				loop(n+1)
			}
		})
		//}, 20)
	}
})


var Level = require('level')
var fs = require('fs')
var dir = process.argv[2]
var file = process.argv[3]
process.nextTick(function () {
Level(dir, function init(err, db) {
	if (err) console.error('init err:', err.message)
	fs.readFile(file, {encoding: 'utf8'}, function (err, str) {
		if (err) console.error('fs err:', err.message)
		var batch = str.split('\n').map(function (line) {
			var pieces = line.split(',')
			return {
				type: pieces[0],
				key: pieces[1],
				value: pieces[2]
			}
		})
		db.batch(batch, function (err) {
			if (err) console.error('batch err:', err.message)
		})
	})
})
})

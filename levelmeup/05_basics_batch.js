var Level = require('level')
var fs = require('fs')
var db = Level(process.argv[2])
var file = fs.readFileSync(process.argv[3], { encoding: 'utf8' })

var batch = str.split('\n').map(function (line) {
	var pieces = line.split(',')
	return {
		type: pieces[0],
		key: pieces[1],
		value: pieces[2]
	}
})
db.batch(batch)

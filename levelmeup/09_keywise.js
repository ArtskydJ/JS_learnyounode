var Level = require('level')
var db = Level(process.argv[2], { valueEncoding: 'json' })
var obj = require(process.argv[3])

var batch = Object.keys(obj).map(function (prop) {
	var row = obj[prop]
	var key = ((row.type === 'repo') ? row.user + '!' : '') + row.name
	return { type: 'put', key: key, value: row }
})
db.batch(batch)

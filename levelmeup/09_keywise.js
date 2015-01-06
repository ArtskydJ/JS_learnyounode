var Level = require('level')
var obj = require(process.argv[3])
var keys = Object.keys(obj)

var actions = {
	user: function (whom) {
		return {type: 'put', key: whom, value: 'idk'}
	},
	repo: function (repo, whom) {
		return {type: 'put', key: whom, value: repo}
	}
}

Level(process.argv[2], {valueEncoding: 'json'}, function init(err, db) {
	if (err) throw err
	db.batch(
		keys.map(function (key) {
			var row = keys[key]
			actions[row.type](row.name, row.user)
		})
	)
})

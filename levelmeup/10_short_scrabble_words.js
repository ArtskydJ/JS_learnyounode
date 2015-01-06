function init(db, words, cb) {
	db.batch(
		words.map(function (word) {
			return {type: 'put', key: word, value: word.length}
		}),
	cb)
}

function query(db, queryWord, cb) {
	var words = []
	db.createReadStream({
		gte: queryWord.replace(/\*/g, 'A'),
		lte: queryWord.replace(/\*/g, 'Z')
	}).on('data', function (data) {
		if (data.value === '' + queryWord.length) {
			words.push(data.key)
		}
	}).on('error', function (err) {
		console.error(err)
		cb && cb(err)
		cb = null
	}).on('end', function () {
		console.error(words.length)
		cb && cb(null, words)
		cb = null
	})
}

module.exports = {
	init: init,
	query: query
}

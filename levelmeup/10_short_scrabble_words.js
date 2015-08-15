function init(db, words, cb) {
	var operations = words.map(function (word) {
		return { type: 'put', key: word.length + word, value: word.length }
	})
	db.batch(operations, cb)
}

function query(db, queryWord, cb) {
	var words = []
	db.createReadStream({
		gte: queryWord.length + queryWord.replace(/\*/g, 'A'),
		lte: queryWord.length + queryWord.replace(/\*/g, 'Z')
	}).on('data', function (data) {
		words.push(data.key.slice(1))
	}).on('end', function () {
		cb && cb(null, words)
		cb = null
	}).on('error', function (err) {
		cb && cb(err)
		cb = null
	})
}

module.exports = {
	init: init,
	query: query
}

// With this solution you should be able to query like D*D and get DAD, DID, and DUD.
// Officially, you only need to support wildcards (*) at the end of a query.

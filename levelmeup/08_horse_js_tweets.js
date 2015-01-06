module.exports = function horse(db, date, cb) {
	var tweets = []
	db.createValueStream({ gte: date, lte: date + '\x7f' })
		.on('data', function (tweet) { tweets.push(tweet) })
		.on('error', function (err) { cb = cb && cb(err) && null })
		.on('end', function () { cb = cb && cb(null, tweets) && null })
}

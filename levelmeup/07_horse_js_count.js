module.exports = function horse(db, date, cb) {
	var tweets = 0
	db.createReadStream({ gte: date })
		.on('data', function (data) { tweets++ })
		.on('error', function (err) { cb = cb && cb(err) && null })
		.on('end', function () { cb = cb && cb(null, tweets) && null })
}

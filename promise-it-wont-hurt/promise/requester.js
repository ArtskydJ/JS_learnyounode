var Promise = require('promise')
var request = require('request')

module.exports = function requester(url) {
	return new Promise(function (fulfill, reject) {
		request(url, function (err, res, body) {
			err ?
				reject(err) :
				fulfill(body)
		})
	})
}

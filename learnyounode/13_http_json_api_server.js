var http = require('http')
var url = require('url')

function parsetime(date) {
	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	}
}

function unixtime(date) {
	return {
		unixtime: date.getTime()
	}
}

var timeParsers = {
	'/api/parsetime': parsetime,
	'/api/unixtime': unixtime
}

var server = http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true)
	function fail() {
		res.writeHead(404)
		res.end()
		return null
	}

	if (req.method === 'GET') {
		res.writeHead(200, {'Content-Type': 'application/json'})
		var date = new Date(parsedUrl.query.iso)
		var timeParser = timeParsers[parsedUrl.pathname]
		if (timeParser) {
			var parsedTime = timeParser(date)
			var stringified = JSON.stringify(parsedTime)
			res.write(stringified)
			res.end()
		} else {
			fail()
		}
	} else {
		fail()
	}
})
server.listen(8000)

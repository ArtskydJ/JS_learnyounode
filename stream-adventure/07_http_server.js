var upper = require('./helpers/upper.js')
var http = require('http')

var server = http.createServer(function (req, res) {
	if (req.method === 'POST') {
		req.pipe(upper()).pipe(res)
	}
})
server.listen(process.argv[2])

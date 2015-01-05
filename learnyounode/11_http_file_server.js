var http = require('http')
var fs = require ('fs')

var instance = http.createServer(function(request, response)
	{
	fs.createReadStream(process.argv[2]).pipe(response)
	})
instance.listen(8000)

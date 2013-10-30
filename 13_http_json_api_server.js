var http = require('http')
var thruMap = require('through2-map')

var inst = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'application/json'})
	if (request.method === 'POST')
		{
		request.pipe(thruMap(function(chunk)
			{
			return chunk.toString().toUpperCase()
			})).pipe(response)
		}
	else
		{
		response.end()
		}
})
inst.listen(8000)

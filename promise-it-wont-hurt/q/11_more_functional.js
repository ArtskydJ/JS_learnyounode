var q = require('q')
var qHttp = require('q-io/http')

qHttp.read('http://localhost:7000')
	.then(''.concat.bind('http://localhost:7001/'))
	.then(qHttp.read)
	.then(JSON.parse)
	.then(console.log)
	.done()

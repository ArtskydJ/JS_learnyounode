var q = require('q')
var qHttp = require('q-io/http')

qHttp.read('http://localhost:1337')
	.then(JSON.parse)
	.then(console.log)

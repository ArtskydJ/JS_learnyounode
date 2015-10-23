var trumpet = require('trumpet')
var upper = require('./helpers/upper.js')
var tr = trumpet()

var stream = tr.select('.loud').createStream()
stream.pipe(upper()).pipe(stream)
process.stdin.pipe(tr).pipe(process.stdout)

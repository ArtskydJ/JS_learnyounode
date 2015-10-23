var split = require('split')
var through = require('through2-map')

var caseToggler = through(function (line, index) {
	var l = line.toString()
	return (index % 2 ? l.toUpperCase() : l.toLowerCase()) + '\n'
})

process.stdin
	.pipe(split())
	.pipe(caseToggler)
	.pipe(process.stdout)

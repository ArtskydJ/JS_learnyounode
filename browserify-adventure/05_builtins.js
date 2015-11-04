var url = require('url')

var addr = prompt()
var parsedUrl = url.parse(addr, true)
var resolvedFile = url.resolve(addr, parsedUrl.query.file)

console.log(resolvedFile)

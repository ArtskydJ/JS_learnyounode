var q = require('q')
var defer = q.defer()
defer.fulfill('SECOND')
defer.promise.then(console.log)
console.log('FIRST')

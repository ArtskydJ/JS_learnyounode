var up = require('./upper.js')
process.stdin.pipe(up()).pipe(process.stdout)

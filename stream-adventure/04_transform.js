var up = require('./helpers/upper.js')
process.stdin.pipe(up()).pipe(process.stdout)

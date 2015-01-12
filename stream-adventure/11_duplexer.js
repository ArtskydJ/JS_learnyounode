var cp = require('child_process')
var duplexer = require('duplexer')

module.exports = function d(cmd, args) {
	var p = cp.spawn(cmd, args)
	return duplexer(p.stdin, p.stdout)
}

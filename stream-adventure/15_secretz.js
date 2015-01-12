var crypto = require('crypto')
var tar = require('tar')
var zlib = require('zlib')
var through = require('through')

var parser = tar.Parse()
process.stdin
	.pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
	.pipe(zlib.createGunzip())
	.pipe(parser)

parser.on('entry', function (archive) {
	if (archive.type === 'File') {
		archive
			.pipe(crypto.createHash('md5', {encoding: 'hex'}))
			.pipe(through(function (md5) {
				this.queue( md5 + ' ' + archive.path + '\n' )
			}))
			.pipe(process.stdout)
	}
})

var net = require('net')
var multilevel = require('multilevel')

var db = multilevel.client()
var rpc = db.createRpcStream()
var conn = net.connect(4545)
conn.pipe(rpc).pipe(conn)

db.get('multilevelmeup', function (err, val) {
	if (err) throw err
	console.log(val)
	conn.end()
	db.close()
	//times out for some reason...
})

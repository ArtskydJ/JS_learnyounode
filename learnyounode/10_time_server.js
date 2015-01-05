var net = require('net')
var instance = net.createServer(function(socket)
	{
	var currentDate = new Date()
	socket.write(
			(currentDate.getFullYear())	.toString() + "-"+
			(currentDate.getMonth()+1)	.toString() + "-"+
			(currentDate.getDate())		.toString() + " "+
			(currentDate.getHours())	.toString() + ":"+
			(currentDate.getMinutes())	.toString() + "\n"
		)
	socket.end()
	})
instance.listen(8000)
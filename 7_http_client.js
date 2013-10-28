var http = require('http');
http.get(process.argv[2], function(stream) {
	stream.on("data", function (data) {
		console.log(data.toString());
	});
});
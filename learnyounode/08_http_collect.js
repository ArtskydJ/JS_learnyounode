var http = require('http');
http.get(process.argv[2], function(stream) {
	var string = "";
	stream.on("data", function (data) {
		string += data.toString();
	});
	stream.on("end", function(data) {
		console.log(string.length);
		console.log(string);
	});
});
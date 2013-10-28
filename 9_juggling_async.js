var http = require('http');
var arr = [];
var done = 0;

var testing = function(n) {
	var j=n;
	return function(data) {
		if (arr[j]==undefined)
			arr[j]="";
		arr[j] += data.toString();
		//console.log("j: "+j);
	}
};

var iterate = function() {
	arr.forEach(function(value){
		console.log(value);
	});
}

var urls = process.argv.slice(2);
urls.forEach(function (value, index) {
	var mycallback = testing(index);
	//console.log("call(i):"+index);
	http.get(value, function(stream) {
		stream.on("data", mycallback);
		stream.on("end", function(data) {
			//console.log("END");
			done++;
			if (done>=3) {iterate();}
		});
	});
});


/*
for (var i=0; i<3; i++) {
	arr[i]="";
	var mycallback = testing(i);
	console.log("call(i):"+i);
	http.get(process.argv[2+i], function(stream) {
		stream.on("data", mycallback);
		stream.on("end", function(data) {
			console.log("END");
			done++;
			if (done>=3) {
				console.log(arr);
			}
		});
	});
}
*/

/*
http.get(process.argv[2], function(stream) {
	var string = "";
	stream.on("data", function (data) {
		arr[0] += data.toString();
	});
	stream.on("end", callback());
});

http.get(process.argv[3], function(stream) {
	var string = "";
	stream.on("data", function (data) {
		arr[1] += data.toString();
	});
	stream.on("end", callback());
});


http.get(process.argv[4], function(stream) {
	var string = "";
	stream.on("data", function (data) {
		arr[2] += data.toString();
	});
	stream.on("end", callback());
	});

*/	
	
/*
while(true){
	if(done1 && done2 && done3){
		console.log(arr[0]);
		console.log(arr[1]);
		console.log(arr[2]);
		break;
	}
}*/


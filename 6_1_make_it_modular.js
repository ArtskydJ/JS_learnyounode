var module = require("./6_2_make_it_modular_include");

module(process.argv[2],process.argv[3], function(err,data){
	if (err) throw err;
	data.forEach(function (file) {
		console.log(file);
	});
})
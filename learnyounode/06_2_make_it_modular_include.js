module.exports = function(dir, ext, callback) {
	var fs = require('fs');
	fs.readdir(dir, function(err, list) {
		if (err) return callback(err);
		regex = new RegExp("\\."+ext+"$");
		list = list.filter(function(file){
			return regex.test(file);
		});
	callback(null,list);
	})
}
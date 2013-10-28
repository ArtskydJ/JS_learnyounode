var fs = require("fs");
var path = String(process.argv[2]);
var ext = "";
if (process.argv.length>3)
	{
	ext = String("\\."+String(process.argv[3])+"$"); //
	//console.log(ext);
	}

fs.readdir(path, function (err, list)
	{
	if (err) throw err;
	for (var i=0; i<list.length; i++)
		{
		var temp = list[i];
		if (ext==="" || temp.match(ext))
			console.log(temp);
		}
	});
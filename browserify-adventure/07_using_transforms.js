var fs = require('fs')

var contents = fs.readFileSync('C:\\Users\\Michael\\AppData\\Roaming\\nvm\\v4.2.1\\node_modules\\browserify-adventure\\problems\\using_transforms\\wake.txt', 'utf8')

contents.split('\n').forEach(function (line, number) {
	var numStr = (number % 5) ? '' : number.toString()
	var padding = [ '   ', '  ', ' ' ][numStr.length]
	console.log(padding + numStr + ' ' + line)
})

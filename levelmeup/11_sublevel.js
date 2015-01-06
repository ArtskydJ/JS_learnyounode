var Level = require('level')
var sublevel = require('level-sublevel')

var db = sublevel(Level(process.argv[2]))

db.sublevel('robots').put('slogan', 'beep boop')
db.sublevel('dinosoars').put('slogan', 'rawr')

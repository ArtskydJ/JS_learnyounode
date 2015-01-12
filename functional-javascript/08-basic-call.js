function isDuck(ele) {
	if (typeof ele === "object")
		return ele.Object.prototype.hasOwnProperty.call({},"quack") //).call({},
	else
		return 0
}

module.exports =
function duckCount() {
	var args = Array.prototype.slice.call(arguments);
	var good = args.filter(isDuck)
	return good.length
}

/*var notDuck = Object.create({quack: true})
var duck = {quack: true}
console.log(duckCount(duck, duck, notDuck, notDuck))*/
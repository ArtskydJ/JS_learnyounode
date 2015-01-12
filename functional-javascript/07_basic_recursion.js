module.exports = function reduce(arr, fn, initial) {
//var reduce = function(arr, fn, initial) {
	var memo = initial
	//console.log(arr)
	if (arr.length===0) {
		return memo
	} else {
		var temp = arr.shift() //left pop()
		return reduce(arr, fn, fn(memo, temp))
	}
}
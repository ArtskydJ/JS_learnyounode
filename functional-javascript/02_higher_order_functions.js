var repeat = function(func, n) {
	if (n>0) {
		func()
		return repeat(func,n-1)
	}
}

module.exports = repeat
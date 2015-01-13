var q = require('q')

function throwOhNoes() {
	throw new Error('OH NOES')
}

function iterate(n) {
	console.log(n)
	return n + 1
}

q.try(iterate, 1)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(throwOhNoes)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(null, console.log)

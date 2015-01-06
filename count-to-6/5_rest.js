module.exports = (...numbers) =>
	numbers.reduce((sum, n) => sum + n, 0) / (numbers.length || 1)

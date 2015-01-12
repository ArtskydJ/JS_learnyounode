module.exports = function countWords(inputWords) {
	return inputWords.reduce( function (memo, curr) { //put data into object
		memo[curr] = memo[curr]+1 || 1 //if current element is not in the object, create it
		return memo
	}, {})
}

//console.log(countWords(["lee","joe","lee","dyk","joe","lee","lee","lee","lee","joe","dyk"]))

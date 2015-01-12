module.exports = function checkUsersValid(officialUsers) {
//var checkUsersValid = function(officialUsers) {
	return function(usersToTest) {
		return usersToTest.every( function(INuserToTest) {
			//console.log("test id: "+INuserToTest.id)
			return officialUsers.some( function(INofficialUsers) {
				return (INuserToTest.id === INofficialUsers.id)
			})
		})
	}
}

/*
var officialArray = [{id:3}, {id:4}, {id:5}, {id:6}, {id:7}]

var testAllValid = checkUsersValid(officialArray)
console.log("pass: " + testAllValid([{id:3}, {id:5}])) //Should be true
console.log("pass: " + testAllValid([{id:2}, {id:5}])) //Should be false
console.log("pass: " + testAllValid([{id:3}, {id:7}])) //Should be true
//*/
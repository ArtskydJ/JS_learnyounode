module.exports =  function(INmessages) {
	return INmessages.map(function(INvals) {
		return INvals.message
	}).filter(function(INstr) {
		return (INstr.length < 50)
	})
}
module.exports = function Widget() {
	var div = document.createElement('div')
	div.innerHTML = 'Hello <span class="name"></span>!'

	return {
		setName: function setName(name) {
			div.querySelector('.name').textContent = name
		},
		appendTo: function appendTo(target) {
			target.appendChild(div)
		}
	}
}

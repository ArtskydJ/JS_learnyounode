console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`)

function html(arr, ...esc) {
	var string = '', i = 0
	for (; i < esc.length; i++) {
		string += arr[i] + htmlize(esc[i])
	}
	return string + arr[i]
}

function htmlize(str) {
	return str
		.replace(/&/g, '&amp;')
		.replace(/'/g, '&#39;')
		.replace(/"/g, '&quot;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
}

let string = 'Hello, world!'
let match = ''

function includes(text, matchStr, index = 0) {
	let result = ''
	let matchStartIndex = 0
	for (let i = index; i < text.length; i++) {
		if (text[i] == matchStr[matchStartIndex]) {
			result += text[i]
			matchStartIndex++
		}
		if (result == matchStr) return true
	}
	return false
}
console.log(`output->includes(string)`,includes(string, match))
console.log(`output->`,string.includes(match))
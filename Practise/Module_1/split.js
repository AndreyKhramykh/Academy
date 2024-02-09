let string = 'Hello, world!'

function split(text, separator) {
	let result = []
	let splitedFragment = ''
	let possibleFragment = ''
	let separatorStartIndex = 0
	for (let i = 0; i < text.length; i++) {
		if (separator === undefined) {
			result[result.length] = text
			break
		}
		if (separator == '') {
			result[result.length] = text[i]
			continue
		}

		if (text[i] == separator[separatorStartIndex]) {
			separatorStartIndex++
			possibleFragment += text[i]
		} else {
			if (separatorStartIndex == separator.length) {
				separatorStartIndex = 0
				result[result.length] = splitedFragment
				splitedFragment = text[i]
				possibleFragment = ''
			} else {
				splitedFragment += possibleFragment + text[i]
				possibleFragment = ''
			}
		}

		if (i + 1 == text.length) {
			result[result.length] = splitedFragment
			if (separatorStartIndex > 0) {
				result[result.length] = ''
			}
		}
	}
	return result
}
console.log('own func', split(string, '!'))
console.log('native', string.split('!'))
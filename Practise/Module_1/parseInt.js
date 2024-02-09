function parseInteger(str) {
	let result = 0
	let sign = str[0] == '-' ? -1 : 1
	let start = sign < 0 ? 1 : 0
	let hasNum = false
	for (let i = start; i < str.length; i++) {
		if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
			result = result * 10 + (str.charCodeAt(i) - 48)
			hasNum = true
		} else {
			break
		}
	}
	return result || hasNum ? sign * result : NaN
}
console.log(`output - parseInt`,parseInt(''))
console.log(`output - parseInteger`,parseInteger(''))
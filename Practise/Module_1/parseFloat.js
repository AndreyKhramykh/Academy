function parseFl(str) {
	let isIntegerPartActive = true
	let hasNum = false
	let integerPart = 0
	let fractionalPart = 0
	let result = 0
	let fractionalCoef = 10
	let sign = str[0] == '-' ? -1 : 1
	let start = sign < 0 ? 1 : 0
	for (let i = start; i < str.length; i++) {
		if (isIntegerPartActive) {
			if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
				integerPart = integerPart * 10 + (str.charCodeAt(i) - 48)
				hasNum = true
			} else if (str[i] == '.') {
				isIntegerPartActive = false
			} else {
				break
			}
		} else {
			if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
				fractionalPart =
					fractionalPart + (str.charCodeAt(i) - 48) / (1 * fractionalCoef)
				fractionalCoef *= 10
				hasNum = true
			} else {
				break
			}
		}
	}
	result = integerPart + fractionalPart
	return result || hasNum ? sign * result : NaN
}

console.log(`output - parseFloat`, parseFloat('0'))
console.log('output - parseFl', parseFl('0'))

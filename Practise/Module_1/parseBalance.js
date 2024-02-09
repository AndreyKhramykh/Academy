const text = 'My wallet balance is 14960 USDT'

function parseBalance(message) {
	let result = 0
	for (let i = 0; i < message.length; i++) {
		if (message.charCodeAt(i) >= 48 && message.charCodeAt(i) <= 57) {
			result = (result * 10) + (message.charCodeAt(i) - 48)
		}
	}
	return result
}

console.log(`output->`, parseBalance(text))
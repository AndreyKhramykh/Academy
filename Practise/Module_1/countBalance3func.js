const text =
	'Hello <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitriy /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT'

function countBalance(message) {
	let result = {}
	let name = ''
	let balance = 0
	let recordName = false
	let recordBalance = false
	for (let i = 0; i < message.length; i++) {
		// Проверка на начало записи имени
		if (message[i] == String.fromCharCode(60)) {
			recordName = true
			recordBalance = false
			if (name != '') {
				result[name] = balance
				name = ''
				balance = 0
			}
		}
		if (recordName) {
			if (message[i] == String.fromCharCode(62)) {
				recordName = false
				recordBalance = true
			}

			if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
				// Трансформируем большие буквы в маленькие
				name += String.fromCharCode(message.charCodeAt(i) + 32)
			} else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
				// Записываем маленькие буквы
				name += String.fromCharCode(message.charCodeAt(i))
			} else {
				continue
			}
		}
		if (recordBalance) {
			if (message.charCodeAt(i) >= 48 && message.charCodeAt(i) <= 57) {
				balance = (balance * 10) + (message.charCodeAt(i) - 48)
			}
		}
		// Проверка последнего значения
		if (i + 1 == message.length && name != '') {
			result[name] = balance
		}
	}
	return result
}

// result {
//  kate: 1000,
//  dmitrty: 350,
//  max: 600
//}

console.log(`output->`, countBalance(text))

const text1 =
	'My wallet balance is 14690 USDT. I paid 750 USDT for plane tickets and 921 USDT for a flat'

function countBalance1(str) {
	let result = 0
	let currentNum = 0
	let recordBalance = true
	let recordExpenses = false
	for (let i = 0; i < str.length; i++) {
		if (recordBalance) {
			if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
				currentNum = currentNum * 10 + (str.charCodeAt(i) - 48)
			} else if (currentNum > 0) {
				result = currentNum
				currentNum = 0
				recordBalance = false
				recordExpenses = true
			}
		}
		if (recordExpenses) {
			if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
				currentNum = currentNum * 10 + (str.charCodeAt(i) - 48)
			} else if (currentNum > 0) {
				result -= currentNum
				currentNum = 0
			}
		}
	}
	return result
}
console.log(`output->`, countBalance1(text1))
13019

const text2 =
	'I paid 750 USDT for plane tickets and 921 USDT for a flat. My wallet balance is 14690 USDT.'

function countBalance2(str) {
	let result = 0
	let currentNum = 0
	let recordBalance = true
	let recordExpenses = false
	let coef = 1
	for (let i = str.length - 1; i > -1; i--) {
		if (recordBalance) {
			if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
				currentNum = currentNum + ((str.charCodeAt(i) - 48) * coef)
				coef *= 10
			}
			if ( currentNum > 0  && str[i] == ' ') {
				result = currentNum
				currentNum = 0
				coef = 1
				recordBalance = false
				recordExpenses = true
			}
		}
		if (recordExpenses) {
			if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
				currentNum = currentNum + ((str.charCodeAt(i) - 48) * coef)
				coef *= 10
			} else if (currentNum > 0 && str[i] == ' ') {
				result -= currentNum
				currentNum = 0
				coef = 1
			}
		}
	}
	return result
}
console.log(`output->`,countBalance2(text2))
// 13019

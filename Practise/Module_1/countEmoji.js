const text = '<@Kate />:apple: <@Max/><@alisa /> :like: received:apple::apple:'

const text2 =
	'<@Kate />:apple: <@Max/>:apple: :APPLE: :AppLe:<@alisa /> :like: received:apple::apple:'

const text3 =
	'<@Kate />:apple: <@Max/>:apple APPLE: AppLe:<@alisa /> :like: received:apple::apple:'

const text4 =
	'<@Kate />:apple: <@Max/>:like:<@alisa /> :like: received:apple::apple: <@kate / > alsdaksdjhsa <@KATE / > :apple: :apple:'
const text5 =
	'<@Kate />:apple: <@Max/><@olia/><@misha/><@dasha/><@alisa /> :like: received:apple::apple:  <@dima/><@vasia/><@gena/><@ihor/><@tolik />'
const text6 =
	':apple: :apple: <@Kate />:apple: <@Max/><@alisa /> :like: received:apple::apple: '

function countEmoji(message, emoji) {
	let result = {}
	let isEmojiCheckerActive = false
	let isUserRecordActive = false
	let previousCounter = 0
	let counter = 0
	let currentEmoji = ''
	let currentUser = ''

	for (let i = message.length - 1; i > -1; i--) {
		// Проверка эмоджи :
		if (message[i] == String.fromCharCode(58)) {
			if (currentEmoji == emoji) {
				counter++
			}
			isEmojiCheckerActive = !isEmojiCheckerActive
			currentEmoji = ''
		}
		// Запись эмоджи в переменную
		if (isEmojiCheckerActive) {
			if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
				// Трансформируем большие буквы в маленькие
				currentEmoji =
					String.fromCharCode(message.charCodeAt(i) + 32) + currentEmoji
			} else if (message[i] != ':') {
				// Записываем маленькие буквы и другие символы кроме :
				currentEmoji = String.fromCharCode(message.charCodeAt(i)) + currentEmoji
			}
		}
		// Проверка имени юзера >
		if (message[i] == String.fromCharCode(62)) {
			isUserRecordActive = true
			isEmojiCheckerActive = false
			// Если счетчик пуст - то юзер наследует значения счетчика по цепочке
			if (!counter) {
				counter = previousCounter
			}
		}
		// Проверяем имя юзера, записываем счет эмоджи в результат <
		if (message[i] == String.fromCharCode(60)) {
			// Проверка, если имя повторялось
			if (result[currentUser]) {
				result[currentUser] = result[currentUser] + counter
			} else if (!counter) {
			} else {
				result[currentUser] = counter
			}
			isUserRecordActive = false
			currentUser = ''
			previousCounter = counter
			counter = 0
		}
		// Запись имени юзера
		if (isUserRecordActive) {
			if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
				// Трансформируем большие буквы в маленькие
				currentUser =
					String.fromCharCode(message.charCodeAt(i) + 32) + currentUser
			} else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
				// Записываем маленькие буквы
				currentUser = String.fromCharCode(message.charCodeAt(i)) + currentUser
			} else {
				continue
			}
		}
	}
	return result
}

console.log(`output->`, countEmoji(text, 'apple'))
console.log(`output->`, countEmoji(text2, 'apple'))
console.log(`output->`, countEmoji(text3, 'apple'))
console.log(`output->`, countEmoji(text4, 'apple'))
console.log(`output->`, countEmoji(text5, 'apple'))
console.log(`output->`, countEmoji(text6, 'apple'))

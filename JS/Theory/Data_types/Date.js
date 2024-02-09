// Встроенный объект, вызывается с помощью new Date
let date = new Date;
console.log(date.getTime())

// new Date(milliseconds)
// Аргументом new Date является число в миллисекундах, прошедшее с 1 января 1970 года

let date1 = new Date(24 * 3600 * 1000)
// console.log(`output->date1`,date1)

// new Date(string)

let date3 = new Date("12.31.1997");
// console.log(`output->date3`,date3)

// new Date(year, month, date, hours, minutes, seconds, ms)
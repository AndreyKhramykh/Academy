class MyClass {
	constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const customClass = new MyClass('Andrey', 26)
function myFunc() {
	return
}

let array = [new Date, () => {}, null, undefined, 66, 'string', [1,2,3], new Object, customClass, new Map, new Set, myFunc, {name: 'Andrey'}, {}]


//Написать функцию, которая возвращает true если data объект

function isObject(data) {
	return data?.constructor === Object
}

// Проверка возможных значений
array.forEach((item, index)  => console.log(`output->`,isObject(array[index])))
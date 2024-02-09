// Существует Number и BigInt

// Существуют записи:

let num = 1e9 // 1000000000, число после е - количество нулей
let num1 = 1e-6 // 0.000001, на сколько сдвинуть кому влево
let num2 = 1_000_000 // 1000000
let sixteen = 0xff // 255, число записано в шестнадцатеричной системе
let binary = 0b01 // 1, бинарная система
let eight = 0o377 // 255, восьмеричная система

// Методы:
// isFinite - проверка на число, которое не бесконечное и не NaN
// isInteger - проверяет, является ли целым числом
// isNaN - проверяет, является ли число NaN
// isSafeInteger - проверяет, является ли число безопасным целым числом, без потери точности.
// Number(str) - преобразование в число. Проверяет может ли аргумент быть преобразован. Если нет - NaN
// parseFloat(str) - преобразование строки в число с плавающей точкой, в десятичной системе
// parseInt(str, radix) - используется для преобразования строки в целое число (система счисления по умолчанию - десятичная). radix - определяет систему исчисления.
// Number.prototype.toExponential(fractionDigits) - преобразования числа в его строковое представление в экспоненциальной форме. Экспоненциальная форма представляет число в виде мантиссы и порядка
// toFixed(digits) - возвращает строку с количеством digits знаков после запятой. Может округлить до ближайшего целого, если аргумент не передан
// toPrecision(precision) - возвращает строковое представление числа, включающее указанное количество значащих цифр, включая целую часть и десятичную точку

// toString(radix) - преобразует в строку, radix - указывает на систему исчисления, по умолчанию 10

// valueOf - возвращает примитивное значение объекта (Number)
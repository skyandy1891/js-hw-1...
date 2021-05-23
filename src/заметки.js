2.6. Оператор typeof
Для получения типа значения переменной, используется оператор typeof, который возвращает на место своего вызова тип значения переменной указанного после него. Возвращаемое значение это просто строка в которой указан тип.

// undefined
let a;
console.log(typeof a); // "undefined"

// null
const b = null;
console.log(typeof null); // "object"

// Number
const c = 5;
console.log(typeof c); // "number"

// String
const d = 'JavaScript is awesome!';
console.log(typeof d); // "string"

// Boolean
const e = false;
console.log(typeof e); // "boolean"
// =================================================================================================================
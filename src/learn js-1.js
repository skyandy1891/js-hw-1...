// ==================PROMPT/CONFIRM==================

const shouldRenew = confirm('хочешь открыть эту страницу ?');
console.log(shouldRenew);

// const shouldNew = confirm('точно???');
// console.log(shouldRenew);

// let quantity = prompt('Тогда скинь немного деньжат ))');
// quantity = Number(quantity);
// console.log(quantity);
// // console.log(typeof quantity);

// const renew = confirm('Отлично! Теперь ты можешь прочитать текст заявления!');
// console.log(shouldRenew);

// let congrats = prompt('Как тебе мои первые "шаги?"');
// console.log(congrats);

// ==================parseInt/parseFloat==================

//  (parseInt выводит в консоль только целые числа. упирается в первый символ "не число" и останавливает операцию)
// let elementWidth = '50.876px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth', elementWidth);

//  (parseFloat выводит в консоль  числа с плавающей точкой.  запятые не читает!!!!!)
// let elementHeight = '200.65415';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight', elementHeight);

// ==================toFixed==================
// (отсекает лишние значения после разделителя. количество отсекаемых значений выбираем сами. например (2))
// let salary = 15.45678;
// salary = salary.toFixed(2);
// salary = Number(salary);
// console.log(salary);
// более кроткая запись
// let salary = 15.45678;
// salary = Number(salary.toFixed(2));
// console.log(salary);

// ==================приведение к числу==================
// let quantity = '30';
// quantity = Number(quantity);

// console.log(quantity);
// console.log(typeof quantity);

// let value = 'эту строку невозможно привести к числу';

// console.log(Number(value));
// ==================object Math==================
// const base = 2;
// const power = 5;
// // возводим в степень!
// const result = Math.pow(base, power);
// // ** тоже самое что и Math.pow
// // console.log(2 ** 3); результат 8

// console.log(base ** power);

// =============генератор псевдослучайных чисел
// const max = 10;
// const min = 3;

// // ============= это формула определения интервала max - min
// // // Math.random() * (max - min) + min

// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// меняем рандомный цвет фона страницы
const colors = ['tomato', 'mango', 'green', 'yellow', 'blue', 'teal'];
const max = colors.length - 1;
const min = 0;
const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];
console.log(color);
document.body.style.background = color;

// напиши скрипт выбора опции доставки товара.
// опция хранится в переменной option.
// 1 - самовывоз, 2 - курьер, 3 - почта.
//  - 'вы можете забрать товар завтра с 12:00 в нашем офисе'
//  - 'курьер доставит заказ завтра с 9:00 до 18:00'
//  - 'посылка будет отправлена сегодня'
//  - 'вам перезвонит менеджер'

//  1. сделать переменные
// const option = 2;
// let message;

// 2. сделать switch 1 2 3

// switch (option) {
//     // в каждом кейсе записать в message строку

//     case 1:
//         message = 'вы можете забрать товар завтра с 12:00 в нашем офисе';
//         break;
//     case 2:
//         message = 'курьер доставит заказ завтра с 9:00 до 18:00';
//         break;
//     case 3:
//         message = 'посылка будет отправлена сегодня';
//         break;
//     default:
//         message = 'вам перезвонит менеджер';
// }
// console.log(message);

//  =============== for ==============

// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);
// }

// (i += 1 это тоже самое что i = i + 1)

// здесь счётчик работает от 0 до 5.
//    если i = 2, то будет считать от 2 и т.д.

// const say = 'hello';
// console.log(say);

// ====== pre-increment/post-increment=====

// i++ это олдскульный код!!!!!

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// ==========================Задача 1======================

// напиши скрипт который посчитывает общую сумму зарплат работников.
// кол-во работников хранится в переменной employees.
// ЗП каждого работника это число от 500 до 5000.
// записать сумму в переменную totalSalary и вывести в консоль.

// сделать переменные (сокращённо вары).
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;

// // перебрать работников в цикле.

// for (let i = 1; i <= employees; i += 1) {
//     // сгенерить случайную ЗП.

//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary,
//     );
//     console.log(`ЗП работника номер ${i} - ${salary}`);

//     // прибавить к тоталу.

//     totalSalary += salary;

//     console.log('totalSalary - ', totalSalary);
// }
// // лог.

// ==========================Задача 2==========================

//  1 напиши скрипт который подсчитывает сумму всех чётных чисел,
//  которые входят в диапазон чисел от min до max.
//  Например если min = 0  а max = 5, то диапазон 0-5,
//  и в нём два чётных числа - 2 и 4, их сумма = 6.

//  обьявить вары
// const min = 0;
// const max = 5;
// let total = 0;

// // фор от мин до макс с шагом 1

// for (let i = min; i <= max; i += 1) {
//     console.log(i);

//     // проверяем остаток от деления с помощью % (10 % 2)

//     if (i % 2 !== 0) {
//         // логика от обратного: если число не чётное, то пропускай!
//         console.log('Не чётное', i);
//         continue;
//     }
//     console.log('чётное', i);

//     // пишем в сумму.
//     total += i;
// }
// console.log('total', total);

// ========================Задача 3=========================
// Напиши скрипт обработки покупки в магазине.
// баланс аользователя хранится в переменной balance.
// Сумма покупок хранится в переменной payment.
//  Перед проверкой вывести сообщение "Общая стоимость заказа [число] кредитов. Проверим кол-во доступных средств на счёту"
// Если сумма покупки не превышает баланс:
// вычесть сумму покупки из баланса.
// Вывести сообщение "На счету осталось[число] кредитов".
// Если сумма покупки превышает баланс:
// вывести сообщение "На счету недостаточно средств для продажи товара".
// В конце вывести сообщение "Операция завершена"
let balance = 10000;
const payment = 2000;

console.log(
    `Общая стоимость заказа ${payment} кредитов. Проверим кол-во доступных средств на счёту`,
);

if (payment <= balance) {
    console.log('Всё хорошо, снимаем деньги... Спасибо за покупку !!!');

    balance -= payment;

    console.log(`На счету осталось ${balance} кредитов!!`);
} else {
    console.log('На счету недостаточно средств для проведения операции!!!');
}
console.log('Операция завершена!');

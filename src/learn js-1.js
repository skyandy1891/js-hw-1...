// ==================PROMPT/CONFIRM==================

const shouldRenew = confirm('хочешь открыть эту страницу ?');
console.log(shouldRenew);

const shouldNew = confirm('точно???');
console.log(shouldRenew);

let quantity = prompt('Тогда скинь немного деньжат ))');
quantity = Number(quantity);
console.log(quantity);
// console.log(typeof quantity);

const renew = confirm('Отлично! Теперь ты можешь прочитать текст заявления!');
console.log(shouldRenew);

let congrats = prompt('Как тебе мои первые "шаги?"');
console.log(congrats);

// ==================parseInt/parseFloat==================

let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth', elementWidth);
//  (parseInt выводит в консоль только целые чила. упирается в первый символ "не число" и останавливает операцию)

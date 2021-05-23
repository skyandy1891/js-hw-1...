// ========== 1 ==========

function checkAge(age) {
  if (age >= 18) {
    return 'You are an adult';
  }

  return 'You are a minor';
}
// ========== 2 ==========

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';

  if (password === ADMIN_PASSWORD) {
    return 'Welcome!';
  }
  return 'Access denied, wrong password!';
}

// ========== 3 ==========

function checkStorage(available, ordered) {
  if (ordered === 0) {
    return 'Your order is empty!';
  }
  if (ordered > available) {
    return 'Your order is too large, not enough goods in stock!';
  }
  return 'The order is accepted, our manager will contact you';
}

// ========== 4 ==========

// Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".
const fruits = ['apple', 'plum', 'pear', 'orange'];

// ========== 5 ==========

const fruits = ['apple', 'plum', 'pear', 'orange'];
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

// ========== 6 ==========

const fruits = ['apple', 'plum', 'pear', 'orange'];

fruits[1] = `peach`;
fruits[3] = `banana`;

// ========== 7 ==========
//  длина массива
const fruits = ['apple', 'peach', 'pear', 'banana'];
const fruitsArrayLength = fruits.length;

// ========== 8 ==========

const fruits = ['apple', 'peach', 'pear', 'banana'];
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

// ========== 9 ==========решение не моё,нужно разбираться

function getExtremeElements(array) {
  const firstElement = array[0];
  const lastElementIndex = array.length - 1;
  const lastElement = array[lastElementIndex];
  const newArray = [firstElement, lastElement];
  return newArray;
}

// ========== 10 ==========

function splitMessage(message, delimeter) {
  let words;

  words = message.split(delimeter);

  return words;
}
// ===========optimised task 10===========
function splitMessage(message, delimeter) {
  return message.split(delimeter);
}

// ========== 11 ==========

function calculateEngravingPrice(message, pricePerWord) {
  return message.split(' ').length * pricePerWord;
}

// ========== 12 ==========

function makeStringFromArray(array, delimeter) {
  return (string = array.join(delimeter));
}

// ========== 13 ==========
// ==========посмотреть пример в первом видео второго модуля!!!==========

function slugify(title) {
  const slug = title.toLowerCase().split(' ').join('-');
  return slug;
}
// ========== 14 ==========

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(-3);

// ========== 15 ==========

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];
const allClients = oldClients.concat(newClients);

// ========== 16 ==========

// НЕ ПОНЯЛ
function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  let arr = firstArray.concat(secondArray);
  if (arr.length > maxLength) {
    arr.length = maxLength;
    return arr;
  }
  return arr.slice(0);
}

// ========== 17 ==========

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
  console.log(i);
}

// ========== 18 ==========

function calculateTotal(number) {
  // Change code below this line
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }
  return sum;
}

// ========== 19 ==========!!!

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) {
  const fruit = fruits[i];
  console.log(fruit);
}

// ========== 20 ==========!!!

//Задача: подсчёт суммы покупки(функция , которая принимает массив чисел)
function calculateTotalPrice(order) {
  let total = 0;
  for (let value of order) {
    total += value;
  }
  return total;
}

// ========== 21 ==========
// НЕ ПОНЯЛ, РАЗОБРАТЬСЯ!!!!!
function findLongestWord(string) {
  const str = string.split(' ');
  let longest = 0;
  let word = null;
  for (let i = 0; i < str.length - 1; i++) {
    if (longest < str[i].length) {
      longest = str[i].length;
      word = str[i];
    }
  }
  return word;
}

// ========== 22 ==========!!!

function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  return numbers;
}

// ========== 23 ==========!!!!!

function filterArray(numbers, value) {
  const result = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      result.push(numbers[i]);
    }
  }
  return result;
}

// ========== 24 ==========!!!!!

function checkFruit(fruit) {
  const fruits = ['apple', 'plum', 'pear', 'orange'];

  return fruits.includes(fruit);
}

// ========== 25 ==========!!!

function getCommonElements(array1, array2) {
  const newArr = [];
  for (const element of array1) {
    if (array2.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr;
}

// ========== 26 ==========!!!

function calculateTotalPrice(order) {
  let total = 0;

  for (const item of order) {
    total += item;
  }
  return total;
}

// ========== 27 ==========!!!

function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
}

// ========== 28 ==========

const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;

// ========== 29 ==========!!!

function getEvenNumbers(start, end) {
  let evenNumbers = [];
  for (let i = start; i <= end; i += 1) {
    const number = [i];
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

// ========== 30 ==========

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

// ========== 31 ==========

function findNumber(start, end, divisor) {
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return i;
    }
  }
}

// ========== 32 ==========!!!!!!!!!!!!!!!

function includes(array, value) {
  for (const arr of array) {
    if (arr === value) {
      return true;
    }
  }
  return false;
}

// ===================================DONE===================================

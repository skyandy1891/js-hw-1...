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

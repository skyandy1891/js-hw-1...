// ================= 1 ================

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  for (let i = 0; i < orderedItems.length; i += 1) {
    totalPrice += orderedItems[i];
  }
  orderedItems.forEach(function (orderedItems) {});
  // Пиши код выше этой строки
  return totalPrice;
}
// или же второй вариант!!!
orderedItems.forEach(element => (totalPrice += element));

// ================= 2 ================!!!

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки
  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  // Пиши код выше этой строки
  return filteredNumbers;
}

// ================= 3 ================!!!

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки
  firstArray.forEach(elem =>
    secondArray.includes(elem) ? commonElements.push(elem) : elem,
  );
  return commonElements;
}

// ================= 4 ================

// Пиши код ниже этой строки

const calculateTotalPrice = (quantity, pricePerItem) => {
  // Пиши код выше этой строки

  return quantity * pricePerItem;
};

// ================= 5 ================ доделать!!!!!

// Пиши код ниже этой строки
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(item => {
    totalPrice += item;
  });

  return totalPrice;
}
// Пиши код выше этой строки

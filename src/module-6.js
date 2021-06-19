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

// ================= 5 ================

// Пиши код ниже этой строки
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// Пиши код выше этой строки

// ================= 6 ================

// Пиши код ниже этой строки
const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach(item => {
    totalPrice += item;
  });

  return totalPrice;
};

// ================= 7 ================

// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
  const filteredNumbers = [];
  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  // Пиши код выше этой строки
  return filteredNumbers;
};

// ================= 8 ================

// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Пиши код выше этой строки
  return commonElements;
};

// ================= 9 ================!!!!!!!
// function changeEven(numbers, value) {
//   numbers.forEach((number, i) => {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   });
//   return numbers;
// }
function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  const newArray = [];
  numbers.forEach(number => {
    if (number % 2 === 0) {
      number = number + value;
      newArray.push(number);
    } else if (number % 2 !== 0) {
      newArray.push(number);
    }
  });
  return newArray;
}

// ================= 10 ================!!!!!!!

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map(planet => planet.length);

// ================= 11 ================

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
];
// Пиши код ниже этой строки

const titles = books.map(book => book.title);

// ================= 12 ================

const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое'],
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика'],
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика'],
  },
];
// Пиши код ниже этой строки

const genres = books.flatMap(book => book.genres);

// ================= 13 ================

// Пиши код ниже этой строки
const getUserNames = users => {
  return users.map(user => user.name);
};
// console.log(getUserNames);добавить аргумент( не понял )
// Пиши код выше этой строки

// ================= 14 ================

// Пиши код ниже этой строки
const getUserEmails = users => {
  return users.map(user => user.email);
};

// ================= 15 ================

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => {
  return number % 2 === 0;
});
const oddNumbers = numbers.filter(number => {
  return number % 2 !== 0;
});

console.log(evenNumbers);
console.log(oddNumbers);

// ================= 16 ================ НЕ РЕШИЛ """""""""""""""""2"

const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое'],
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика', 'мистика'],
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика', 'приключения'],
  },
];
// Пиши код ниже этой строки
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter(genres => books.indexOf(genres));

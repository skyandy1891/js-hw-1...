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

// ================= 10 ================!!!!!!!MAP

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

// ================= 13 ================MAP

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

// ================= 15 ================FILTER

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

// ================= 16 ================

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
const uniqueGenres = allGenres.filter(
  (genre, index, array) => array.indexOf(genre) === index,
);
console.log(uniqueGenres);

// ================= 17 ================

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

// ================= 18 ================

// Пиши код ниже этой строки
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

// ================= 19 ================

// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => {
  return (users = users.filter(
    user => user.age >= minAge && user.age <= maxAge,
  ));
};

// ================= 20 ================

// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => {
  return (users = users.filter(user => user.friends.includes(friendName)));
};
// Пиши код выше этой строки

// ================= 21 ================

// Пиши код ниже этой строки
const getFriends = users => {
  const arrayFriends = users.flatMap(user => user.friends);
  return arrayFriends.filter(
    (friend, index, array) => array.indexOf(friend) === index,
  );
};

// ================= 22 ================

// Пиши код ниже этой строки
const getActiveUsers = users => {
  return users.filter(user => user.isActive === true);
};

// ================= 23 ================

// Пиши код ниже этой строки
const getInactiveUsers = users => {
  return (users = users.filter(user => user.isActive === false));
  // или return (users = users.filter(user => !user.isActive === true));
};

// ================= 24 ================FIND

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);

// ================= 25 ================

// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => {
  return (users = users.find(book => book.email === email));
};
// Пиши код выше этой строки

// ================= 26 ================EVERY

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);

// ================= 27 ================

// Пиши код ниже этой строки
const isEveryUserActive = users => {
  return users.every(user => user.isActive);
};
// Пиши код выше этой строки

// ================= 28 ================SOME (идентично 26 задаче)

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);

// ================= 29 ================

// Пиши код ниже этой строки
const isAnyUserActive = users => {
  return (users = users.some(user => user.isActive));
};

// ================= 30 ================REDUCE!!!!!!!!!!!!

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce(
  (totaltimes, player) => totaltimes + player,
  0,
);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;

// ================= 31 ================

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce((playtime, player) => {
  return playtime + player.playtime / player.gamesPlayed;
}, 0);

// ================= 32 ================!!!!!!!!!!!!!!

const calculateTotalBalance = users => {
  const totalSum = users.reduce((total, user) => {
    return total + user.balance;
  }, 0);
  return totalSum;
};

// ================= 33 ================

// Пиши код ниже этой строки
const getTotalFriendCount = users => {
  const allFriends = users.reduce((all, user) => {
    return all + user.friends.length;
  }, 0);
  return allFriends;
};

// ================= 34 ================SORT

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский',
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

// ================= 35 ================

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// ================= 36 ================

const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский',
  'Говард Лавкрафт',
];
// Пиши код ниже этой строки

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// ================= 37 ================

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
  firstBook.author.localeCompare(secondBook.author),
);

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
  secondBook.author.localeCompare(firstBook.author),
);

const sortedByAscendingRating = [...books].sort(
  (firstBook, secondBook) => firstBook.rating - secondBook.rating,
);

const sortedByDescentingRating = [...books].sort(
  (firstBook, secondBook) => secondBook.rating - firstBook.rating,
);

// ================= 38 ================

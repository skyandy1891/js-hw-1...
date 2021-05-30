// =============== 1 ===============

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// =============== 2 ===============

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// =============== 3 ===============

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;

// =============== 4 ===============

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[numberOfTags - 1];

// =============== 5 ===============

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};
const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];

// =============== 6 ===============

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Henry Sibola';
apartment.tags.push('trusted');

// =============== 7 ===============

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: 'Jamaica',
  city: 'Kingston',
};

// =============== 8 ===============

const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  name,
  price,
  image,
  tags,
};

// =============== 9 ===============

const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam',
};

// =============== 10 ===============

const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
for (key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}

// =============== 11 ===============!!!!!

const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Spacious apartment in the city center';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  if (apartment.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment[key]);
  }
}

// =============== 12 ===============!!!!!

function countProps(object) {
  let propCount = 0;
  for (const obj in object) {
    if (object.hasOwnProperty(obj)) {
      propCount += 1;
    }
  }
  return propCount;
}

// =============== 13 ===============!!!!!

const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);
for (const key of keys) {
  values.push(apartment[key]);
}

// =============== 14 ===============!!!!!

function countProps(object) {
  let propCount = 0;

  const keys = Object.keys(object);

  for (const key of keys) {
    propCount += 1;
  }
  return propCount;
}

// =============== 15 ===============!!!!!

const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys = Object.keys(apartment);

const values = Object.values(apartment);

// =============== 16 ===============!!!!!

function countTotalSalary(salaries) {
  let totalSalary = 0;

  const values = Object.values(salaries);

  for (const value of values) {
    totalSalary += value;
  }
  return totalSalary;
}

// =============== 17 ===============!!!!!

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

// =============== 18 ===============!!!!!

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const product of products) {
    let name = product.name;
    if (name === productName) {
      return product.price;
    }
  }
  return null;
}

// =============== 19 ===============!!!!!

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const array = [];
  for (const product of products) {
    if (product[propName]) {
      array.push(product[propName]);
    }
  }
  return array;
}

// =============== 20 ===============!!!!!

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];
function calculateTotalPrice(productName) {
  let total = 0;
  for (const prop of products) {
    let name = prop.name;
    if (productName === name) {
      total = prop.price * prop.quantity;
    }
  }
  return total;
}

// =============== 21 ===============

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const { yesterday, today, tomorrow } = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;

// =============== 22 ===============

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {
  yesterday,
  today,
  tomorrow,
  icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;

// =============== 23 ===============

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// =============== 24 =============== (!)

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

// =============== 25 ===============

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const {
  today: {
    high: highToday,
    low: lowToday,
    icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
  tomorrow: {
    high: highTomorrow,
    low: lowTomorrow,
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
} = forecast;

// =============== 26 ===============

function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

// =============== 27 ===============

const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

// =============== 28 ===============

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// =============== 29 ===============

const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = { ...defaultSettings, ...overrideSettings };

// =============== 30 ===============!!!

function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  // Change code below this line
  const newData = { completed, category, priority, ...data };
  // Change code above this line
  return newData;
}

// =============== 31 ===============!!!

function add(...args) {
  let value = 0;
  for (arg of args) {
    value += arg;
  }
  return value;
}

// =============== 32 ===============!!!

function addOverNum(values, ...args) {
  let total = 0;
  for (const arg of args) {
    if (arg > values) {
      total += arg;
    }
  }
  return total;
}

// =============== 33 ===============!!!

function findMatches(...args) {
  const matches = []; // Don't change this line
  for (let i = 1; i < args.length; i += 1) {
    if (args[0].includes(args[i])) matches.push(args[i]);
  }
  return matches;
}

// =============== 34 ===============!!!

const bookShelf = {
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
};

// =============== 35 ===============!!!

const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line

    const index = this.books.indexOf(oldName);
    this.books.splice(index, 1, newName);

    // Change code above this line
  },
};

// =============== 36 ===============

const atTheOldToad = {
  potions: [],
};

// =============== 37 ===============

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  getPotions() {
    return this.potions;
  },
};

// =============== 38 ===============!!!

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    // Change code below this line
    this.potions.push(potionName);
    return this.potions;
  },
};

// =============== 39 ===============!!!

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  removePotion(potionName) {
    // Change code below this line
    this.potions.splice(this.potions.indexOf(potionName), 1);
    // Change code above this line
  },
};

// =============== 40 ===============!!!

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line

    const index = this.potions.indexOf(oldName);
    this.potions.splice(index, 1, newName);

    // Change code above this line
  },
};

// =============== 41 ===============!!!

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    const { potions } = this;
    const { name } = potionName;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === name) {
        return `Potion ${name} is already equipped!`;
      }
      potions.push(potionName);
    }
  },
  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === potionName) {
        potions.splice(i, 1);
        return potions;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === oldName) {
        potions[i].name = newName;
        return potions;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

// ==================================== DONE !!! ====================================

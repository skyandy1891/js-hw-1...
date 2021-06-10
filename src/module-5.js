// ==================== 1 ====================
const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};
// Пиши код ниже этой строки

const child = Object.create(parent);

// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;

// ==================== 2 ====================

const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish',
};
// Пиши код ниже этой строки

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;
// Пиши код выше этой строки

// ==================== 3 ====================

function Car(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

// ==================== 4 ====================

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

// ==================== 5 ====================

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}
Car.prototype.getPrice = function () {
  return this.price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

// ==================== 6 ====================!!!!!!!

function Storage(items) {
  this.items = items;
}
Storage.prototype.getItems = function () {
  return this.items;
};
Storage.prototype.addItem = function (newItem) {
  return this.items.push(newItem);
};
Storage.prototype.removeItem = function (item) {
  return this.items.splice(this.items.indexOf(item), 1);
};

// ==================== 7 ====================!!!!!!!

function StringBuilder(baseValue) {
  this.value = baseValue;
}
StringBuilder.prototype.getValue = function () {
  return this.value;
};
StringBuilder.prototype.padEnd = function (str) {
  this.value += str;
};

StringBuilder.prototype.padStart = function (str) {
  this.value = str + this.value;
};

StringBuilder.prototype.padBoth = function (str) {
  this.value = str + this.value + str;
};
// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

// ==================== 8 ====================

class Car {}

// ==================== 9 ====================

class Car {
  brand;
  model;
  price;

  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

// ==================== 10 ====================

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}

// ==================== 11 ====================

class Car {
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}

// ==================== 12 ====================!!!!!

class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(item) {
    const itemIndex = this.#items.indexOf(item);
    this.#items.splice(itemIndex, 1);
  }
}

// ==================== 13 ====================!!!!!

class StringBuilder {
  #value;
  constructor(baseValue) {
    this.#value = baseValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += str;
  }
  padStart(str) {
    this.#value = str + this.#value;
  }
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// ==================== 14 ====================

class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}

// ==================== 15 ====================!&!&!

class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.MAX_PRICE) {
      this.#price = newPrice;
    }
    return this.#price;
  }
  // Пиши код выше этой строки
}

// ==================== 16 ====================более-менее понятно

class Car {
  static #MAX_PRICE = 50000;
  // Пиши код ниже этой строки

  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return 'Внимание! Цена превышает допустимую.';
    }
    return 'Всё хорошо, цена в порядке.';
  }

  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}

// ==================== 17 ====================

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Пиши код ниже этой строки
class Admin extends User {
  static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
}

// ==================== 18 ====================!&!&!

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки
  accessLevel;
  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  // Пиши код выше этой строки
}

// ==================== 19 ====================

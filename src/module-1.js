// ============ 16 ==========
function checkStorage(available, ordered) {
  let message;
  if (ordered >= available) {
    message = 'Not enough goods in stock!';
  } else {
    message = 'Order is processed, our manager will contact you.';
  }
  return message;
}
// ============ 17 ==========

let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += a = 2;
b -= b = 4;
c *= c = 3;
d /= d = 10;

// ============ 18 ==========

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;

  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = `Insufficient funds!`;
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${(customerCredits -=
      totalPrice)} credits left`;
  }
  return message;
}

// ============ 19 ==========

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    message = 'Canceled by user!';
  } else if (password === 'jqueryismyjam') {
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

// ============ 20 ==========

function checkStorage(available, ordered) {
  let message;

  if (ordered === 0) {
    message = `There are no products in the order!`;
  } else if (ordered > available) {
    message = `Your order is too large, there are not enough items in stock!`;
  } else {
    message = `The order is accepted, our manager will contact you`;
  }

  return message;
}

// ============ 21 ==========

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // Change this line

  return isInRange;
}

// ============ 22 ==========

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip';

  return canAccessContent;
}

// ============ 23 ==========

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange;

  return isNotInRange;
}

// ============ 24 ==========

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;

  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else {
    discount = BASE_DISCOUNT;
  }
  return discount;
}

// ============ 25 ==========

function checkStorage(available, ordered) {
  let message;
  message =
    ordered > available
      ? 'Not enough goods in stock!'
      : 'The order is accepted, our manager will contact you';
  return message;
}

// ============ 26 ==========

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  message =
    password === ADMIN_PASSWORD
      ? 'Access is allowed'
      : 'Access denied, wrong password!';
  return message;
}

// ============ 27 ==========

function getSubscriptionPrice(type) {
  let price;
  switch (type) {
    case 'starter':
      price = 0;
      break;
    case 'professional':
      price = 20;
      break;
    case 'organization':
      price = 50;
      break;
  }
  return price;
}

// ============ 28 ==========

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  switch (password) {
    case null:
      message = 'Canceled by user!';
      break;
    case ADMIN_PASSWORD:
      message = 'Welcome!';
      break;
    default:
      message = 'Access denied, wrong password!';
  }
  return message;
}

// ============ 29 ==========

function getShippingCost(country) {
  let message;
  switch (country) {
    case 'China':
      price = 100;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Chile':
      price = 250;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Australia':
      price = 170;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Jamaica':
      price = 120;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    default:
      message = 'Sorry, there is no delivery to your country';
  }
  return message;
}

// ============ 30 ==========

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`;

  return message;
}

// ============ 31 ==========

const courseTopic = 'JavaScript essentials';

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// ============ 32 ==========

function getSubstring(string, length) {
  const substring = string.slice(0, length);

  return substring;
}

// ============ 33 ==========

function formatMessage(message, maxLength) {
  let result;
  result =
    message.length > maxLength ? message.slice(0, maxLength) + '...' : message;
  return result;
}

// ============ 34 ==========

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase();

  return normalizedInput;
}

// ============ 35 ==========

function checkForName(fullName, name) {
  fullName.toLowerCase = name;
  const result = fullName.includes(name);

  return result;
}

// ============ 36 ==========

function checkForSpam(message) {
  message = message.toLowerCase();
  let result;
  result = message.includes('spam') || message.includes('sale');
  return result;
}
// ===============================DONE !!!===========================================

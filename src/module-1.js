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
  // Change code below this line
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
    // Change this line
    message = 'Canceled by user!';
  } else if (password === 'jqueryismyjam') {
    // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

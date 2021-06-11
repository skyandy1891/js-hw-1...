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

// ================= 2 ================

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
// ==================================================================
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Change code below this line
    const totalPrice = pricePerDroid * orderedQuantity;

    if (totalPrice > customerCredits) {
        message = `Isufficient funds!`;
    } else {
        message = `You ordered ${pricePerDroid} droids, you have ${(customerCredits -=
            totalPrice)} credits left`;

        // Change code above this line
        return message;
    }
}

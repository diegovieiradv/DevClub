const cart = [10, 244, 99, 2, 20, 33, 250];
let finalValue = 0;

cart.forEach((value) => {
  finalValue = finalValue + value;
});

function calculatedDiscount(price, discount) {
  const result = (price * discount) / 100;
  return result;
}

console.log(calculatedDiscount(250, 7));

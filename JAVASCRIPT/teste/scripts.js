const cart = [10, 244, 99, 2, 20, 33, 250];
let finalValueWithdDiscount = 0;

function calculatedDiscount(price, discount) {
  const result = (price * discount) / 100;
  return result;
}

cart.forEach((value) => {
  if (value > 30) {
    const discount = calculatedDiscount(value, 10);
    finalValueWithdDiscount = finalValueWithdDiscount + (value - discount);
  } else {
    finalValue = +value;
  }
});

console.log(
  `Valor total da compra foi de: R$ ${finalValue}), Porém você teve um desconto e irá pagar: ${finalValueWithdDiscount}`
);

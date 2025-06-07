const cart = [10, 244, 99, 2, 20, 33, 250];
let finalValue = 0;
let finalValueWithDiscount = 0;
let totalDiscount = 0;

function calculatedDiscount(price, discount) {
  return (price * discount) / 100;
}

cart.forEach((value) => {
  finalValue += value;

  if (value > 30) {
    const discount = calculatedDiscount(value, 10);
    finalValueWithDiscount += value - discount;
    totalDiscount += discount;
  } else {
    finalValueWithDiscount += value;
  }
});

console.log(
  `Valor total da compra foi de: R$ ${finalValue.toFixed(
    2
  )}. Porém você teve um desconto e irá pagar: R$ ${finalValueWithDiscount.toFixed(
    2
  )}. Você economizou: R$ ${totalDiscount.toFixed(2)}`
);

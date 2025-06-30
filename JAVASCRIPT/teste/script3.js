const students = [
    {name: 'diego', testGrade: 8},
    {name: 'ana', testGrade: 4},
    {name: 'carina', testGrade: 6},
    {name: 'carla', testGrade: 3}
]
const newStudents = students.map(student => {
return {
 name: student.name,
       studentStatus: student.testGrade >= 5 ? 'Aprovado' : 'Reprovado'}

 })

   console.log(newStudents);







   const cart =[
    {product: 'banana', price: 2.5, quantity: 3},
    {product: 'apple', price: 1.5, quantity: 5},
    {product: 'orange', price: 3, quantity: 2},
    {product: 'grape', price: 4, quantity: 1},
    {product: 'kiwi', price: 2, quantity: 4},   
]
const totalPrice = cart.reduce((acumulator, value) => {
  const result = acumulator + value.price * value.quantity;
  return acumulator + result;
},0)

   console.log(`O valor total da compra foi de: R$ ${totalPrice.toFixed(2)}`);

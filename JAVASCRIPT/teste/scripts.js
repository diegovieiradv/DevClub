const contacts = [
  { name: "Rodolfo", number: "(21) 9233232223" },
  { name: "Sara", number: "(22) 322233223" },
  { name: "Ana", number: "(11) 919992222" },
  { name: "Diego", number: "(21) 9941413926" },
];




contacts.forEach(function (item,index) {
    console.log(` ${index + 1}) Nome: ${item.name}, Contato: ${item.number}`)
});


const variavel = "Diego"
console.log(variavel)

function nomeNaTela(){
    console.log("Dev")
}
nomeNaTela()


function sayMyName(name){
console.log(`O nome é: ${name}`)
}
sayMyName("Aline")

function sum(value, value2){
    console.log(value + value2)
}
sum(20,40)

function sub(value, value2){
    console.log(value - value2)
}
sub(50, 33)

function div(value, value2){
    console.log(value / value2)
}
div(30,6)

function mul(value,value2){
    console.log(value * value2)
}
mul(3,5)



function sum(value, value2){
    const result = value + value2
    return result
}

const myResult = sum(20,10)
console.log("Resultado:" + myResult)


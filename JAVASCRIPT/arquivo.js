const rodolfo = {
    name: "rodolfo",
    age: 30,
    address: {
        street: "rua das laranjeiras",
        number: 0,
        city: "sp",
        state: "são paulo",
        country: "brazil"
    }
}
rodolfo.age = 35
rodolfo.name = "alvaro"
console.log(rodolfo)


const users = [{
    name: "rodolfo",
    age: 30,
    street: "rua das laranjeiras"
},

{
    name: "aline",
    age: 20,
    street: "rua da laje"
},]


users[0].name = "diego"

console.log(users)                
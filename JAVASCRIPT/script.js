const select = document.querySelector(".select")

function troqueiValor(abacate){
    console.log(abacate)
}
select.addEventListener("change", troqueiValor)


const students = [
    {name: 'diego', testGrade: 8},
    {name: 'ana', testGrade: 4},
    {name: 'carina', testGrade: 6},
    {name: 'carla', testGrade: 3}
]
const newStudents = students.map(user => {
    const newUser = {
        name: user.name,
        nota: user.testGrade ? 'Aprovado' : 'Reprovado',}
        return newUser
    })
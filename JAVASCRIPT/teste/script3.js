const students = [
  { name: "diego", testGrade: 8 },
  { name: "ana", testGrade: 4 },
  { name: "carina", testGrade: 6 },
  { name: "carla", testGrade: 3 },
];
const newStudents = students.map((student) => {
  return {
    name: student.name,
    studentStatus: student.testGrade >= 5 ? "Aprovado" : "Reprovado",
  };
});

console.log(newStudents);

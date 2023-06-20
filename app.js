const students = [
  {
    name: "João",
    firstNote: 8,
    secondNote: 6
  },
  {
    name: "Maria",
    firstNote: 7,
    secondNote: 9
  },
  {
    name: "Pedro",
    firstNote: 6,
    secondNote: 5
  },
  {
    name: "Ana",
    firstNote: 9,
    secondNote: 8
  },
  {
    name: "José",
    firstNote: 10,
    secondNote: 4
  },
  {
    name: "Jonas",
    firstNote: 3,
    secondNote: 7
  },
  {
    name: "Helena",
    firstNote: 10,
    secondNote: 10
  }
];

const calculateAverage = (firstNote, secondNote) => {
  return (firstNote + secondNote) / 2;
}

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const average = calculateAverage(student.firstNote, student.secondNote);

  if (average >= 7) {
    alert(`${student.name} sua média foi: ${average} Parabéns você foi aprovado(a) no concurso🎉!`);
  } else {
    alert(`${student.name} sua média foi: ${average} infelizmente você não foi aprovado(a).`);
  }
}

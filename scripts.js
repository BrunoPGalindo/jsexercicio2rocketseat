const students = [
  {
    name: "Bruno",
    firstTest: 7,
    secondTest: 4
  },
  {
    name: "Fabio H",
    firstTest: 6,
    secondTest: 10
  },
  {
    name: "Fabio G",
    firstTest: 7,
    secondTest: 5
  },
  {
    name: "Edjane",
    firstTest: 8,
    secondTest: 5
  },  
]

function average(firstTest, secondTest) {
  return ((firstTest + secondTest) / 2).toFixed(2)
}

function showAverageOfStudent(student) {
  let result = average(student.firstTest, student.secondTest)
  if(result >= 7) {
    alert(`Parabéns ${student.name}! Sua média foi de ${result}. Você está aprovado(a)`)
  } else if (result < 3) {
    alert(`${student.name} você foi reprovado. Sua média foi de ${result}`)
  } else {
    alert(`${student.name}, você ficou de recuperação. Sua média foi de ${(result)}`)
  }
}

function showResults() {
  for (var index in students) {
    showAverageOfStudent(students[index])
  }
}

showResults()

// Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();

let arrayAnswers = []
let correct = 0
let incorrect = 0

let firstQuestion = prompt("Es posible acceder a la variable global en todo el codigo? (si/no)")
arrayAnswers.push(firstQuestion)

let secondQuestion = prompt("Es posible acceder a la variable local en todo el codigo? (si/no)")
arrayAnswers.push(secondQuestion)

let thirdQuestion = prompt("Es posible acceder a la variable de bloque en todo el codigo? (si/no)")
arrayAnswers.push(thirdQuestion)

console.log(arrayAnswers)

if(firstQuestion === "si"){
  console.log("Su respuesta es correcta")
}else{
  console.log("Su respuesta es incorrecta")
}

if(secondQuestion === "si"){
  console.log("Su respuesta es incorrecta")
}else{
  console.log("Su respuesta es correcta")
}

if(thirdQuestion === "si"){
  console.log("Su respuesta es incorrecta")
}else{
  console.log("Su respuesta es correcta")
}


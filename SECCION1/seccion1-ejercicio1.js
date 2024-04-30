
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
  console.log("Su respuesta es incorrecta, porque si podemos llamar una variable global desde cualquier parte del codigo, ya que su nombre lo dice es global")
}

if(secondQuestion === "si"){
  console.log("Su respuesta es incorrecta, porque solo es posible llamar la funcion dentro del bloque en el que esta declarada")
}else{
  console.log("Su respuesta es correcta")
}

if(thirdQuestion === "si"){
  console.log("Su respuesta es incorrecta, porque solo se puede acceder a la variable en el bloque en el que se declara")
}else{
  console.log("Su respuesta es correcta")
}
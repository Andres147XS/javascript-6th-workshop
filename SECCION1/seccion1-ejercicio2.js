// // vars call
// console.log("Valor de a:", a);
// console.log("Valor de b:", b);
// console.log("Valor de c:", c);

// // functions call
// console.log("Resultado de funcionDeclarada:", funcionDeclarada());
// console.log("Resultado de funcionExpresada:", funcionExpresada());

// // vars declaration
// var a = 1;
// let b = 2;
// const c = 3;

// // functions declarations
// function funcionDeclarada() {
//   return "Función declarada ha sido llamada.";
// }

// const funcionExpresada = function () {
//   return "Función expresada ha sido llamada.";
// };

let firstQuestion = prompt(`¿Que cree usted que pasara con la variable "a"?\n
\ A) Se mostrará al llamarla\n
\ B) Arrojará un error en consola undefined`).toLowerCase()

let secondQuestion = prompt(`¿Que cree usted que pasara con la variable "b"?\n
\ A) Se mostrará al llamarla\n
\ B) Arrojará un error en consola can't access lexical declaration "b" before initialization`).toLowerCase()

let thirdQuestion = prompt(`¿Que cree usted que pasara con la variable "c"?\n
\ A) Se mostrará al llamarla\n
\ B) Arrojará un error en consola can't access lexical declaration "b" before initialization`).toLowerCase()

let fourthQuestion = prompt(`¿Que cree usted que pasara al llamar la funcion declarada?\n
\ A) Hará exitosa su funcion y no arrojará error\n
\ B) Arrojará error, porque no se puede llamar antes de crearla`).toLowerCase()

let fifthQuestion = prompt(`¿Que cree usted que pasara al llamar la funcion expresada?\n
\ A) Hará exitosa su funcion y no arrojará error\n
\ B) Arrojará error, porque no se puede llamar antes de crearla`).toLowerCase()

if(firstQuestion === "A"){
  console.log("Su respuesta es incorrecta porque no puedes llamar una variable antes de declararla")
}else{
  console.log("Su respuesta es correcta")
}

if(secondQuestion === "A"){
  console.log("Su respuesta es incorrecta porque no puedes llamar una variable antes de declararla")
}else{
  console.log("Su respuesta es correcta")
}

if(thirdQuestion === "A"){
  console.log("Su respuesta es incorrecta porque no puedes llamar una variable antes de declararla")
}else{
  console.log("Su respuesta es correcta")
}

if(fourthQuestion === "A"){
  console.log("Su respuesta es correcta")
}else{
  console.log("Su respuesta es incorrecta porque usted si puede llamar una funcion declarada antes de")
}

if(fifthQuestion === "A"){
  console.log("Su respuesta es incorrecta porque no puedes llamar una funcion expresada antes de crearla ya que esta se puede definir cono si fuera una variable")
}else{
  console.log("Su respuesta es correcta")
}
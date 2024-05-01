console.log(`
1) console.log("Inicio del script");

2) setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

3) setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

4) Promise.resolve("Promesa resuelta").then(console.log);

5) console.log("Fin del script");`)

let arrayQuestions = []
let orderCorrecto = [1,5,4,2,3]

let option = prompt(`Segun el codigo indique como se va a ejecutar paso a paso
 A) (5)(4)(2)(1)(3)
 B) (1)(5)(4)(2)(3)
 C) (2)(3)(4)(1)(5)
 D) (4)(2)(1)(3)(5)`).toLowerCase();

switch(option){
    case "a":
        console.log("SU RESPUESTA ES INCORRECTA")
        break;
    case "b":
        console.log("SU RESPUESTA ES CORRECTA !FELICITACIONES!")
        break;
    case "c":
        console.log("SU RESPUESTA ES INCORRECTA")
        break;
    case "d":
        console.log("SU RESPUESTA ES INCORRECTA")
        break;
}
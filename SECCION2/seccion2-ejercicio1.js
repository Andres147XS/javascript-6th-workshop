let sumarCinco = parseFloat(prompt("Ingrese un numero"))
let b = parseFloat(prompt("Ingrese otro numero"))

function crearSumador(a){
    function sumadorDos(b){
        return a+b
    }
    return sumadorDos(b)
}
console.log(sumarCinco)
console.log(crearSumador(sumarCinco))

//
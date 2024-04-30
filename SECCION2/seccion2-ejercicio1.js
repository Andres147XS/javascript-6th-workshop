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

/*¿Cómo mantienen las funciones su acceso a variables externas después de que la función externa ha terminado de ejecutarse?
Esto es gracias al closure, el cual hace un cierre en la funcion y mantiene almacenda la informacion de las variables externas*/

/*¿Cuáles son las implicaciones de memoria de mantener estos closures, especialmente si se crean muchas instancias de funciones con closures?
Esto puede ocupar mucho espacio de memoria y generar un desbordamiento
*/


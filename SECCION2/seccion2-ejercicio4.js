console.log("Mensaje 1: Inmediatamente")


setTimeout(function(){
    console.log("Mensaje 2: Con timeout de 0 segundos")
},0)

setTimeout(function(){
    console.log("Mensaje 3: Con timeout de 1 segundo")
},1000)

/*¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente
 después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos? */
/*Aparentemente el mensaje uno se muestra igual que el mensaje 2 pero no es así.
Ya que JavaScript le da prioridad a las micro tareas y las muestra primero, pero como
no habian microtareas toma las macrotareas y toma el
orden del tiempo en el que se debe ejecutar de menor a mayor*/

/*¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas
y la forma en que JavaScript maneja las operaciones asíncronas? */
/*Que el event loop, que es el que organiza la forma en la que se ejecuta el codigo,
este a su vez le da prioridad a las microtareas, y luego a las macrotareas las cuales
son el setTimeout*/
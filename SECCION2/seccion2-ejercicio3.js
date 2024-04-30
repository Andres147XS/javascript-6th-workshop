function manejarAsincronia(callback, promesa){

    promesa.then(()=>{
        callback();
    })
}

const miPromesa = new Promise((resolve) => {
    setTimeout(()=>{
        resolve()
    },2000)
})

manejarAsincronia(()=>{
    console.log("¡Promesa cumplida y callback ejecutado!");
},miPromesa)

/*¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo?
si se cambia el tiempo a 5 segundos se demora tardaría mas segundos en mostrar el mensaje que en el lugar de 1 segundo*/
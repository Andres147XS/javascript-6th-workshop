let answer = parseInt(prompt("Ingrese el tiempo que desea que tarde en mostrarse el mensaje: "))

let tousandSeconds = (answer * 1000)

function a(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            alert("Mensaje")
        },tousandSeconds)
    })
}
a();
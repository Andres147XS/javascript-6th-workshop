function count(a){
    let cont = 1
    function counter(){
    value = a + cont
    return console.log(a)
    }
    counter()
}
let value = parseFloat(prompt("Ingrese un valor: "))

while(true){
    let conf = confirm("Desea incrementar el valor ingresado")
    if(conf){
        count(value)
    }else{
        break;
    }
}
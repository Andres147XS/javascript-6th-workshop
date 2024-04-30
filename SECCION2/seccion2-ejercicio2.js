console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
  );
  try {
    console.log(funcionDeclarada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
  );
  try {
    console.log(funcionExpresada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  // Declaración de una función declarada
  function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
  }
  
  // Declaración de una función expresada
  const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
  };
  
  console.log("Llamando a 'funcionDeclarada' después de su declaración:");
  console.log(funcionDeclarada());
  
  console.log("Llamando a 'funcionExpresada' después de su declaración:");
  console.log(funcionExpresada());

  /*¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
  cuando intento llamar la funcion declarada antes de, funciona sin ningun problema
  pero cuando intento llamar la funcion expresada antes de me arroja este error "Cannot access 'funcionExpresada' before initialization"
  */

  /*¿Cómo difieren los resultados entre la función declarada y la función expresada?
  la diferencia entre los dos resultados es que si llamamos una funcion declarada antes de 
  se va a compilar sin ningun error, estas se pueden llamar antes y despues
  
  en cambio la funcion expresada si se llama antes presenta error, tiene que invocarse despues de creada*/

  /*¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
  lo que pasa es que la funcion declarada es libre por naturaleza pero la expresada se puede decir que es como una variable
  convertida a funcion, y sabemos que las variables no se pueden llamar antes de declararlas, eso es lo que pasa.*/

  
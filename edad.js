let edad = 30;
//COMPRUEBA QUE LO INTRODUCIDO ES UN NÚMERO
if (Number(edad) == edad) {
  //SI ES MAYOR DE 18
  if (edad > 18) {
    //IMPRIME EN PANTALLA EL MENSAJE
    console.log("Puedes conducir");
  }
  else {
    console.log("NO Puedes conducir");
  }
}
//SI NÓ
else {
  //MUESTRA UN MENSAJE
  alert("Introduce un numero válido");
  //Modificacion
}
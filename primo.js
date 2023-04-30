let nro1 = 1526;
let contador = 0;
for (let divisor = 1; divisor <= nro1; divisor++) {
  if (nro1 % divisor == 0) {

    contador++;
    console.log('El número es divisible por ' + divisor);

  }
}
if (contador <= 2) {
  console.log('primo');
}
else {
  console.log('no primo');
}
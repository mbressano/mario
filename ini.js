/*vARIABLES EN JAVASCRIPT 
let t;
t = 'Esto es una variable de string. definida en dos líneas';
console.log(t);
// 
let u = 'Esto es una variable de string. definida en una línea';
console.log(u);
const pep = " Esto es una constante";
console.log(pep);

//Variables en dos dimensiones Matrices y Vectores
let array = [1, true, false, 'Esto es una prueba'];
console.log(`La matriz posee los siguientes elementosL: ${array}`);
console.log(`El primer elemento de la matriz es: ${array[0]}`);
console.log(`El segundo elemento de la matriz es: ${array.at(1)}`);
console.log(`El último elemento de la matriz es: ${array.at(-1)}`);
console.log(`El tamaño de la matriz es:  ${array.length}`);
console.log(`Excedemos la cantidad de elementos de la matriz y no da error: ${array[4]}`);
array[5] = 'last';
console.log(`La matriz no esta empaquetada puede tener lugares vacios: ${array}`);
*/
//Uso de si condicional
let a = 1 + 2;
let b = 6;

if (a > b) {
  console.log(a + ' es mayor que ' + b);
} else {
  console.log(b + ' es mayor que ' + a);
}

//USo del switch
let select = '1';

switch (select) {
  case 1:
    console.log(`selección es 1`);
    break;
  case 2:
    console.log(`selección es 2`);
    break;
  default:
    console.log('No coincide');
    break;
}
//Lazos
let i = 0;
let j = 0;

console.log('while');
while (i < 3) {
  console.log(`El valor de i es ${i}`);
  i++;
}


console.log('for');

for (let k = 0; k < 3; k++) {
  console.log(`El valor de K es ${k}`);
}

// Declaración de la función "saludar"
function saludar() {
  // Contenido de la función
  console.log("Hola, soy una función");
}


saludar();

function multiplicar() {
  for (let i = 0; i < 11; i++) {
    console.log("1 x", i, "=", 1 * i);
  }
}


multiplicar();

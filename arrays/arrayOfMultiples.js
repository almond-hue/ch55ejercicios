/*Array of Multiples
Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.

1. 

 */

function arrayMultiplos(number, length) {
  const result = [];

  for (let i = 1; i <= length; i++) {
    result.push(number * i);
  }

  return result;
}

console.log(arrayMultiplos(2, 10));


console.log(arrayMultiplos(17, 6));




//?NOTAS
/*leght indica los múltiplos totales
  result es un array vacío para guardar
  for (let i = 1; i <= length; i++) es un bucle para indicar el tope de lenght*/
//!duda pero creo que si 
/* Number divided into halves
Given a number, return the number divided into its halves in an array.
 
Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
 
1. dar numero a la función
2. dividir entre 2
3. da el resultado dos veces en un array


*/

function numDiv(number) {
  const half = number / 2;
  return [half, half];
}

console.log(numDiv(90)); 
console.log(numDiv(101));


/* NOTAS */
/*  function numDiv(number){
función numDiv, el number es el valor que se da a la función para qie lo usé
    const half = num / 2;
number/2 o sea si es 10 half sera 5
    return [half, half]
    half es un array que tiene el mismo valor dos veces
**/

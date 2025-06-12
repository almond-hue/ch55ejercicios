/*Positive dominance in Array
 
Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*/


function positiveDom(array) {
  let positiveCount = 0;
  let nonPositiveCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveCount++;
    } else {
      nonPositiveCount++;
    }
  }

  return positiveCount > nonPositiveCount;
}

console.log(positiveDom([-1, -3, -5, 4, 6767]));

console.log(positiveDom([1, 2, 3, -1, 0]));

console.log(positiveDom([-46, -62, -33, -1, 324]));

//?NOTAS
/*se tienen dos contadores para num - + se sigue usando el bucle for se almacenan en los contadores y se hace condicion de comparación para determinar si es v o f*/
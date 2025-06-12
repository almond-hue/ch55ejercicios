/*Reto de Programación: FizzBuzz
Descripción:
Escribe un programa que recorra los números del 1 al 100 y aplique las siguientes reglas:
Si el número es múltiplo de 3, imprime "Fizz".
Si el número es múltiplo de 5, imprime "Buzz".
Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".
Si no es múltiplo de ninguno, imprime el númer


1. 100 números
2. crear un buble que recorra 100 números
3. Si el número es múltiplo de 3, imprime "Fizz"
    3.1 Ocupar la expresión número % 3
    3.2 Es verdadero si el módulo es = 0
4. Si el númerp es múltiplo de 5, imprime "Buzz"
    4.1 Ocupar la expresión % 5
    4.2 Es verdadero si el módulo es = 0
5. Si el número es múltiplo de 3 y 5, imprime "FizzBuzz"
    5.1 Ocupar la expresión % 3 y módulo % 5
    5.2 Es verdadero solo y solo ambas expresiones son = 0
6. En caso de no ser múltiplo de ninguno imprime el número 
*/

let counter = 1;
do{
    if(counter % 3 === 0 & counter % 5 === 0){
        console.log(`El número ${counter } es FizzBuzz `);
    }
    else if (counter % 3 === 0){
        console.log(`El número ${counter } es Fizz `);
    }
    else if (counter % 5 === 0){
        console.log(`El número ${counter } es Buzz `);
    }
    else{
        console.log
    }
    counter++;
}while(counter <= 100)

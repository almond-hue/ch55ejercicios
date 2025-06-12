let counter = 0;
const username = prompt ("Hola, ingresa tu nombre de usuario");
const age = prompt ("Ahora ingresa tu edad: ");
const favoriteMovies = [];

//vamos a pedir 5 películas primero
for(let i = 1; i <= 5; i ++ ){
    //los string dentro de `` se conocen como string literal,
    //concatenar variables y texto de una forma sencilla y legible 
    favoriteMovies.push(prompt(`Ingresa la película número ${i}:`));
    //equivalente a "Ingresa la película número " + i + ": "
}
'' != `` 

console.log(`Hola soy ${username} tengo ${age} años y mis películas favoritas son:
    ` );

while(counter < favoriteMovies.length) {
    console.
    log(`Mi película favorita número ${counter + 1} es: ${favoriteMovies[counter]}`)
    counter ++;
}
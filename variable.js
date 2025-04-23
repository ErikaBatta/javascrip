//let nombre = "carlos"

//function prueba(){
    //let nombre  = "juan"
   // return nombre 
//}

//console.log(nombre)
//console.log(prueba())

// Reemplazo de texto
let saludo = "Hola, mundo";
let nuevoSaludo = saludo.replace("mundo", "amigo");
console.log(nuevoSaludo); // "Hola, amigo"

// Mayúsculas y minúsculas
let texto = "javascript";
console.log(texto.toUpperCase()); // "JAVASCRIPT"
console.log(texto.toLowerCase()); // "javascript"

// Comillas simples
//let saludo = 'Hola, mundo';

// Comillas dobles
//let frase = "JavaScript es asombroso";

// Plantillas literales
let nombre = 'Carlos';
let mensaje = `Hola, ${nombre}`;

//console.log(saludo)
//console.log(frase)
console.log(nombre)
console.log(mensaje)

// Buscar una subcadena
let frase = "Bienvenido a JavaScript";
console.log(frase.includes("JavaScript")); // true

// Obtener una parte del string
let subcadena = frase.slice(12, 22);
console.log(subcadena); // "JavaScript"

// Dividir un string en un array
let lista = "manzana,banana,uva";
let arrayFrutas = frase.split(" ");
console.log(arrayFrutas); // ["manzana", "banana", "uva"]
// Ejercicio 6: Verificar si una palabra es un palíndromo
// Crea una función llamada "esPalindromo" que acepte una cadena de texto (palabra) y determine si es un palíndromo.
// Un palíndromo es una palabra que se lee igual de adelante hacia atrás.
// Ejemplo: esPalindromo("radar") debería devolver true.

let palabra = "radara";
function esPalindromo(data) {
    // creamos una variable que contrendra la palabra invertida
    // split, lo que hace es algo asi: Convierte la cadena en un array de caracteres, dividiéndola letra por letra. Ej:  ['r', 'a', 'd', 'a', 'r']
    //  reverse, revierte el orden de los elementos en el array.
    // Join, uno de nuevo los caracteres del array para formar una cadena de texto.
	let strReversed = data.split("").reverse().join("");

	return data === strReversed ? true : false;
}
let resultado = esPalindromo(palabra);
console.log(resultado);

// Ejercicio 8: Contar palabras
// Crea una función llamada "contarPalabras" que acepte una frase y devuelva el número de palabras que contiene.
// Ejemplo: contarPalabras("Me encanta aprender JavaScript") debería devolver 4.

/*  */
// forma uno
// let frase = "Me encanta aprender JavaScript";
// function contarPalabras(data) {
// 	let palabras = 1;
// 	let dataString = " ";
// 	for (let i = 0; i < data.length; i++) {
// 		if (dataString.includes(data[i].toLowerCase())) {
// 			palabras++;
// 		}
// 	}
// 	return palabras;
// }
// let resultado = contarPalabras(frase);
// console.log(resultado);

/*  */
// forma dos
// let frase = "Me encanta aprender JavaScript";
// function contarPalabras(data) {
// 	let palabras = 1;
// 	let dataString = " ";
// 	let i = 0;
// 	while (i < data.length) {
// 		let palabra = data[i].toLowerCase();

// 		if (dataString.includes(palabra)) {
// 			palabras++;
// 		}
// 		i++;
// 	}
//     return palabras;
// }
// let resultado = contarPalabras(frase);
// console.log(resultado);

/*  */
// forma tres
let frase = "Me encanta aprender JavaScript";
function contarPalabras(data) {
    // data.trim() elimina cualquier espacio extra al inicio o al final de la frase.
    let palabrasArray = data.trim().split(" ");
    console.log(palabrasArray);
    
    return palabrasArray.length;
}
let resultado = contarPalabras(frase);
console.log(resultado); // Esto debería devolver 4



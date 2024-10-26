// Ejercicio 9: Verificar si un número es primo
// Escribe una función llamada "esPrimo" que acepte un número como parámetro y determine si es un número primo.
// Un número primo es aquel que solo es divisible por 1 y por sí mismo.
// Ejemplo: esPrimo(7) debería devolver true.

/*  */
// forma uno
// let number = 7;
// function esPrimo(data) {
//     // el bucle busca en un rango entre dos y el numero que se seleccione, digamos 15, el rango sera de dos hasta catorce, la idea del bucle es que si no es divisble entre ese rango es primo, si es divisble por alguno es false, y el uno no aplica porque cualquier nuemro es divisible por uno
//     for (let i = 2; i < data; i++) {
//       if (data % i === 0) {
//         return false;
//       }
//     }
//     // el retornara true si se cumple esta condición menos el numero 1
//     return data !== 1;
//   }
// let resultado = esPrimo(number);
// console.log(resultado);

/*  */
// forma dos
let number = 7;
function esPrimo(data) {
	let i = 2;
	while (i < data) {
		if (data % 2 === 0) {
			return false;
		}
		i++;
	}
	return data !== 1;
}
let resultado = esPrimo(number);
console.log(resultado);

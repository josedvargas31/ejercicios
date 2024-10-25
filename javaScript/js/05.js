// Ejercicio 5: Contar vocales
// Escribe una función llamada "contarVocales" que acepte una cadena de texto (palabra)
// y devuelva la cantidad de vocales (a, e, i, o, u) que contiene.
// Ejemplo: contarVocales("javascript") debería devolver 3.

/*  */
// forma uno con for
// let palabra = "JavaScript";
// function contarVocales(data) {
// 	let contarVocales = 0;
// 	let vocales = "aáeéiíoóuú";
// 	for (let i = 0; i < data.length; i++) {
// 		// el emtodo includes() se utiliza para verificar si una cadena o array tienen un determinaod valor
// 		//  el metodo toLowerCase() se usa para convertir una letra o cadena de texto a minúsculas.
// 		if (vocales.includes(data[i].toLowerCase())) {
// 			contarVocales++;
// 		}
// 	}
// 	return contarVocales;
// }
// let resultado = contarVocales(palabra);
// console.log("Las vocales que tiene son ", resultado);

/*  */
// forma dos con while
let palabra = "JavaScript";
function contarVocales(data) {
	let contarVocales = 0;
	let vocales = "aáeéiíoóuú";
	let i = 0;
	while (i < data.length) {
		let letra = data[i].toLowerCase();

		if (vocales.includes(letra)) {
			contarVocales++;
		}
		i++;
	}
	return contarVocales;
}
let resultado = contarVocales(palabra);
console.log("Las vocales que tiene son ", resultado);

/*  */

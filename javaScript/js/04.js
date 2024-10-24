// Ejercicio 4: Imprimir números pares
// Escribe una función llamada "imprimirNumerosPares" que imprima todos los números pares entre 1 y 50.
// Ejemplo: 2, 4, 6... 50.

/*  */
// forma uno
let numeroWhile = 0;
function imprimirNumerosParesWhile(data) {
	while (data <= 50) {
		if (data % 2 == 0) {
			console.log("Pares while ", data);
		}
		data++;
	}
}
let resultadoWhile = imprimirNumerosParesWhile(numeroWhile);

/*  */
// forma dos
let numeroFor = 0
function imprimirNumerosParesFor() {
    for(let data = 0; data <= 50; data++){
        if (data % 2 == 0) {
            console.log("Pares For ", data);
        }
    }
}
let resultadoFor = imprimirNumerosParesFor(numeroFor)

/*  */
// las dos formas anteriores, pero con el array
// forma uno
let numbersArrayOne = [];
function imprimirNumerosParesWhileArray(data) {
    while (data <= 50) {
        if (data % 2 == 0) {
            numbersArrayOne.push(data);
        }
        data++;
    }
    console.log("Los numeros pares del 1 al 50 con while", numbersArrayOne);
}
let resultadoArrayWhile = imprimirNumerosParesWhileArray(numbersArrayOne)

/*  */
// forma dos
let numbersArrayTwo = [];
function imprimirNumerosParesForArray() {
    for (let i = 0; i <= 50; i++) {
        if (i % 2 == 0) {
            numbersArrayTwo.push(i);
        }
    }
    console.log("Los numeros pares del 1 al 50 con for", numbersArrayOne);
}
let resultadoArrayFor = imprimirNumerosParesForArray(numbersArrayTwo)

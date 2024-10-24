// Ejercicio 2: Comparar dos números
// Crea una función llamada "compararNumeros" que acepte dos números como parámetros.
// La función debe devolver el número más grande, o un mensaje que diga que son iguales si ambos son iguales.
// Ejemplo: compararNumeros(3, 7) debería devolver 7.

/*  */
// forma uno
function mayorNumeroFormaUno(n1, n2) {
	return n1 > n2 ? n1 : n2;
}
let resultadoUno = mayorNumeroFormaUno(3, 7);
console.log("La forma uno el numero mayor es ", resultadoUno);

/*  */
// forma dos
let numeroUno = 7;
let numeroDos = 3;
function mayorNumeroFormaDos() {
	return numeroUno < numeroDos ? numeroDos : numeroUno;
}
let resultadoDos = mayorNumeroFormaDos();
console.log("La forma dos el número mayor es ", resultadoDos);

/*  */
// forma tres
let numeromayor = 37;
function mayorNumeroFormaTres(data) {
	while (data > 9) {
		let dataString = data.toString();
		for (let i = 0; i < dataString.length; i++) {
			// console.log("numeros",dataString[0]);

			//    return dataString[0] < dataString[1] ? data = dataString[1] : dataString[0];
			if (dataString[0] > dataString[1]) {
				return (data = dataString[0]);
			} else {
				return (data = dataString[1]);
			}
		}
	}
	return data;
}
let resultadoTres = mayorNumeroFormaTres(numeromayor);
console.log("La forma tres el número mayor es ", resultadoTres);

/*  */
// forma cuatro
let numeros = [3, 7];
function mayorNumeroFormaCuatro(data) {
	for (let i = 0; i < data.length; i++) {
		return data[0] < data[1] ? data[1] : data[0];
	}
}
let resultadoCuatro = mayorNumeroFormaCuatro(numeros);
console.log("La forma cuatro el número mayor es ", resultadoCuatro);

/*  */
// forma cinco
let num1 = 3;
let num2 = 7;

function mayorNumeroFormaCinco(dataUno, dataDos) {
    let mayorTotal = 0;
    
        mayorTotal = dataUno > dataDos ? dataUno : dataDos;

    return mayorTotal;
}

let resultadoCinco = mayorNumeroFormaCinco(num1, num2);
console.log("El mayor número de la forma cinco es ", resultadoCinco);

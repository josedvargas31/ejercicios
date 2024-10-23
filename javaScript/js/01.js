// Ejercicio 1: Suma de dos números
// Escribe una función llamada "sumar" que tome dos números como parámetros y devuelva su suma.
// Ejemplo: sumar(4, 5) debería devolver 9.

/*  */
// forma uno
// forma Uno y Dos, el propósito es sumar dos números
function sumarFormaUno(n1, n2) {
	return n1 + n2;
}
let resultadoUno = sumarFormaUno(4, 5);
console.log("El resultado de la suma de la forma uno es ", resultadoUno);

/*  */
// Forma dos
let numerono = 5;
let numerodos = 4;

function sumarFormaDos() {
	return numerono + numerodos; // creamos una variable que retornara el valor del numero uno y dos
}
let resultadoDos = sumarFormaDos();
console.log("El resultado de la suma de la forma dos es ", resultadoDos);

/*  */
// forma tres
// el propósito es procesar un solo número y sumar sus dígitos.
let numero = 45;

function sumarFormaTres(data) {
	while (data > 9) {
		let sumaTotal = 0; // creamos esta variable para que guarde la suma final de los numero
		let datatring = data.toString(); // creamos una variable y convertimos el numero a string, para luego recorrerlo por digitos
		for (let i = 0; i < datatring.length; i++) { // recorremos todos los datos
			sumaTotal += parseInt(datatring[i]); //sumamos todos los datos que esten en data
		}
		data = sumaTotal;
	}
	return data;
}
let resultadoTres = sumarFormaTres(numero);
console.log("El resultado de la suma de la forma tres es ", resultadoTres);

/*  */
// forma cuatro
let numeros = [4, 5];
function sumarFormaCuatro(data) {
    let sumaTotal = 0;
    // data.length te da la cantidad de elementos en el arreglo, si colocas un numero en especifico, recorrera solo los dos primeros elementos, en tal caso de que hayan mas de dos
    for (let i = 0; i < data.length; i++) {
        sumaTotal = sumaTotal + data[i]; // sumamos los datos que esten en nuestro arreglo
    }
    return data = sumaTotal;
}
let resultadoCuatro = sumarFormaCuatro(numeros);
console.log("El resultado de la suma de la forma cuatro es ", resultadoCuatro);

/*  */
// forma cinco
let n1 = [4];
let n2 = [5];
function sumarFormaCinco(dataUno, dataDos) {
    let sumaTotal = 0;
    for(let i = 0; i < dataUno.length; i++) {
        sumaTotal = sumaTotal + dataUno[i];
    }
    for(let j = 0; j < dataDos.length; j++){
    sumaTotal = sumaTotal + dataDos[j]
    }
    return sumaTotal
}
let resultadoCinco = sumarFormaCinco(n1, n2);
console.log("El resultado de la suma de forma cinco es ", resultadoCinco);



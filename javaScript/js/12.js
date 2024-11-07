// Ejercicio &: Potencia de un número
// Escribe una función llamada "calcularPotencia" que tome dos números  como parámetroy devuelva su potencia.
// Ejemplo: sumar(2,3) debería devolver 8.   

let numberOne = 2;
let numberTwo= 3;
function calcularPotencia(dataX, dataY) {
    return Math.pow(dataX, dataY);
}
let result = calcularPotencia(numberOne, numberTwo);
console.log(result);
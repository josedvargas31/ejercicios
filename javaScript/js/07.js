// Ejercicio 7: Calcular el factorial
// Escribe una función llamada "factorial" que acepte un número como parámetro
// y devuelva el factorial de ese número. El factorial de un número es el producto de todos los enteros positivos menores o iguales a ese número.
// Ejemplo: factorial(5) debería devolver 120.

/*  */
// forma uno
// let numero = 5;
// function factorial(data) {
//     if (data == 0) {
//         return 1;
//     } else {

//         return (data*factorial(data -1));
//     }
// }
/* 
n = 5 -> 5 * 24 = 120
    n = 4 -> 4 * 6
        n = 3 -> 3 * 2
        n = 2 -> 2 * 1
            n = 1 -> 1 * 1
                n = 0 -> 1 
*/
// let resultado = factorial(numero);
// console.log(resultado);

/*  */
// forma dos
// let numero = 5;
// function factorial(data) {
//  let result = data;
//  if (data === 0) {
//      return 1;
//  }
//  while (data > 1) {
//      data--;
//      result *= data;
//  }
//  return result;
// }
// let resultado = factorial(numero);
// console.log(resultado);

/*  */
// forma tres
let numero = 5;
function factorial(data) {
    // let result = data;
    if (data === 0) {
        return 1;
    }
    for (let i = data -1; i >= 1; i--) {
        // console.log(i);
        
        data = data * i;
    }
    return data;
}
let resultado = factorial(numero);
console.log(resultado);



// Ejercicio 3: Imprimir los números del 1 al 100
// Utilizando un bucle (for o while), imprime en consola los números del 1 al 100.
// Ejemplo: 1, 2, 3... 100.

/*  */
// forma uno con array
let numerosWhile = [];
let i = 0;
while (i < 100) {
	i++;
    numerosWhile.push(i); //agrega los numeros a un array
}
console.log("La Primera forma de imprimir los números del 1 al 100", numerosWhile);
/*  */
// forma dos con array
let numerosFor = [];
for (let j = 1; j <= 100; j++) {
    numerosFor.push(j) //agrega los numeros a un array
    
}
console.log("La segunda forma de imprimir los números del 1 al 100", numerosFor);

/*  */
// las dos formas anteriores, pero sin el array
// forma uno
let p = 1;
while (p <= 100) {
    console.log("While", p);
    p++;
}

/*  */
// forma dos
for(let l = 1; l <= 100; l++) {
    console.log("For", l);
    
}

# Ejercicio 2: Comparar dos números
# Crea una función llamada "compararNumeros" que acepte dos números como parámetros.
# La función debe devolver el número más grande, o un mensaje que diga que son iguales si ambos son iguales.
# Ejemplo: compararNumeros(3, 7) debería devolver 7.

#  forma uno
def mayorNumeroFormaUno(n1, n2):
    if n1 < n2:
       return n2
    if n1 > n2:
       return n1
    if n1 == n2:
        return "Los números son iguales"
       
       
resultadoUno = mayorNumeroFormaUno(3,7)
print(resultadoUno)

# # forma dos
numeroUno = 3
numeroDos = 7
def mayorNumeroFormaDos():
    if numeroUno < numeroDos:
       return numeroDos
    if numeroUno > numeroDos:
       return numeroUno
    if numeroUno == numeroDos:
        return "Los números son iguales"
resultadoDos = mayorNumeroFormaDos()
print(resultadoDos)

# forma tres
nu1=int(input("Ingrese un numero"))
nu2=int(input("ingrese otro número"))
def mayorNumeroFormaTres(numberUno, numberDos):
    if numberUno > numberDos:
        return numberUno
    if numberUno < numberDos:
        return numberDos
    else:
        return "Los números son iguales"

resultadoTres = mayorNumeroFormaTres(nu1, nu2)
print(resultadoTres)


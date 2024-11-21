#Ejercicio 1: Suma de dos números
#Escribe una función llamada "sumar" que tome dos números como parámetros y devuelva su suma.
#Ejemplo: sumar(4, 5) debería devolver 9.


# forma uno
def sumarFormaUno(n1, n2):
    return (n1+n2)
resultadoUno = sumarFormaUno(4,5)
print("El resultado de la suma de la forma uno es "+str(resultadoUno))

# forma dos
nu1=int(input('ingrese un numero '))
nu2=int(input('ingrese otro numero '))

resultadoDos = int(nu1+nu2)
print("El resultado de la suma de la forma dos es "+str(resultadoDos))

# # forma tres
numbers = 45
def sumarFormaTres(numero):
    sumaTotal = 0
    for digito in str(numero):
        sumaTotal += int(digito)
    return sumaTotal

resultadoTres = sumarFormaTres(numbers)
print("El resultado de la suma de la forma tres es "+str(resultadoTres))

# forma cuatro
numero = [4, 5]

def sumarFormaCuatro(numeros):
    sumaTotal = 0
    for digito in numeros:
        sumaTotal += digito
    return sumaTotal
resultadoCuatro = sumarFormaCuatro(numero)
print("El resultado de la suma de la forma cuatro es ", resultadoCuatro)

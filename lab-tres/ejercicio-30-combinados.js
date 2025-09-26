/*
BinaryMinds
Wilson Matías Florian Hernández - 2024392

30. Crea una función que calcule la media aritmética (promedio) de un 
arreglo de números.
 */

function ejercicio30() {
    const listaNumeros = prompt("Ingrese números separados por coma: ")
    var mensaje = ""
    const numeros = listaNumeros.split(",").map(n => Number(n.trim()));
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    const media = suma / numeros.length;
    mensaje = `La media aritmética de la lista es: ${media}`

    document.getElementById("resultado").textContent = mensaje;
}
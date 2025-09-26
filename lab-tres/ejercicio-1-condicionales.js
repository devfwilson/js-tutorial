/*
BinaryMinds
Wilson Matías Florian Hernández - 2024392

1. Crea una función que tome un número y retorne "Positivo" si es mayor 
que cero, "Negativo" si es menor que cero, y "Cero" si es igual a cero.
 */

function ejercicio1() {
    const numero = prompt("Ingrese un número: ")
    var mensaje = ""

    if (numero > 0) {
        mensaje = `El número: ${numero} es positivo`
    } else if (numero < 0) {
        mensaje = `El número: ${numero} es negativo`
    } else if (numero == 0) {
        mensaje = `Su número es cero (${numero})`
    } else {
        mensaje = `El valor ingresado no es un número`
    }

    document.getElementById("resultado").textContent = mensaje;
}
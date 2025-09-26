/*
BinaryMinds
Wilson Matías Florian Hernández - 2024392

13. Escribe una función que reciba un número y calcule su factorial.
 */

function ejercicio13() {
    const numero = prompt("Ingrese un número: ")
    var mensaje = ""
    var contador = 1
    var factorial = 1

    while (contador <= numero) {
        factorial = factorial * contador
        contador++
    }

    mensaje = `${numero}! = ${factorial}`

    document.getElementById("resultado").textContent = mensaje;
}
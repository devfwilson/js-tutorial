/*
BinaryMinds
Wilson Matías Florian Hernández - 2024392

15. Escribe un programa que imprima la tabla de multiplicar de un 
número dado por el usuario. 
 */

function ejercicio15() {
    const numero = prompt("Ingrese un número para mostrar su tabla de multiplicar:");
    let mensaje = "";
    if (isNaN(numero)) {
        document.getElementById("resultado").textContent = "Su valor no es un número";
        return;
    }
    for (let i = 1; i <= 10; i++) {
        mensaje += `${numero} x ${i} = ${numero * i}<br>`;
    }
    document.getElementById("resultado").innerHTML = mensaje;
}
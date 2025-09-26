/*
BinaryMinds
Wilson Matías Florian Hernández - 2024392

23. Escribe una función que determine si una cadena de texto es un 
palíndromo (se lee igual al derecho y al revés). 
 */

function ejercicio23() {
    const palabra = prompt("Ingrese una palabra: ")
    var mensaje = ""
    const palabraLimpia = palabra.toLowerCase();
    const palabraReversa = palabraLimpia.split("").reverse().join("");

    if (palabraLimpia == palabraReversa) {
        mensaje = `La palabra '${palabra}' SI es un palíndromo`;
    } else {
        mensaje = `La palabra '${palabra}' NO es un palíndromo`;
    }

    document.getElementById("resultado").textContent = mensaje;
}
/*
BinaryMinds
Wilson Matías Florian Hernández - 2024392

4. Escribe una función que tome una cadena de texto y verifique si su 
longitud es mayor a 5 caracteres. 
 */

function ejercicio4() {
    const palabra = prompt("Ingrese una cadena de texto: ")
    var mensaje = ""

    if (palabra.length > 5) {
        mensaje = `Su cadena de texto tiene más de 5 caracteres (${palabra.length})`
    } else if (palabra.length == 5) {
        mensaje = `Su cadena de texto tiene 5 caracteres`
    } else {
        mensaje = `Su cadena de texto tiene menos de 5 caracteres (${palabra.length})`
    }

    document.getElementById("resultado").textContent = mensaje;
}
/**
 * Se solicite un número al usuario para adivinar un número secreto
 * que será generado aleatoriamente entre el rango de 1 y 10
 */

const numeroSecreto = Math.floor(Math.random() *11) -1
const numeroJugador = parseInt(prompt("Adivina el número entre 1 y 10"))

console.log(`El numero ingresado es: ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
    console.log("Felicidades, adivinaste el numero!")
} else if (numeroJugador < numeroSecreto) {
    console.log("El número secreto es más grande")
} else {
    console.log("El número secreto es más pequeño")
}

console.log(`El numero secreto era: ${numeroSecreto}`)
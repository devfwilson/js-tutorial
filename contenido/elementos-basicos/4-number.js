/**
 * 
 *      TIPO DE DATO `number`
 * 
 */

// 1. entero y decimal
const enter = 33
const decimal = 3.34

// 2. notación científica
const cientifica = 5e4

// 3. infinito y NaN (no es un número)
const infinito = Infinity
const noEsNumero = NaN

// OPERACIONES ARITMETICAS
// 1. suma, resta, multiplicación y división
const suma = 5 + 6
const resta = 10 - 10
const multiplicacion = 3 * 4
const division = 16/4

// 2. módulo y exponenciación
const modulo = 16 % 8 
const exponenciacion = 2**4

// LA PRESICIÓN EN JAVASCRIPT

const resultado = 0.1 + 0.2 // 0.3
// console.log(resultado)
// console.log(resultado.toFixed(1))
// console.log(resultado == 0.3) // true
// console.log(resultado.toFixed(1) == 0.3) // true

// OPERACIONES AVANZADAS
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.floor(Math.random()*20+5)
// console.log(raizCuadrada)
// console.log(valorAbsoluto)
// console.log(aleatorio)

 // Lenguajes de programación:

                                // Runtime Exception 
// COMPILADOS: Java (JVM -> .java -> .class -> .jar), C, C++
// INTERPRETADOS: JavaScript -> lee>ejecuta

const numero = 2
const boolean = true
// conversión implícita
console.log(numero+boolean)
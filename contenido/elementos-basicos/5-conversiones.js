/**
 * 
 *      CONVERSIONES -> EXPLÍCITAS E IMPLÍCITAS
 * 
 */

// Conversion Explicit Type Casting
const string = '54'
const integer = parseInt(string)

// console.log(typeof string)
// console.log(typeof integer)

const float = parseFloat("3.14")
// console.log(typeof float) // number


const binario = '1010' // 10
const decimal = parseInt(binario, 2)
// console.log(decimal)

const hexa = 'CAFE'
const decimalHex = parseInt(hexa, 16)
// console.log(decimalHex)

// Conversion Implict Type Cating
const resultado = '5' + 3
// console.log(typeof resultado)

const sumaConBoolean = '3' + true
// console.log(sumaConBoolean)

const sumaConNumero = 2 + true
// console.log(sumaConNumero)

const valorString = '20'
const valorNumber = 10
const valorBoolean = true

console.log(valorString + valorString)  // concatenar
console.log(valorString + valorNumber) // concatenar
console.log(valorString + valorBoolean) // concatenar

console.log(valorNumber + valorNumber) // sumar
console.log(valorNumber + valorString) // concatenar
console.log(valorNumber + valorBoolean) // sumar

console.log(valorBoolean + valorBoolean) // sumar
console.log(valorBoolean + valorNumber) // sumar
console.log(valorBoolean + valorString) // concatenar
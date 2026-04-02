//Escreva um algoritmo que leia três valores. A, B, C. E informe se a soma de A + B é maior que C.

//2 possibilidades: A + B é maior que C ou A + B não é maior que C

let A = Number(prompt("Digite o valor de A: "))
let B = Number(prompt("Digite o valor de B: "))
let C = Number(prompt("Digite o valor de C: "))

if (A + B > C) {
    console.log("A soma de A + B é maior que C")
} else {
    console.log("A soma de A + B não é maior que C")
}
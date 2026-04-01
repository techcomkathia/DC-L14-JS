//leia 2 números do usuário. Faça a conversão com a função mais adequada e realize as operações abaixo:
// some o número 1 com o número 2 e 10
// subtraia o numero 2 do numero 1
// multiplique o número 1 por 50
// divida 600 pelo número 2

//mostre no terminal todas as operações realizadas no seguinte formato: 
// "A soma do número 1 com o número 2 e 10 é: resultado"

let numero1 = Number(prompt("Digite o primeiro número: "))
let numero2 = Number(prompt("Digite o segundo número: "))


let soma = numero1 + numero2 + 10
let subtracao = numero1 - numero2
let multiplicacao = numero1 * 50
let divisao = 600 / numero2

console.log(`A soma do número 1 com o número 2 e 10 é: ${soma}`)
console.log(`A subtração do número 2 do número 1 é: ${subtracao}`)
console.log(`A multiplicação do número 1 por 50 é: ${multiplicacao}`)
console.log(`A divisão de 600 pelo número 2 é: ${divisao}`)
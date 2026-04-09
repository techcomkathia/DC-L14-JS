//Faça um programa que receba um número e usando laços de repetição calcule e mostre a tabuada desse número.

let numero = Number(prompt("Digite um número: "))

console.log(`Tabuada do ${numero}`)
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${numero} = ${i * numero}`)
}
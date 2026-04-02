/*Leia três notas, calcule sua média e a exiba para o usuário*/
let nota1 = parseFloat(prompt("Digite a primeira nota:"))
let nota2 = parseFloat(prompt("Digite a segunda nota:"))
let nota3 = parseFloat(prompt("Digite a terceira nota:"))

let media = (nota1 + nota2 + nota3) / 3

console.log(`A média das notas (${nota1}, ${nota2}, ${nota3}) é: ${media.toFixed(2)}`) //toFixed(2) limita a exibição a 2 casas decimais

// (8.6777777)toFixed(2) limita a exibição a 2 casas decimais => 8.68
// (8.64444444)toFixed(2) limita a exibição a 2 casas decimais => 8.64
// acima de  5 arredonda para cima, abaixo de 5 arredonda para baixo, quando exatamente 5 arredonda para o número par mais próximo (8.675 arredonda para 8.68, 8.685 arredonda para 8.68)
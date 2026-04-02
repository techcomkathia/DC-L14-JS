/*Leia o salário de um funcionário e exiba o novo salário deste funcionário com um aumento de 20%*/

let salario = parseFloat(prompt("Digite seu salário (apenas números):"))
console.log(salario)

let salarioAumentado = salario + (salario * 0.20)
//salarioAumentado = salario * 1.20
//salario += salario * 0.20
//salario = salario + salario * 0.20

console.log("O novo salário com aumento de 20% é: " + salarioAumentado) //concatenação
console.log(`O novo salário com aumento de 20% é: ${salarioAumentado}`) //template literal
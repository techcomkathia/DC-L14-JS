let palavra = 'sou uma texto, logo sou um tipo string' //String (texto)
let numero = 10 //Number (inteiros)
let numero2 = 10.5 //Number (decimais)
let numero3 = "2026" //Numero mas no formato de string

//o JS vai permitir subtração, multiplicação e divisão entre string (numero no formato string) e number, mas não terá suporte para soma entre string e number, pois ocorrerá a concatenação

console.log(numero3 - 10) //subtração
console.log(numero3 * 2) //multiplica
console.log(numero3 / 2) //divisão
console.log(numero3 + 10) //soma ou concatena
console.log(numero + 10)

let num = Number("10") // 10
let num2 = Number("10.5") // 10.5
let num3 = parseFloat("10.5") // 10.5
let num4 = parseInt("10.5") // 10

let numeroUsuario = Number(prompt("Digite um número: "))
//equivale a:

let numeroUsuario2 = prompt("Digite um número: ") //string
numeroUsuario2 = Number(numeroUsuario2) //converte para number e reatribui
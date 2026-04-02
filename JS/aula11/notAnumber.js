let num = "5.5" //numero em formato de string
let palavra = "cinco" //string

let numConvertido = Number(num) //5.5 //convertendo string para number
console.log(numConvertido)
let palavraConvertida = Number(palavra) //NaN (not a number)
console.log(palavraConvertida)

console.log(Number("10,5")) //NaN
console.log(parseFloat("10,5")) //10
console.log(parseInt("10,5")) //10

console.log(parseInt("cinco")) //NaN
console.log(parseFloat("cinco")) //NaN

let x = NaN
let y = 10
let z = "palavra"

console.log(isNaN(y)) //false
//strings não são números, então isNaN retorna true
//NaN não são números, então isNaN retorna true
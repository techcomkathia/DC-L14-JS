let x = 2
let y = x
console.log(x)
console.log(y)

x=10

console.log(x)
console.log(y)


let objeto1 = {
    chave1: "valor1",
    chave2: "valor2"
}

let objeto2 = objeto1
console.log(objeto1)
console.log(objeto2)

objeto1.novaChave = "novo valor"
console.log(objeto1)
console.log(objeto2)

objeto2.novaChave = "novo valor 2"
console.log(objeto1)
console.log(objeto2)

//2 métodos para copiar objetos sem ser por referência
let objeto3 = {...objeto1} //cria um novo objeto com as propriedades do objeto1
console.log(objeto3)
//utilizando o método do
let objeto4 = Object.assign({},objeto1) //cria um novo objeto com as propriedades do objeto1

objeto3.chave1 = 'Feriado'
console.log(objeto3)
console.log(objeto4)
console.log(objeto1)
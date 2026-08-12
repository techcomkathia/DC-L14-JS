let objeto = {
    "chave1": "valor",
    "chave2": 12,
    "chave3": "valor"
}

console.log( typeof objeto)
const json = JSON.stringify(objeto)
console.log( typeof json)

const json2 = `{
    "chave1": "valor",
    "chave2": 12,
    "chave3": "valor"
}`

console.log(json2)

const objeto2 = JSON.parse(json2)
console.log(objeto2)

//strinfy - transforma um objeto em uma string
//parse - transforma uma string em um objeto
//processamento síncrono 

//copia por referência
const objetoCopia = objeto2
console.log(objetoCopia)
console.log(objeto2)

//atualizando o objetoCopia para incluir uma nova propriedade
objetoCopia.chave4 = "novo valor incluido após a copia"

console.log("objeto copia pós atualização" , objetoCopia)
console.log(objeto2)
//copia por valor
const copiaValor = {...objeto2}
console.log(copiaValor)
copiaValor.novaPropriedade = "novo valor"
console.log(copiaValor)
console.log(objeto2)


//laço de repetição for in
for(chave in objeto2){
    console.log(chave, objeto2[chave])
    console.log(chave, objeto2.chave) //nomePropriedade undefined
}
//exclusão e adição de novas propriedades

delete objeto2.chave1
console.log(objeto2)





//Você recebeu um JSON de um produto com o preço sem desconto e outras informações que devem ser corrigidas e/ou inseridas. 
//Faça um programa que receba esse JSON, converta para objeto e adicione e altere o que for necessário e por fim faça a conversão de volta para JSON.

let produto = `{
    "nome": "TV 4K",
    "preco": 5000,
    "qtd": 10,
    "estoque": true
}`

//Adicione a propriedade valorAvista (terá 10% de desconto sob o preço total), altere a quantidade para 100 , insira a propriedade fabricante (Samsung) e exclua a propriedade estoque
//mostre no console o JSON antigo e o novo

let produto = `{
    "nome": "TV 4K",
    "preco": 5000,
    "qtd": 10,
    "estoque": true
}`

console.log(produto)

let objt = JSON.parse(produto)

objt.valorAvista = objt.preco *0.9;
objt.fabricante = "Sansung"
objt.qtd = 100
delete objt.estoque

let novoJson = JSON.stringify(objt)

console.log(novoJson)
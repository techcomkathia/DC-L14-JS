let produto = {
    nome: 'TV 4K',
    preco: 5000,
    desconto: 0.1,
    qtd: 10,
    estoque:true
}

console.log(produto)

// não pe um método mas uma palavra reservada para remoção de uma propriedade de um objeto
delete produto.estoque //exclui a propriedade estoque do objeto produto
console.log(produto)

//caso queira saber todas as propriedades de um objeto
let chaves = Object.keys(produto)
console.log(chaves)
//verificar se um objeto possui uma propriedade
console.log(chaves.includes('teste'))


//caso queira saber todos os valores de um objeto
let valores = Object.values(produto)
console.log(valores)
//verificar se um objeto possui um valor
console.log(valores.includes(5000))

//arrays comparados com objetos
//uma ,lista de números ( todas as infomações sao do mesmo tipo )
let numeros = [1, 2, 3]

//uma representação de um elemento do mundo real, várias características de diferentes tipos, no mesmo array
let pessoaArray = ['João', 20, 'M']
console.log(pessoaArray[1]) //20 , mas o que esse valor representa? idade? saldo na conta?

let pessoaObjeto= {  
    nome: 'João',
    idade: 20,
    sexo: 'M'
}

//chave: valor
//propriedade: valor
//atributo: valor

console.log(pessoaObjeto.idade)

//criação de um novo atributo/chave/propriedade
pessoaObjeto.altura = 1.90
console.log(pessoaObjeto.altura)

//atualização de um valor de um atributo/chave/propriedade
pessoaObjeto.idade = 21
console.log(pessoaObjeto.idade)
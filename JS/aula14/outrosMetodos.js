let numeros = [1,2,3,4,5,6]
console.log(numeros)
//método para remoção de elementos no meio do array
let retorno =numeros.splice(1,2)
//dois parâmetros(indice de início da remoção, quantidade de elementos a serem removidos)
console.log(numeros) //[1, 4, 5, 6]
console.log(retorno)

//método para adição de elementos no meio do array
//não exclui nenhum elemento e apartir do indice 1 adiciona os elementos 'um' e 'dois'
numeros.splice(1,0,'um','dois') 
console.log(numeros) //[1, 'um', 'dois', 4, 5, 6]

//método exclusão e adição
//exclui 2 elementos apartir do indice 1 e adiciona o elemento 'um'
numeros.splice(1,2,'numero')
console.log(numeros)//[1,'numero', 4, 5, 6]


//verificação de conteúdo do array
//verficar se existe um elemento no array
let frutas = ['banana', 'laranja','banana', 'maçã']
//verificar se melancia existe no array
let existe = frutas.includes('melancia')
console.log(existe)

//verificação do índice do elemento no array
let primeiroIndice = frutas.indexOf('banana')
console.log(primeiroIndice)

let ultimoIndice = frutas.lastIndexOf('banana')
console.log(ultimoIndice)

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice?

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

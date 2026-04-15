let lista = ['informação 1', 2, true, NaN]
console.log(lista)

//acessar e mostrar no console o 2º elemento da lista
console.log(lista[1])

//modificar os valores de um elemento da lista
//segundo elemento
lista[1] = 'informação 2'
console.log(lista)

let numeros = [1, 2, 3, 4, 5]
console.log(numeros)
//adicionar um novo numero ao final da lista
//pelo indice, nesse caso o indice 5 ou ainda propriedade length
numeros[numeros.length] = 6
console.log(numeros)

//usando o método push
//adiciona um novo elemento ao final da lista
numeros.push(7)
console.log(numeros)


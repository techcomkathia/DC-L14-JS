let fila = []
let pilha = []

//métodos para inserir
//início do array - unshift
//fim do array - push

//métodos para retirar
//início do array - shift
//fim do array - pop

//adicionando um item a fila - adição sempre ao final
fila.push('pessoa 1')
fila.push('pessoa 2')
//['pessoa 1', 'pessoa 2']

//adicionando um item a pilha - adição sempre ao inicio
pilha.unshift('coisa 1')
pilha.unshift('coisa 2')
//['coisa 2', 'coisa 1']

//removendo um item da fila - remoção sempre do inicio
//os métodos de remoção sempre retornam o item removido
let itemRemovido = fila.shift()
//'pessoa 1' - item removido
//['pessoa 2'] - array atualizado

//removendo um item da pilha - remoção sempre do inicio
itemRemovido = pilha.shift()
//'coisa 2' - item removido
//['coisa 1'] - array atualizado
//crie um sistema de emissão de nota fiscal. 
//o sistema deve receber um array com os nomes dos produtos e outro com os valores desses produtos. 
//Ao iniciar o programa, o usuário deve informar quantos produtos ele deseja cadastrar nessa nota fiscal.
//Você deverá ler o nome e o valor de cada produto  e adiconar ao seu respectivo array.
//DICA: para trabalhar com índices ou métodos, as variáveis devem ser declaradas fora do laço e inicializadas com um array vazio.

/*Ao final mostre no console a nota fiscal com os produtos e seus respectivos valores.
//Exemplo: PARA 3 PRODUTOS  
//PRODUTO1 - R$ 10,00
//PRODUTO2 - R$ 15,00
//PRODUTO3 - R$ 20,00*/


//1º passo: definir quantos produtos serão lidos. Isso será usado para determinar quantas vezes o laço será repetido
let qtdProdutos = Number(prompt('Quantos produtos serão informados na NF? Digite apenas números'))

//as duas variáveis precisam ser declaras antes para ter acesso aos métodos ou trabalho com índices. 
let nomesProdutos = []
let valoresProdutos = []

//inicializando o i em 0, é ideal para trabalho com índice. Caso opte pelo método push, não irá interferir
//inicializando o i em 1, irá alterar a lógica para o trabalho com índice, e não irá interferir com o método push. 
for(let i = 0; i < qtdProdutos; i++){
    let nome = prompt(`Digite o nome do produto ${i+1}`)
    let preco = Number(prompt(`Digite o preco do produto ${i+1}. Apenas números`))

    //adicionar as informações aos devidos arrays
    //nome será adicionado pelo índice
    nomesProdutos[i]= nome

    //preco será adicionado pelo método
    valoresProdutos.push(preco)

    console.log(nomesProdutos, valoresProdutos)
    //montando a tabela
    console.log(`${nomesProdutos[i]} - R$ ${valoresProdutos[i]}`)
}



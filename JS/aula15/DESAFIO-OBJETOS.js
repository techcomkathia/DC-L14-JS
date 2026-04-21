
let Livraria = {
    nome: "Livraria do Cleitinho",
    endereco: "Rua do Cleitinho, 123",
    livros: []
}

let modeloLivro = {
    titulo: "titulo do livro",
    autor: "autor do livro",
    ano: 2020,
    editora: "editora do livro",
    preco:10, 
    estoque: 10
}

//Atividade 1
// Com base no objeto modeloLivro, crie 3 novos objetos representando livros diferentes e adicione-os ao array de livros da livraria. Use a desestruturação para criar os novos objetos a partir do modeloLivro.
//para adicionar os livros na propriedade livros da livraria, poderá usar os métodos de arrays. 


//Atividade 2
//Use o laço for of e o for in para exibir as informações de cada livro da livraria. O for of deve ser usado para iterar sobre o array de livros, enquanto o for in deve ser usado para iterar sobre as propriedades de cada livro. Exiba o título, autor e preço de cada livro em uma string formatada. Ex: "O livro X do autor Y custa Z reais".


//Atividade3 
// Converta o objeto da livraria para JSON usando o método JSON.stringify() e exiba o resultado no console.


//Atividade 4
//Você recebeu o JSON de livro de uma livraria concorrente. O Cleitinho quer adicionar em sua livraria com um preço e um estoque melhor. Reduza o preço em 30% e tenha do dobro do estoque. Converta o JSON para objeto, faça as alterações necessárias e adicione o livro ao array de livros da livraria. Por fim, exiba a livraria atualizada no console. 

const livroConcorrente = `{
  "titulo": "JavaScript: O Guia Definitivo",
  "autor": "David Flanagan",
  "ano": 2020,
  "editora": "Novatec",
  "preco": 129.9,
  "estoque": 25
}`



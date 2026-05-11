//crie uma interface que tenha um campo de input e um botão. O usuário usará esse campo para fazer uma pesquisa de filme ou série. 
//use a api da OMDB para buscar o filme ou serie. Mostre os dados do primeiro filme ou serie na interface.

//EVENTOS : click 
//métodos de seleção de elementos: querySelector, querySelectorAll
//métodos de manipulação de elementos: innerHTML, createElement, appendChild

//IMPORTANTE: crie a sua chave para a api da OMDB e cadastre no site https://www.omdbapi.com/apikey.aspx
//LINK PARA DOCUMENTACAO: https://www.omdbapi.com

const urlAPI = `https://www.omdbapi.com/?s=${textoBusca}&apikey=${chaveAPI}`
const chaveAPI = 'sua chave aqui'
const textoBusca = 'valor da busca digitado pelo usuário na interface'
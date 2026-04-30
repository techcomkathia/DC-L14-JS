const promocoesSemana = document.getElementById('promocoesDasemana')

const exemplo = document.getElementById('exemplos')

//escrevendo elementos filhos (conteúdo com tag html) usando o inner html
promocoesSemana.innerHTML = '<h1> Exemplo de título adicionado escrevendo diretamente no innerHTML </h1>'
promocoesSemana.innerHTML += '<p> exemplo de parágrafo </p>'

//vamos criar um elemento filho e adicionar a um elemento pai. Ou seja, inserir conteúdo no html criando objetos do DOM e não apenas concatenando strings

const titulo = document.createElement('h1')
//inserir texto para o objeto título
titulo.innerHTML = 'Exemplo de objeto criado com o método e adicionado ao elemento pai'
titulo.style.color = 'red'

//adicionar o elemento como filho de um elemento que já existe no document
exemplo.appendChild(titulo)
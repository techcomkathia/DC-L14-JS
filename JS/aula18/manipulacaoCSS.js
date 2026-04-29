//manipular as propriedades do atributo css 
//Selecionar o título e modificar a cor, alinhamento, tamanho e fonte

const titulo = document.getElementById('titulo')
titulo.style.color = 'red'
titulo.style.textAlign = 'center'
titulo.style.fontSize = '50px'
titulo.style.fontFamily = 'Arial'
titulo.style.borderRadius = '5px'
titulo.style.backgroundColor = 'pink',

//verficar a lista de classses de um elemento
console.log(titulo.classList)
console.log(titulo.classList[0])


//para adicionar a estilização a partir de classes já existentes na folha de estilo ou classes do bootstrap usamos o atributo classList e os métodos add e remove
let itemOlOculto = document.getElementById('elemento1Lista')
//remover a classe existente para que o item seja mostrado
itemOlOculto.classList.remove('oculta')
//adicionar uma nova classe
itemOlOculto.classList.add('destaque')
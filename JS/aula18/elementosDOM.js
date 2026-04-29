//selecionar todos os elementos de uma tag específica
//selecionar todos os lis
const itensListas = document.getElementsByTagName('li') //retorna um htmlcollection
console.log(itensListas)

const tituloPrincipal = document.getElementsByTagName('h1')
console.log(tituloPrincipal)
//modificar o conteúdo do 1º titulo
tituloPrincipal[0].innerText = 'Novo título'


//seleção por classe
const destaque = document.getElementsByClassName('destaque')
console.log(destaque)

//seleção por id
const titulo = document.getElementById('titulo')
console.log(titulo.innerHTML)

//conteúdo do element
const listaOrdenada = document.getElementById('listaOrdenada')
//que considera o HTML (inclui todo o html dos filhos, caso tenha)
console.log(listaOrdenada.innerHTML)
listaOrdenada.innerHTML += '<li>item 4</li>'
listaOrdenada.innerHTML += '<li>item 5</li>'
//considera apenas o texto vísivel
console.log(listaOrdenada.innerText)

//considera o texto visivel ou não visivel
console.log(listaOrdenada.textContent)

//click
//detecção do mouse (mouseOn ou mouseOut)
//submissão de formulário (submit)
//evento de mudança de valor (change)

//detecção do evento e execução de uma função
//como propriedade do elemento no html 
//ou pelo método "escutador de eventos" do javascript

function minhaFuncao(texto) {
    console.log('Clicou!, ' + texto)
}

function outraFuncao() {
    console.log('Outra função')
}

const h1 = document.querySelector('h1')
//o método recebe 2 parâmetros: o nome do evento e nome uma função
h1.addEventListener('click',()=> minhaFuncao('fui envelopada por uma arrow function para evitar a execução imediata e receber o parâmetro'))
//não passamos os parenteses no parâmetro da função, pois isso condiciona a execução da função imediatamente
//h1.addEventListener('click', outraFuncao())

//adicione um botão ao exemplo anterior onde, ao clicar nele, seja exibido um alert com o texto "Produto 'nome do produto' adicionado ao carrinho"
//importante! o evento precisa ser adicionado no arquivo js, não como atributo no html
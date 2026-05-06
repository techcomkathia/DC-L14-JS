//faça uma página onde o usuário possa cadastrar um produto. Esse produto deve conter uma imagem ( que terá uma URL ), um nome, uma descrição e um preço.
//Informando todos esses dados ao submeter o formulário o produto será adicionado ao array (no formato de objeto) e será renderizado na tela em um card bootstrap.

//IMPORTANTE: valide se o preço do produto é maior que zero. Caso seja menor que zero, exiba uma mensagem de erro abaixo do campo de preço, informando que o preço deve ser maior que zero.
//Veriique se o produto já existe no array. Caso exista, exiba uma mensagem de erro abaixo do campo de nome, informando que o produto ja foi cadastrado.
//usando o método find() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

//retirar a classe oculta da sessão atividade1
document.getElementById("atividade1").classList.remove("oculta");


//selecionamos todos os elementos da sessão
//formulario e campos de input e textarea
const cadastroProduto = document.querySelector("#cadastroProduto")
const nome = document.querySelector("#nomeProduto")
const imagem = document.querySelector("#imagemProduto")
const preco = document.querySelector("#precoProduto")
const descricao = document.querySelector("#descricaoProduto")
const erroPreco = document.querySelector("#erroPreco")
const erroProduto = document.querySelector("#erroProduto")
const produtoCadastrado = document.querySelector("#produtoCadastrado")


//criamos um array para armazenar os produtos
let produtos = []


//adicionar o evento de submit ao formulário
cadastroProduto.addEventListener("submit", function(evento){
    //evitar que ele seja enviado, aparecendo na url do navegador
    evento.preventDefault()

    //validações
    if(preco.value <= 0){
        //mostra mensagem de erro
        //remover a classe oculta mostrando a mensagem de erro
        erroPreco.classList.remove("oculta")
        return
    }


    //verificar se o produto ja foi cadastrado
    const produtoEncontrado = produtos.find(produto => produto.nome === nome.value)
    if(produtoEncontrado){
        //mostra mensagem de erro
        //remover a classe oculta mostrando a mensagem de erro
        erroPreco.classList.add('oculta')
        erroProduto.classList.remove("oculta")
        return    
    }

    //passando as duas validações, adicionamos o produto ao array
    produtos.push({
        nome: nome.value,
        imagem: imagem.value,
        preco: preco.value,
        descricao: descricao.value
    })
    //apos o produto criado, limpamos o formulário e criamos o card com o produto
    produtoCadastrado.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${imagem.value}" class="card-img-top" alt="${nome.value}">
            <div class="card-body">
                <h5 class="card-title">${nome.value}</h5>
                <p class="card-text">${descricao.value}</p>
                <p class="card-text">R$ ${preco.value}</p>
                <a href="#" class="btn btn-primary">Adicionar ao carrinho</a>
            </div>
        </div>               
    
    `

    //limpeza dos campos do formulário
    nome.value = ""
    imagem.value = ""
    preco.value = ""
    descricao.value = ""

    //limpeza dos campos erro
    erroPreco.classList.add('oculta')
    erroProduto.classList.add("oculta")
}
)
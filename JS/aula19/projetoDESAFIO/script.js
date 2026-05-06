//array de produtos
let cardapio = {
    burgueres: [
        {
            nome: "Clássico Angus Burger",
            preco: 22.50,
            descricao: "Delicie-se com o nosso Hambúrguer Clássico, feito com um suculento hambúrguer de carne angus, queijo derretido, alface crocante, tomate fresco e um toque especial do nosso molho secreto. Perfeito para saciar sua fome!",
            img: "imagensCompactadas/imagens/burger01.png"
        },
        {
            nome: "Gourmet Burger",
            preco: 35.00,
            descricao: "O nosso Hambúrguer Gourmet, preparado com um suculento hambúrguer de carne nobre, queijo derretido, cebola caramelizada e bacon. Uma escolha irresistível!",
            img: "imagensCompactadas/imagens/burger02.png"
        },
        {
            nome: "Defumado BBQ Burger",
            preco: 29.00,
            descricao: "Deixe-se envolver pelo sabor defumado do nosso Hambúrguer BBQ, uma deliciosa combinação de hambúrguer de carne suculenta, queijo cheddar derretido, cebola caramelizada e salada verde.",
            img: "imagensCompactadas/imagens/burger03.png"
        },
        ,
        {
            nome: "Defumado BBQ Burger",
            preco: 29.00,
            descricao: "Deixe-se envolver pelo sabor defumado do nosso Hambúrguer BBQ, uma deliciosa combinação de hambúrguer de carne suculenta, queijo cheddar derretido, cebola caramelizada e salada verde.",
            img: "imagensCompactadas/imagens/burger03.png"
        }
    ],

    acompanhamentos: [
        {
            nome: "Fritas",
            preco: 15.00,
            descricao: "Nossas batatas fritas são o acompanhamento perfeito para qualquer refeição! Cortadas em palitos e fritas até ficarem douradas e crocantes por fora, e macias por dentro, elas são irresistíveis em cada mordida.",
            img: "imagensCompactadas/imagens/acomp01.png"
        }
    ],

    bebidas: [
        {
            nome: "Coca-Cola",
            preco: 5.00,
            descricao: "Refresque-se com a clássica Coca-Cola gelada, uma bebida que encanta paladares há décadas. Com seu sabor único e inconfundível para acompanhar seu hambúrguer ou batatas fritas.",
            img: "imagensCompactadas/imagens/bebida01.png"
        },
        {
            nome: "Sprite",
            preco: 5.00,
            descricao: "Revitalize seus sentidos com a refrescante Sprite, uma bebida cítrica e efervescente que desperta os sentidos e eleva o seu ânimo para acompanhar seu hambúrguer ou batatas fritas.",
            img: "imagensCompactadas/imagens/bebida02.png"
        }
    ]
};

let carrinho = []

const burgueres = document.querySelector("#secaoBurguer")
const acompanhamentos = document.querySelector("#secaoAcompanhamentos")
const bebidas = document.querySelector("#secaoBebidas")
const corpoCarrinho = document.querySelector("#corpoCarrinho")


/*
<div class="boxProduto py-3">
    <div class="boxImg">  
        <img class="imgProduto" src="" alt="">   
    </div>
    <div class="boxTexto">
        <h3 class="nomePreco"></h3>
        <p class="descricao"></p>
        <button class="btn">Pedir</button>
    </div>
</div>
*/

//monte as 3 seções a partir da manipulação do DOM
//Você pode usar os métodos querySelectorAll() e querySelector() para  selecionar os elementos pais
// para criar o conteúdo dos elementos filhos existem 2 abordagens:
// 1. Usar o innerHTML
// 2. Usar createElement e o appendChild. Atenção na estilização pelas classes do CSS. Nesse caso você usará  o atributo classList.

//usar um atributo do objeto cardapio que é um array


function montarSecao(secao, array){
    array.forEach( (produto, index) =>{
    let cardProduto = document.createElement("div")
    //montar id para produto: remover espaco e transformar em minusculo
    cardProduto.innerHTML = `
        <div class="boxProduto py-3">
            <div class="boxImg">  
                <img class="imgProduto" src="${produto.img}" alt="${produto.nome}">   
            </div>
            <div class="boxTexto">
                <h3 class="nomePreco">${produto.nome} - R$ ${produto.preco.toFixed(2)}</h3>
                <p class="descricao">${produto.descricao}</p>
                <button class="btn" id="btn${produto.id}" data-bs-toggle="modal" data-bs-target="#detalheProduto${produto.id}" >Pedir</button>
            </div>

            <div class="modal fade" id="detalheProduto${produto.id}" tabindex="-1" aria-labelledby="detalheProduto${produto.id}Label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="detalheProduto${produto.id}Label">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p> ${produto.nome} adicionado ao carrinho</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Ok</button>
                </div>
                </div>
            </div>
            </div>

        </div>`

    //selecionando o elemento pelo id e adicionando um escutando de evento. A manipulação para a acriação de um atributo id foi necessária mas normalmente esse atributo já existe no objeto dentro do array.
    let botao = cardProduto.querySelector(`#btn${produto.id}`)
    botao.addEventListener("click", () => {
        adicionarProdutoAoCarrinho(produto)
    })


    //adicionar o novo card a secao pai
    secao.appendChild(cardProduto)


})}

function adicionarProdutoAoCarrinho(produto){
    carrinho.push(produto)
    //atualiza a tela do carrinho
    montarCarrinho()
    // alert(`Produto ${produto.nome} adicionado ao carrinho!`) alterado para a exibição do modal
}


//complemente a função acima para que assim que seja detectado o clique em um botão, ele chame a funcao que ira adicionar o produto ao carrinho
// ao adicionar um produto ao carrinho, ele deve ser adicionado ao array carrinho e um alert deve ser exibido com o nome do produto adicionado ao carrinho
//crie uma função adicionarProdutoAoCarrinho que recebe objeto produto como parâmetro e adiciona o produto ao carrinho


// crie uma função que é detalheProdutoAdionado, que será um modal do bootstrap que seja exibido quando o produto for adicionado ao carrinho. Ou seja a função adicionarProdutoAoCarrinho deve chamar essa funcao após incluir o produto ao array carrinho. https://getbootstrap.com/docs/5.3/components/modal/

function montarCarrinho(){
    //verifica se há itens dentro do array carrinho
   if(carrinho.length == 0){
       corpoCarrinho.innerHTML = "Nenhum item no carrinho"
   }else{
    let totalCarrinho = 0
    //limpa o corpo do carrinho com as informações anteriores e atualiza
    corpoCarrinho.innerHTML = ""
    carrinho.forEach((produto)=>{
        totalCarrinho += produto.preco
    
        let detalheItem = document.createElement('p')
        detalheItem.innerHTML = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`
        corpoCarrinho.appendChild(detalheItem)
   })

   let detalheTotal = document.createElement('p')
   detalheTotal.innerHTML = `Total: R$ ${totalCarrinho.toFixed(2)}`
   corpoCarrinho.appendChild(detalheTotal)
   
            
}}

function montarTela(){
    montarSecao(burgueres, cardapio.burgueres)
    montarSecao(acompanhamentos, cardapio.acompanhamentos)
    montarSecao(bebidas, cardapio.bebidas)
    montarCarrinho()
}


montarTela()
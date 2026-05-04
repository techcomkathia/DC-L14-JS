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
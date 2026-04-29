// você foi contratado pelo cleitinho HortFrut, você precisa atualizar a lista com os produtos de destaque da semana
let produtos = [
    {nome: "Banana", preco: 2.00, categoria: "Fruta"},
    {nome: "Abacaxi", preco: 5.00, categoria: "Fruta"},
    {nome: "Laranja", preco: 3.00, categoria: "Fruta"},
    {nome: "Pera", preco: 4.00, categoria: "Fruta"},
]

//busque a divisão com id "promocoesDasemana" e insira os produtos de destaque. Dica, use o método para seleção de elemento por id (getElementById). Faça a manipulação com o innerHTML.
//Exiba no seguinte formato:
//Nome do produto - R$ Preço
//Ex: Banana - R$ 2.00
let promocoes = document.getElementById("promocoesDasemana");


let listaProdutos = "";


for (let produto of produtos) {
    listaProdutos += `
        <div>
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <p>Categoria: ${produto.categoria}</p>
        </div>
    `;
}


promocoes.innerHTML = listaProdutos;

//Opção 2

//seleção do elemento que irá receber o conteudo

promocoesDasemana.innerHTML += '<h1> Confira as promocoções da semana</h1>'

//percorrer o array aplicando uma função que irá receber o produto como parâmetro e usar essas informações para montar o HTML
produtos.forEach((produto) => {
    promocoesDasemana.innerHTML += `<div>
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <p>Categoria: ${produto.categoria}</p>
        </div>`
})
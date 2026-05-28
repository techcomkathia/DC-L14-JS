/* ------------------- ATIVIDADE 2 ---------------------
Crie um componente chamado ListagemProdutos que receba 2 props : título e listaProdutos. O componente deve exibir o título e  através do metodo map, renderizar um card (CardProduto) para cada produto usando criado na atividade 1. Renderize o componente ListagemProdutos no App.jsx passando como props o título "Produtos em Destaque" e a lista de produtos do array products. 
Importante: não esqueça da chave unica (key) ao renderizar a lista de produtos usando o map. */

import CardProduto from "./CardProduto";

export default function ListagemProdutos({ titulo, listaProdutos }) {
    return (

        <div>
            <h2 className="text-danger">{titulo}</h2>

            <div className="d-flex gap-3 border border-3 border-danger mx-3 p-2 flex-wrap justify-content-center">
                {listaProdutos.map((produto) =>  <CardProduto key={produto.id} 
                url={produto.image} 
                nome={produto.name} 
                descricao={produto.description} 
                preco={produto.price} 
                />)}
            </div>
        </div>

    )
}
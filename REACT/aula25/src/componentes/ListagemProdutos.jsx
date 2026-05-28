/* ------------------- ATIVIDADE 2 ---------------------
Crie um componente chamado ListagemProdutos que receba 2 props : título e listaProdutos. O componente deve exibir o título e  através do metodo map, renderizar um card (CardProduto) para cada produto usando criado na atividade 1. Renderize o componente ListagemProdutos no App.jsx passando como props o título "Produtos em Destaque" e a lista de produtos do array products. 
Importante: não esqueça da chave unica (key) ao renderizar a lista de produtos usando o map. */

import CardProduto from "./CardProduto";


/* ------------------- ATIVIDADE 3 ---------------------

Faça a alteração do componente ListagemProdutos para que ele exiba uma mensagem "Nenhum produto encontrado" caso a lista de produtos seja vazia. A propriedade promomocao é um booleano (true ou false) que indica que a borda do card deve ser vermelha (caso seja true) ou azul (caso seja false). 

Faça a alteração do componente CardProduto para receber também essa nova props e exibir a borda de acordo com o valor da propriedade promocao. Renderize o componente ListagemProdutos no App.jsx passando uma lista vazia para a props listaProdutos e uma outras lista de produtos para a props listaProdutos e um booleano para a props promocao.
Dica: o valor padrao da propriedade promocao deve ser false
*/


export default function ListagemProdutos({ titulo, listaProdutos, promocao = false }) {
    const classesPromocao ="d-flex gap-3 border border-danger border-3  mx-3 p-2 flex-wrap justify-content-center"
    const classesNormal = "d-flex gap-3 border border-info border-3  mx-3 p-2 flex-wrap justify-content-center"

    return (

        

        <div>
            <h2 >{titulo}</h2>
            {listaProdutos.length > 0 ? (
                <div className={promocao? classesPromocao : classesNormal}>
                {listaProdutos.map((produto) =>  <CardProduto key={produto.id} 
                url={produto.image} 
                nome={produto.name} 
                descricao={produto.description} 
                preco={produto.price} 
                promocao={promocao}
                />)}
            </div>
            ):
            (<p className="text-danger">Nenhum produto encontrado</p>)}
        </div>

    )
}
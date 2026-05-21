/* ---------------Atividade 2 -----------------
Com base na resolução da atividade 3 da aula passada ( correção  no componente CardProduto), crie um componente chamado Listagem de Produtos. Esse componente deve receber 2 propriedades: categoria e arrayProdutos. 
A categoria deverá ser o título a section  
O arrayProdutos deverá ser renderizado dentro dessa section utilizando o componente CardProduto.

Dica: use o método map para percorrer o array e retornar um array de cards de produtos. Cada card deverá ter o atributo key, igual ao index do produto no array.
*/

import CardProduto from "./CardProduto";

export default function ListagemProduto({arrayProdutos, categoria}){

    return(
        
        <section>
            <h2>{categoria}</h2>
            <div>
                {arrayProdutos.map((produto, index)=> <CardProduto 
                key={index} 
                imagem ={produto.imagem} 
                nome={produto.nome} 
                preco={produto.preco} 
                descricao={produto.descricao} 
                promocao={produto.promocao} 
                desconto={produto.desconto}/>)}
            </div>
        </section>
    )

}
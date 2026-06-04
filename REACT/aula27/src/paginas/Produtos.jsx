/*Para um array de produtos, crie uma renderização por lista na página produtos, onde ao clicar sob o nome do produto deverá ser feita a navegação para a pagina de detalhes do produto mostrando o restante das informações do produto.
 ex.:

 Página produtos (rota /produtos)
 
 Produto 1
 Produto 2
 Produto 3

 Clicando em produto 1 : acessar a rota /produtos/1

 Página detalhe do produto 1

 Nome: produto 1
 Preço: 10.00
 Descricao: descricao do produto 1

 DICAS: use o hook useParams para conseguir utilizar os parâmetros da rota, faça a configuração da rota /produtos/:id para renderizar a página de DetalheProduto.
 Utilize o componente Link para navegar entre as páginas.

*/

import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProdutosContext } from "../contextos/ProdutosContext";



export default function Produtos() {

    const products = [
  {
    id: 1,
    name: "Notebook Gamer",
    price: 4500,
    image: "https://placehold.co/300x200?text=Notebook"
  },
  {
    id: 2,
    name: "Mouse RGB",
    price: 150,
    image: "https://placehold.co/300x200?text=Mouse"
  },
  {
    id: 3,
    name: "Teclado Mecânico",
    price: 350,
    image: "https://placehold.co/300x200?text=Teclado"
  },
  {
    id: 4,
    name: "Monitor Ultrawide",
    price: 1800,
    image: "https://placehold.co/300x200?text=Monitor"
  }
]

const {produtos,removerProduto} = useContext(ProdutosContext)

//adpatação para uso do contexto de produtos

    return (
        <>
            <h1>Página de produtos</h1>
            <p>Página com a listagem dos produtos, acessada na rota /produtos</p>

            <div>
                <ul>
                    {produtos.map(product => (
                        <li key={product.id}>
                            <Link to={`/produtos/${product.id}`}>{product.name}</Link>
                            <button onClick={() => removerProduto(product.id)}>Remover</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
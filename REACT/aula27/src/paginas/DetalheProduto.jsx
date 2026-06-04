//importar o hook useParams para conseguir utilizar os parâmetros da rota, ou seja o parâmetro id
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProdutosContext } from "../contextos/ProdutosContext";

export default function DetalheProduto() {
    const {id} = useParams();

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

    const {produtos} = useContext(ProdutosContext)

    const product = produtos.find(product => product.id == id);

    return (
        <>
            <h1>Detalhe do produto {id}</h1>
            <p>Detalhes do produto, acessada na rota /produtos/:id</p>

            <div>
                {product && (
                    <>
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                    </>
                )}

                {!product && (
                    <p>Produto não encontrado</p>
                )}
                
               
            </div>
        </>
    )
    // produtos/56 -> detalhe do produto de id 56
}
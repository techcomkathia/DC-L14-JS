//importar o hook useParams para conseguir utilizar os parâmetros da rota, ou seja o parâmetro id
import { useParams } from "react-router-dom";

export default function DetalheProduto() {
    const {id} = useParams();
    return (
        <>
            <h1>Detalhe do produto {id}</h1>
            <p>Detalhes do produto, acessada na rota /produtos/:id</p>
        </>
    )
    // produtos/56 -> detalhe do produto de id 56
}
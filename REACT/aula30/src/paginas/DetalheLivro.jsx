import {useParams} from "react-router-dom";

export default function DetalheLivro() {
    const { id, cor } = useParams();
    console.log(id)
    return (
        <div>
            <h1>Detalhe do Livro {id} {cor}</h1>
        </div>
    );
}
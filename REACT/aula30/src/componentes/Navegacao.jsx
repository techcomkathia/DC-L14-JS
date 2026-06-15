import { Link } from "react-router-dom";

export default function Navegacao() {
    return (
        <>
        <Link to="/">Home</Link>
        <Link to="/livros/:id">Livro 1</Link>

        <h1>Barra de navegação</h1>       
    
    </>
    )
}
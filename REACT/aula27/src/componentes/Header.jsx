// a navegação das páginas da aplicação. Os links não serão tags a mas sim componentes Link do react-router-dom.
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/produtos">Produtos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
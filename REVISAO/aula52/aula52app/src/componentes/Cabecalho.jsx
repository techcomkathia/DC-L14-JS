import {Link} from 'react-router-dom'
import '../App.css'

function Cabecalho({ quantidadeCarrinho }) {
  return (
    <header className="cabecalho">
      <div className="container">
        <Link to="/" className="logo">
          SHOPLY
        </Link>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/produtos">Produtos</Link>

          <Link to="/carrinho" className="botao-carrinho">
            🛒 Carrinho
            {quantidadeCarrinho > 0 && (
              <span className="quantidade-carrinho">
                {quantidadeCarrinho}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Cabecalho;
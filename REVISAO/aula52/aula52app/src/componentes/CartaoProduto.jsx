export default function CartaoProduto({ produto, onAdicionar }) {
  return (
    <article className="cartao-produto" data-testid="cartao-produto">
      <div className="imagem-produto-container">
        <img
          src={produto.image}
          alt={produto.title}
          className="imagem-produto"
          data-testid="imagem-produto"
        />
      </div>

      <div className="informacoes-produto">
        <span className="categoria-produto">
          {produto.category}
        </span>

        <h3 className="titulo-produto">
          {produto.title}
        </h3>

        <p className="preco-produto">
          R$ {produto.price.toFixed(2).replace(".", ",")}
        </p>

        <button
          className="botao-produto"
          data-testid="adicionar-carrinho"
          onClick={() => onAdicionar(produto)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </article>
  );
}

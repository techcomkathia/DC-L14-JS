function Carrinho({ carrinho, onRemover }) {
  const total = carrinho.reduce(
    (soma, produto) => soma + produto.price,
    0
  );

  if (carrinho.length === 0) {
    return (
      <div
        className="mensagem-vazia"
        data-testid="mensagem-vazia"
      >
        <p>Seu carrinho está vazio.</p>
      </div>
    );
  }

  return (
    <div className="conteudo-carrinho">
      <div className="itens-carrinho">
        {carrinho.map((produto) => (
          <div
            key={produto.id}
            className="item-carrinho"
          >
            <img
              src={produto.image}
              alt={produto.title}
              className="imagem-produto"
            />

            <div className="informacoes-item-carrinho">
              <h3>{produto.title}</h3>

              <p>
                R$ {produto.price.toFixed(2).replace(".", ",")}
              </p>

              <button
                data-testid="remover-item"
                onClick={() => onRemover(produto)}
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        className="total-carrinho"
        data-testid="total-carrinho"
      >
        <strong>
          Total: R$ {total.toFixed(2).replace(".", ",")}
        </strong>
      </div>
    </div>
  );
}

export default Carrinho;
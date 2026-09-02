import CartaoProduto from "./CartaoProduto";

function ListaProdutos({ produtos, onAdicionar }) {
  return (
    <div
      className="produtos-grade"
      data-testid="produtos-grade"
    >
      {produtos.map((produto) => (
        <CartaoProduto
          key={produto.id}
          produto={produto}
          onAdicionar={onAdicionar}
        />
      ))}
    </div>
  );
}

export default ListaProdutos;
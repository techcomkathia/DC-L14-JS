import CartaoProduto from './CartaoProduto';

export default function ListaProdutos({ produtos }) {
  return (
    <div className="lista-produtos">
      {produtos.map((produto) => (
        <CartaoProduto key={produto.id} produto={produto} />
      ))}
    </div>
  );
}

export default function CartaoProduto({ produto }) {
  return (
    <div className="cartao-produto">
      <h3>{produto.nome}</h3>
      <p>{produto.descricao}</p>
      <p>Preço: R$ {produto.preco}</p>
    </div>
  );
}

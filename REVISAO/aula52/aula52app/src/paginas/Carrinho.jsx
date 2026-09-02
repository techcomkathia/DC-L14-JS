import { useContext } from "react";
import { CarrinhoContext } from "../contexto/CarrinhoContexto";


export default function Carrinho() {
    const { carrinho } = useContext(CarrinhoContext);
  return (
    <div className="carrinho">
      <h2>Carrinho de Compras</h2>
      {carrinho.length === 0 && <p>Seu carrinho está vazio.</p>}
      {carrinho.length > 0 && (
        <ul>
          {carrinho.map((produto, index) => (
            <li key={index}>{produto}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

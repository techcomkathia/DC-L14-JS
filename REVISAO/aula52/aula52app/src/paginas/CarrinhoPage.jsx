import { useContext } from "react";
import { CarrinhoContext } from "../contexto/CarrinhoContexto";

import Carrinho from "../componentes/Carrinho";


export default function CarrinhoPage() {
    const { carrinho, onRemover } = useContext(CarrinhoContext);
  return (
    <div className="carrinho">
      <h2>Carrinho</h2>
      <Carrinho carrinho={carrinho} onRemover={onRemover} />
    </div>
  );
}

import { createContext, useState } from 'react';

export const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  // função para add
  function onAdicionar(produto) {
    setCarrinho([...carrinho, produto]);
  }

  // funcao para remover
  function onRemover(produto) {
    setCarrinho(carrinho.filter((item) => item.id !== produto.id));
  }

  

  return (
    <CarrinhoContext.Provider value={{ carrinho, onAdicionar, onRemover }}>
      {children}
    </CarrinhoContext.Provider>
  );
}



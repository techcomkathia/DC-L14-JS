import { useState, useEffect } from 'react';
import ListaProdutos from '../componentes/ListaProdutos';
import FiltrosProdutos from '../componentes/FiltrosProdutos';
import Carregando from '../componentes/Carregando';
import MensagemVazia from '../componentes/MensagemVazia';

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Carregar produtos da API
    setCarregando(false);
  }, []);

  return (
    <div className="produtos">
      <h2>Produtos</h2>
      <FiltrosProdutos onFiltro={(termo) => console.log(termo)} />
      {carregando ? <Carregando /> : <ListaProdutos produtos={produtos} />}
      {produtos.length === 0 && !carregando && <MensagemVazia />}
    </div>
  );
}

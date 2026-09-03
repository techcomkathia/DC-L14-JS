import ListaProdutos from "../componentes/ListaProdutos";
import FiltrosProdutos from "../componentes/FiltrosProdutos";
import Carregando from "../componentes/Carregando";
import MensagemVazia from "../componentes/MensagemVazia";
import { buscarProdutos } from "../servicos/api";
import { useState, useEffect, useContext } from "react";
import { CarrinhoContext } from "../contexto/CarrinhoContexto";


//importar a função que consome a API e retorna os produtos
//utiliza-la no hook useEffect, para montagem da página apenas. 
//utilizar controle de estado para armazenar os produtos  (useState)
export default function Produtos() {

  const [produtos, setProdutos] = useState([]);
  const [exibidos, setExibidos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const { onAdicionar } = useContext(CarrinhoContext);

  useEffect(() => {
    let mounted = true;

    setCarregando(true);
    buscarProdutos()
      .then((res) => {
        if (!mounted) return;
        setProdutos(res);
        setExibidos(res);
        const cats = Array.from(new Set(res.map((p) => p.category)));
        setCategorias(cats);
      })
      .catch((err) => {
        console.error(err);
        setErro("Erro ao carregar produtos");
      })
      .finally(() => {
        if (mounted) setCarregando(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  function aplicarFiltros({ search, category, sort }) {
    let resultado = produtos.slice();

    const termo = (search || "").toLowerCase().trim();

    if (termo) {
      resultado = resultado.filter((p) =>
        (p.title || "")
          .toString()
          .toLowerCase()
          .includes(termo)
      );
    }

    if (category && category !== "all") {
      resultado = resultado.filter((p) => p.category === category);
    }

    if (sort === "price-asc") {
      resultado.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      resultado.sort((a, b) => b.price - a.price);
    } else if (sort === "title") {
      resultado.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    }

    setExibidos(resultado);
  }

  return (
    <div className="produtos">
      <h2>Produtos</h2>

      <FiltrosProdutos onFiltro={aplicarFiltros} categories={categorias} />

      {carregando && <Carregando />}

      {erro && <div className="error">{erro}</div>}

      {!carregando && !erro && exibidos.length === 0 && <MensagemVazia />}

      {!carregando && !erro && exibidos.length > 0 && (
        <ListaProdutos produtos={exibidos} onAdicionar={onAdicionar} />
      )}
    </div>
  );
}


import './App.css'
import Rotas from './paginas/Rotas'
import { BrowserRouter } from 'react-router-dom'
import Cabecalho from './componentes/Cabecalho'
import { CarrinhoContext } from './contexto/CarrinhoContexto'
import { useContext } from 'react'

function App() {
  //desestrutura o carrinho do contexto
  const { carrinho } = useContext(CarrinhoContext);

  return (
    <>
      <h1>Minha aplicação</h1>
      <BrowserRouter>
        <Cabecalho quantidadeCarrinho={carrinho.length} />
        <Rotas />
      </BrowserRouter>
    </>
  )
}

export default App

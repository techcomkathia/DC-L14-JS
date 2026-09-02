
import './App.css'
import Rotas from './paginas/Rotas'
import { BrowserRouter } from 'react-router-dom'
import Cabecalho from './componentes/Cabecalho'

function App() {
  

  return (
    <>
      <h1>Minha aplicação</h1>
      <BrowserRouter>
        <Cabecalho />
        <Rotas />
      </BrowserRouter>
    </>
  )
}

export default App

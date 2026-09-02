
import './App.css'
import Rotas from './paginas/Rotas'
import { BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    <>
      <h1>Minha aplicação</h1>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </>
  )
}

export default App

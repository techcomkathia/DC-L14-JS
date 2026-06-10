import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link } from 'react-router-dom'
import Rotas from './rotas/Rotas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/livros/1">Livros</Link>
        <Link to="/cadastroUsuario">Cadastro</Link>
        <Rotas/>
      </BrowserRouter>
        
    </>
  )
}

export default App

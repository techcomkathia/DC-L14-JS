import { useState } from 'react'

//para prover as rotas da aplicação, usaremos o componente BrowserRouter do react-router-dom, que permite o roteamento das rotas da aplicação atravé de URLs e renderização dos compontes das páginas. 
import { BrowserRouter } from 'react-router-dom'

//importe o componente Rotas do arquivo Rotas.jsx
import Rotas from './rotas/Rotas' 

import './App.css'
import Header from './componentes/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Aula 27</h1>
      <p>Conteúdo fora do roteamento. Permanece sempre visível e inalterado independente das rotas</p>
      

      <BrowserRouter>
        <Header />
        <Rotas />
      </BrowserRouter>
    </>
  )
}

export default App

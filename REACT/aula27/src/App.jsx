import { useState } from 'react'

//para prover as rotas da aplicação, usaremos o componente BrowserRouter do react-router-dom, que permite o roteamento das rotas da aplicação atravé de URLs e renderização dos compontes das páginas. 
import { BrowserRouter } from 'react-router-dom'

//importe o componente Rotas do arquivo Rotas.jsx
import Rotas from './rotas/Rotas' 

import './App.css'
import Header from './componentes/Header'
import Layout from './componentes/Layout'
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div style={{display:'none'}}>
        <h1>Aula 27</h1>
        <p>Conteúdo fora do roteamento. Permanece sempre visível e inalterado independente das rotas</p>
      </div>
      

      <BrowserRouter>
        <Layout>
          <Rotas />
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App

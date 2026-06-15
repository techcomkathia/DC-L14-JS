import { useState } from 'react'
import './App.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Layout from './componentes/Layout'
import { BrowserRouter, Link} from 'react-router-dom'
import Rotas from './rotas/Rotas'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    //   <h1>Aula 28</h1>
    //   <BrowserRouter>
    //     <Link to="/">Home</Link>
    //     <Link to="/produtos">Produtos</Link>
    //     <Rotas/>
    //   </BrowserRouter>
    // </>

    <BrowserRouter>
      <Layout>
        <Rotas/>
      </Layout>
    </BrowserRouter>
  )
}

export default App

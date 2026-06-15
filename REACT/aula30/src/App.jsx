
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Layout from './componentes/Layout'
import Rotas from './rotas/Rotas'

function App() {


  return (
    <>

      <BrowserRouter>
        <Layout>
          <Rotas />
        </Layout>
      </BrowserRouter>
      
    </>
  )
}

export default App

import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Contagem from './componentes/Contagem'
import ComponenteProps from './componentes/ComponenteProps'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Aula 25</h1>
      <Contagem />
      <ComponenteProps url={'https://placehold.co/600x400'} alt={'exemplo imagem'} texto={'Exemplo de texto para a props do componente'}/>
    </>
  )
}

export default App

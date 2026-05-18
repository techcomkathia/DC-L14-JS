import { useState } from 'react'
import './App.css'
import MeuPrimeiroComponente from './componentes/MeuPrimeiroComponente'
import InfoUsuario from './componentes/InfoUsuario'
import Soma from './componentes/Soma'
import ComponenteComProps from './componentes/ComponenteComProps'

import { ExemploComponenteComPropsDesestruturado } from './componentes/ComponenteComProps'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MeuPrimeiroComponente/>
      <h1>Outro Título</h1>

      <div id='Atividade1'>
        <InfoUsuario/>
        <InfoUsuario/>
      </div>

      <Soma/>
      <Soma/>

      <ComponenteComProps titulo="Primeiro Componente" subtitulo="Subtítulo do primeiro componente" texto="Texto do primeiro componente em seu subtítulo"/>

      <ComponenteComProps titulo="Teste 2" subtitulo="Subtítulo do segundo componente" texto="Texto do segundo componente em seu subtítulo no segundo teste"/>

      <ExemploComponenteComPropsDesestruturado
       titulo="Teste 2" subtitulo="Subtítulo do segundo componente" texto="Texto do segundo componente em seu subtítulo no segundo teste"/>




    </>
  )
}

export default App

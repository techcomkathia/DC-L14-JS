import { useState } from 'react'
import './App.css'
import logo from './assets/react.svg'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)
  let x = 0
  function adicionar(){
    x++
    console.log(x)
  }

  const frutas = ['Banana', 'Maçã', 'Laranja', 'Abacaxi', 'Uva', 'Melancia']

  const [cor, setCor] = useState('')

  function mudarCor(){
    if(cor == ''){
      setCor('text-danger')
    }
    else{
      setCor('')
    }
  }

  let num= 10
  return (
    <>
      <h1>Aula 26</h1>

      <div id='revisao'  className='d-none'>

        <h1>Controle de estado</h1>

        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Adicionar</button>
        <button onClick={() => setCount(count - 1)}>Subtrair</button>

        <h1>{x}</h1>
        <button onClick={adicionar} className='bg-danger'>Adicionar</button>  

        <h1>Renderização de listas</h1>

        <ul>
          {frutas.map((fruta, index) => (
            <li key={index}>{fruta}</li>
          ))}
        </ul>

        <h1>Renderização condicional</h1>

        {num%2 == 0 ? <h1> O número da variável num é par</h1> : <h1> O número da variável num é impar</h1>}

        {/* quando o número for maior que 100 */}
        {num>100 && <h1> O número da variável num é maior que 100</h1>}

        {/* quando o número for negativo */}
        {num<0 && <h1> O número da variável num é negativo</h1>}

      </div>

      <div>
        <h1>Eventos no React</h1>
        <h2 className={cor}>Exemplo de texto</h2>
        {/* função sem parâmetros para o evento */}
        <button onClick={mudarCor}>Mudar cor do texto</button>
        {/* função com parâmetros para o evento */}
        <button onClick={() => setCor('text-success')}>Mudar cor do texto para verde</button>
        <img src={logo} alt="logo" />
        <p>Crie um botão para trocar a imagem de uma lâmpada com os textos : acender e apagar. A imagem inicial da lâmpada deverá ser a lâmpada apagada.</p>
      </div>
    </>
  )
}

export default App

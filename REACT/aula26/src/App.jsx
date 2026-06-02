import { useState } from 'react'
import './App.css'
import logo from './assets/react.svg'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Atividade1 from './componentes/Atividade1'
import Atividade2 from './componentes/Atividade2'
import Atividade3 from './componentes/Atividade3'

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

  const[texto, setTexto] = useState('exemplo valor da variável')
  const[num, setNum] = useState(0)
  const[obj, setObj] = useState({})

  return (
    <>
      <h1>Aula 26</h1>

      <div>
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

      <div className='d-none'>
        <h1>Eventos no React</h1>
        <h2 className={cor}>Exemplo de texto</h2>
        {/* função sem parâmetros para o evento */}
        <button onClick={mudarCor}>Mudar cor do texto</button>
        {/* função com parâmetros para o evento */}
        <button onClick={() => setCor('text-success')}>Mudar cor do texto para verde</button>
        <img src={logo} alt="logo" />
        <p>Crie um botão para trocar a imagem de uma lâmpada com os textos : acender e apagar. A imagem inicial da lâmpada deverá ser a lâmpada apagada.
        Extra: pense como mudar a cor do bg do site: quando desligada o bg deve ser preto e quando ligada o bg deve ser branco. 
        </p>
      </div>

      <div id='atividade1' className='d-none'>
        <Atividade1 />
      </div>

      <div id='exemplo' className='d-none'>
          <label htmlFor="exemplo">Digite um texto:</label>
          <input type="text" placeholder='digite aqui um texto' id="exemplo" value={texto} onChange={(evento)=> setTexto(evento.target.value)}/>
          <h1>{texto}</h1>

          <p>Crie um campo de input do type password e um botão conferir resultado. Quando a senha correta for digitada, exiba o texto “senha correta, você passou no teste” O valor da senha correta será 'olaMundo123'</p>
      </div>
      <div id='atividade2'  className='d-none'>
        <Atividade2 senhaCorreta='olaMundo123'/>
      </div>

      <div id='exemploForm' className='d-none'>
        <form action=""
          onSubmit={(e)=>{
            //remoção do comportamento padrão do formulários
            e.preventDefault()
            if(texto.length === 0 || num <= 0){
              alert('preencha os campos corretamente')
              return
            }
            setObj({texto: texto, num: num})
            setTexto('')
            setNum(0)        
          }}
          >
            <input type="text"
            placeholder='digite aqui um texto'
            onChange={(e)=> setTexto(e.target.value)}
            value={texto}
            />
            <input type="number" 
            placeholder='digite aqui um número'
            onChange={(e)=> setNum(e.target.value)}
            value={num}
            />
            <input type="submit" value="enviar o formulário" />

            {(obj.texto && obj.num) && <p>numero do objeto: {obj.num} e texto do objeto: {obj.texto}</p>}


            <p>Atividade: Crie um formulário para cadastro do produto: nome, preço, cor e descrição. A cor e o nome serão usados para compor a imagem com a seguinte regra : https://placehold.co/200x200/corProduto/ffffff?text=nomeProduto.
            Exemplo: https://placehold.co/200x200/ff0000/ffffff?text=camisa. Após o cadastro do produto, renderize-o na tela usando o card do react bootstrap. Importante: crie o componente CardProduto.jsx que receba as props : url, nome, descricao, preco e exiba essas informações após o cadastro, no componente CadastroPorduto OU Atividade3.</p>
            {/* https://react-bootstrap.netlify.app/docs/components/cards */}
        </form>
      </div>
      </div>

      <div id='atividade3'>
        <Atividade3 />
      </div>

      

      

      
    </>
  )
}


export default App

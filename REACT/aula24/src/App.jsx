import { useState } from 'react'
import './App.css'
import CardProduto from './componentes/CardProduto'
import Tabuada from './componentes/Tabuada'
import RenderizacaoLista from './componentes/RenderizacaoLista'
import ListagemProduto from './componentes/ListagemProduto'
import InputTeste from './componentes/InputTeste'

function App() {
  let x = 1
  const [y, setY] = useState(1)

  function incrementar() {
    x++
    console.log(x)
  }

  const produtos = [
    { nome:'produto 1', preco:10.00, descricao:'descricao 1', promocao:true, desconto:10, imagem:'https://placehold.co/100'},
    { nome:'produto 2', preco:20.00, descricao:'descricao 2', promocao:false, desconto:0, imagem:'https://placehold.co/100'},
    { nome:'produto 3', preco:30.00, descricao:'descricao 3', promocao:false, desconto:0, imagem:'https://placehold.co/100'}
  ]

  return (
    <>
      <h1 className='titulo' >Aula 24</h1>
      <div>
        <div id='atividade3Aula23' className='ocultar'>
          <CardProduto imagem='https://placehold.co/400' nome='Produto 1' preco={10.00} descricao='Descrição do produto 1' promocao={true} desconto={10} />

          <CardProduto imagem='https://placehold.co/400' nome='Produto 2' preco='20.00' descricao='Descrição do produto 2' />
        </div>
      
        <div id='exemplos' className='ocultar'>
          <h2>Valor de x: {x}</h2>
          <button onClick={incrementar}>Incrementar</button>
          <h2>Valor de y: {y}</h2>
          <button onClick={() => setY(y + 10)}>Incrementar 10</button>
        </div>

        <div id='atividade1' className='ocultar'>
          <Tabuada />
        </div>

        <div id='exemplo2' className='ocultar'>
          <RenderizacaoLista lista={['item 1', 'item 2', 'item 3', 'item 4', 'item 5']}/>
        </div>

        <div id='atividade2' className='ocultar'>
        <ListagemProduto arrayProdutos={produtos} categoria='Exemplo de produtos CATEGORIA 1'/>
      </div>
      </div>

      <InputTeste></InputTeste>

      
    </>
  )
}

export default App

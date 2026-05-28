import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Contagem from './componentes/Contagem'
import ComponenteProps from './componentes/ComponenteProps'
import CardProduto from './componentes/CardProduto'
import ListagemProdutos from './componentes/ListagemProdutos'
import RenderizacaoCondicional from './componentes/RenderizacaoCondicional'
import { RederizacaoDiferentes } from './componentes/RenderizacaoCondicional'

function App() {
  const [count, setCount] = useState(0)
  const [produtos, setProdutos] = useState([
  {
    id: 1,
    name: "Notebook Gamer",
    price: 4500,
    image: "https://placehold.co/300x200?text=Notebook",
    description: "Notebook potente para jogos e tarefas exigentes."
  },
  {
    id: 2,
    name: "Mouse RGB",
    price: 150,
    image: "https://placehold.co/300x200?text=Mouse",
    description: "Mouse de qualidade para jogos e tarefas exigentes."
  },
  {
    id: 3,
    name: "Teclado Mecânico",
    price: 350,
    image: "https://placehold.co/300x200?text=Teclado",
    description: "Teclado de qualidade para jogos e tarefas exigentes."
  },
  {
    id: 4,
    name: "Monitor Ultrawide",
    price: 1800,
    image: "https://placehold.co/300x200?text=Monitor",
    description: "Monitor ultrawide para imersão total em jogos e produtividade."
  }])

  let frutas = ['banana', 'maçã', 'laranja', 'uva', 'abacaxi']


  return (
    <>
      <h1>Aula 25</h1>

      <div className='d-none'>
        <Contagem />
        <ComponenteProps 
        url={'https://placehold.co/600x400'} 
        alt={'exemplo imagem'} 
        texto={'Exemplo de texto para a props do componente'}/>
      </div>

      <div id='atividade1' className='d-none'>
        <CardProduto url={produtos[0].image} nome={produtos[0].name} descricao={produtos[0].description} preco={produtos[0].price}/>
      </div>

      <div id='lista' className='d-none'>
        <h2>Lista de Frutas</h2>
        <ul>
          {
            frutas.map((fruta, index) => {
              return <li key={index}>{fruta}</li>
            })
          }
        </ul>
      </div>

      <div id='atividade2' >
        <ListagemProdutos titulo={'Produtos em Promocao'} listaProdutos={produtos} promocao={true}/>

        <ListagemProdutos titulo={'Produtos Não Promocionais'} listaProdutos={produtos} />

        <ListagemProdutos titulo={'Lista Vazia'} listaProdutos={[]} />
      </div>

      <div id='atividade3' className='d-none'>
        <RenderizacaoCondicional cor={'vermelho'}/>
      <RenderizacaoCondicional cor={'cleitinho'}/>
      <RederizacaoDiferentes itens={frutas}/>
      <RederizacaoDiferentes itens={[]}/>
      <RederizacaoDiferentes />
      </div>
    </>
  )
}

export default App

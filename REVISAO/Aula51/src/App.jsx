
import './App.css'


import Rotas from './rotas/rotas';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext, useState} from 'react'; //PERMITE USAR O CONTEXTO DENTRO DE UM COMPONENTE
import { ContextoExemplo } from './contexto/contextoExemplo'; //objeto de contexto

function App() {


  // crie um componente que renderize os livros da biblioteca mas permita que o usuario pesquise os livros apartir do desconto. Um campo de input numérico para pesquisar o desconto deve ser incluido de forma a permitir a filtragem de livros com um desconto igual ou superior ao valor digitado.
  //Caso não seja encontrado nenhum livro com o desconto solicitado, uma mensagem para o usuário deve ser exibida.
  const livros = [
    { id: 1, titulo: "Harry Potter e a Pedra Filosofal", preco: 20, desconto: 0 },
    { id: 2, titulo: "Senhor dos Aneis - A Sociedade do Anel", preco: 30, desconto: 50 },
    { id: 3, titulo: "O Senhor dos Aneis - As Duas Torres", preco: 40, desconto: 20 },
    { id: 4, titulo: "O Senhor dos Aneis - O Retorno do Rei", preco: 50, desconto: 30 },
    { id: 5, titulo: "O Senhor dos Aneis - A Sociedade do Anel", preco: 60, desconto: 0 },
    { id: 6, titulo: "O Senhor dos Aneis - As Duas Torres", preco: 70, desconto: 60 },
  ];

  const {info, setInfo} = useContext(ContextoExemplo);
  const [novoNumero, setNovoNumero] = useState(0);


  return (

    

    <>
    <h1>Aula 51</h1>
    <p>Elementos definidos fora do roteamento serão renderizados em todas as rotas da aplicação</p>
    <p>Fora do BrowserRouter podemos definir os elementos que não dependem da navegação. Ex: banners de publicidade externa</p>

    <div>
      {info.map((item) => (<p>{item}</p>))}
    </div>

    <input type="number" onChange={(e) => setNovoNumero(e.target.value)} placeholder='Digite um numero' value={novoNumero} />

    <button onClick={() => setInfo([...info, novoNumero])}>Adicionar</button>

    
    
    <BrowserRouter>
    <p>Devemos definir todos os elementos que dependem da navegacao. Exemplo: menu de navegacao, links promocionais internos etc</p>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/atividade1">Atividade 1</Link>
        <Link to="/atividade2">Atividade 2</Link>
    </nav>
      <Rotas />
    </BrowserRouter>
    
    </>




  )
}

export default App

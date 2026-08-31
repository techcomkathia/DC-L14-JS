
import './App.css'
import RenderizaMudancaEstado from './componentes/RenderizaMudancaEstado'
import RenderizacaoLista from './componentes/RenderizacaoLista'
import Atividade1 from './componentes/Atividade1';
import { CampoPesquisa } from './componentes/Formularios';

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


  return (
    <>
      <section id="center">
        <RenderizaMudancaEstado />
        <RenderizacaoLista lista = {[
          {id: 1, nome: 'joao'},
          {id: 2, nome: 'maria'},
          {id: 3, nome: 'pedro'}
        ]}
          />
        
      </section>

      <section id="atividade1" >
      <Atividade1 listaLivros={livros} />
      </section>

      <section id="atividade2" >
      <CampoPesquisa />
      </section>
    </>
  )
}

export default App

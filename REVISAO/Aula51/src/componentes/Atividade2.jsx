  // crie um componente que renderize os livros da biblioteca mas permita que o usuario pesquise os livros apartir do desconto. Um campo de input numérico para pesquisar o desconto deve ser incluido de forma a permitir a filtragem de livros com um desconto igual ou superior ao valor digitado.
  //Caso não seja encontrado nenhum livro com o desconto solicitado, uma mensagem para o usuário deve ser exibida.

  import { useState } from "react";
  import Atividade1 from "./Atividade1";


  function Atividade2( {listLivros} ) {
    const [desconto, setDesconto] = useState(0);
    const [listaFiltrada, setListaFiltrada] = useState(listLivros);

    function filtrarLivros( valorDesconto) {
      if(valorDesconto == 0){
        setListaFiltrada(listLivros);
      }
      else if (valorDesconto > 0) {
        const novaLista = listLivros.filter((livro) => livro.desconto >= valorDesconto);
        setListaFiltrada(novaLista);
      }
      else {
        setListaFiltrada(listLivros);
      }
    }

    return (
      <>
        <h1>Atividade 2</h1>

        <input type="number" value={desconto} onChange={(e) => setDesconto(e.target.value)} />
        <button onClick={() => filtrarLivros(desconto)}>Filtrar</button>
        {/* caso não exista nenhum livro com o desconto solicitado, uma mensagem para o usuário deve ser exibida */}

        {listaFiltrada.length > 0 ? (
          <Atividade1 listaLivros={listaFiltrada} />
        ) : (
          <p>Nenhum livro encontrado com o desconto solicitado.</p>
        )}
       
      </>
    );
  }

  export default Atividade2
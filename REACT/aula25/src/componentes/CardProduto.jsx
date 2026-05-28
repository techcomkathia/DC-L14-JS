/* --------------------- ATIVIDADE 1 ---------------------

1. Crie um componente que receba props : url, nome, descricao, preco e exiba essas informações em um card do react bootstrap. https://react-bootstrap.netlify.app/docs/components/cards e renderize esse componente usando o primeiro produto do array products */

/* DICAS: crie o projeto usando Vite, instale o react-bootstrap e o bootstrap, importe o css do bootstrap no index.html ( via arquivo ou com o cdn) ou no App.jsx (import '../node_modules/bootstrap/dist/css/bootstrap.min.css'), crie um componente chamado CardProduto para exibir as props usando os componentes do react-bootstrap. */

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProduto({url, nome, descricao, preco, promocao = false}) {
  return (
    <Card style={{ width: '18rem' }} className={promocao ? "border-danger" : "border-primary"}>
      <Card.Img variant="top" src={url} alt={nome} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
            {descricao} - R$ {preco}
        </Card.Text>
        <Button variant="primary">Ver detalhes</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduto;
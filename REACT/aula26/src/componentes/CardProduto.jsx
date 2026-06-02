import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CardProduto({url, nome, descricao, preco}) {
  return (
    <Card style={{ width: '18rem' }} >
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
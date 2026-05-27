import Button from 'react-bootstrap/Button';

import { useState } from 'react'

//usar o botão do bootstrap para incrementar o contatador ou decrementá-lo

export default function Contagem() {
    const [numero, setNumero] = useState(0)

    return(
        <>
            <h1>{numero}</h1>
            <Button variant="primary" onClick={() => setNumero(numero + 1)}>+ 1</Button>{' '}
            <Button variant="danger" onClick={() => setNumero(numero - 1)}>- 1</Button>{' '}
       
        </>
    )

}
// encapsula estrutura lógica e pode incluir também as regras de estilo.

//importar recursos externos : hooks, componentes, bibliotecas, folhas de estilo etc.
import { useState } from 'react'

//criar uma variável que armazena um estilo de css

const estilo1={
    color: 'blue',
    fontSize: '32px',
    border: '1px solid blue'
}

const estilo2={
    color: 'red',
    fontSize: '32px',
    border: '1px solid red'
}

function RenderizaMudancaEstado() {
    const [numero, setNumero] = useState(0)

    return(
        <>
            <h1 style={numero % 2 === 0 ? estilo1 : estilo2} >{numero}</h1>
            <button onClick={() => setNumero(numero + 1)}>+ 1</button>{' '}
            <button onClick={() => setNumero(numero - 1)}>- 1</button>{' '}

            {/* renderização condicional */}
            {numero % 2 === 0 && <h2 style={estilo1}>Par</h2>}
            {numero % 2 === 1 && <h2 style={estilo2}>Impar</h2>}
        </>


    )


}

export default RenderizaMudancaEstado
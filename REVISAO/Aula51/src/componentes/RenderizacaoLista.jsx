
function RenderizacaoLista({ lista }) {
    //a lista deverá ser um array de objetos com as seguintes propriedades: id, nome
    return (
        <>
            <h1>Renderização de Listas</h1>
            <ul>
                { lista &&  lista.map((item) => {
                    return (
                        <li key={item.id}>{item.nome}</li>
                    )
                })}

                {!lista && <li>Lista vazia</li>}

            </ul>
        </>
    )
}

export default RenderizacaoLista
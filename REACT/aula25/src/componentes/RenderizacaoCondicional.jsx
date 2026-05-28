// operador ternário equivale a if/else (usado quando temos apenas duas condições)

// testar se a cor do texto deve ser vermelha ou azul
// se a props cor for igual a "vermelho", o texto deve receber a classe "text-danger", caso contrário, deve receber a classe "text-primary"

// if (cor=='vermelho') {
//     classe = "text-danger"
// } else {
//     classe = "text-primary"
// }

//(cor == 'vermelho') ? 'text-danger' : 'text-primary'

export default function RenderizacaoCondicional({ cor }) {
    return (
        <h2 className={(cor == 'vermelho') ? 'text-danger' : 'text-primary'}>Texto padrão do componente</h2>
    )
}

/*caso tenha um array de strings mostrar todas as strings em uma lista (ul > li)
//caso esse array esteja vazio, mostrar a mensagem "Nenhum item encontrado"
//caso o array não tenha sido passado como props, mostrar a mensagem "Nenhum item recebido"

//operadores && (AND) e || (OR)

(true) && (<h1>Teste</h1>) //retorna o elemento JSX, SERÁ RENDERIZADO NA TELA
(false) && (<h1>Teste</h1>) //retorna false, NÃO SERÁ RENDERIZADO NA TELA

(true) || (<h1>Teste</h1>) //retorna o elemento JSX, SERÁ RENDERIZADO NA TELA
(false) || (<h1>Teste</h1>) //retorna o elemento JSX, SERÁ RENDERIZADO NA TELA
*/

export function RederizacaoDiferentes({ itens = [] }){

    return(
        <div>
            {(itens.length> 0)&& (
                <ul>
                    {itens.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}

            {(itens.length === 0) && <p>Nenhum item encontrado</p>}

            {(itens === undefined) && <p>Nenhum item recebido</p>}

        </div>
    )

}
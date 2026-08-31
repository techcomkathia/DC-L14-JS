//Você recebeu um array de livros que devem ser renderizados de acordo com algumas condições:
//produtos com desconto devem ter o preço real cortado por um traço e o preço com desconto mostrado em negrito
//produtos sem desconto devem ter o preço real mostrado em negrito
//produtos com o desconto igual ou maior a 50% devem ter uma borda vermelha
//produtos com o desconto menor que 50% devem ter uma borda azul
//produtos sem desconto devem ter uma borda preta

//o componente deve receber o array de livros como propriedade e retornar uma section com os cards dos livros
//dica: use o map para percorrer o array e retornar um array de cards de produtos. Cada card deverá ter o atributo key, igual ao index do produto no array

import { useState } from 'react'

function Atividade1({listaLivros}) {
    const desconto50Mais = {
        border: '3px solid red'
    }

    const desconto50Menos = {
        border: '3px solid blue'
    }

    const semDesconto = {
        border: '3px solid black'
    }

    return (
        <>
            <h1>Atividade 1</h1>
            <section>
                {
                    listaLivros.map(livro => (
                        <div key={livro.id} style={livro.desconto >= 50 ? desconto50Mais : livro.desconto > 0 ? desconto50Menos : semDesconto} >
                            <h2>{livro.titulo}</h2>
                            {livro.desconto > 0 && <div>
                                <p style={{ textDecoration: 'line-through' }}>{livro.preco}</p> 
                                <p style={{ fontWeight: 'bold' }}>{livro.preco - (livro.preco * (livro.desconto / 100))}
                                <p>{livro.desconto}% de desconto</p>
                                </p>
                            </div>}
                            {livro.desconto == 0 && <p style={{ fontWeight: 'bold' }}>{livro.preco}</p>}
                            
                        </div>
                    ))
                }
            </section>
        </>
    )

}

export default Atividade1
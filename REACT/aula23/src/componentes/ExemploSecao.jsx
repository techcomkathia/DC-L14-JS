import './ExemploSecao.css' //importando o css do componente

//para impedir a propagação do css para as tags filhas e outros elementos/ componentes no App, usa-se o atributo className e damos preferencia a estilização por classes quando usamos um arquivo externo de css


export default function ExemploSecao(props){ 
    return (
        <section className='secao'>
            <h1>{props.titulo}</h1>
            {props.children}
        </section>
    )
}

//props.children contém o conteúdo de todas as tags filhas que podem ser passadas dentro da tag 
/*
<ExemploSecao>
 tag filho 1
 tag filho 2
 tag filho 3

</ExemploSecao>*/


//operador ternario : condição ? se verdadeiro : se falso

//caso o valor para props cor seja azul, será adicionada as classes azul e secao, usando através do operador ternario, caso contrario apenas a classe 'secao' será adicionada


export  function ExemploSecao2(props){ 
    return (
        <section className={props.cor === 'azul' ? 'secao azul' : 'secao'}>
            <h1>{props.titulo}</h1>
            {props.children}
        </section>
    )
}

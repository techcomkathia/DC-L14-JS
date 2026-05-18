export default function ComponenteComProps(props){
    //o objeto props contém todas as propriedades passadas para o componente na tag <ComponenteComProps propriedade="valor" propriedade2="valor2"/>
    return(
        <div>
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
            <p>{props.texto}</p>
        </div>
    )
}

export function ExemploComponenteComPropsDesestruturado ({titulo, subtitulo, texto}){
    //o objeto props contém todas as propriedades passadas para o componente na tag <ComponenteComProps propriedade="valor" propriedade2="valor2"/>
    return(
        <div>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            <p>{texto}</p>
        </div>
    )
}


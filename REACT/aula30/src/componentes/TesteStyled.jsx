import {styled} from "styled-components";

export const TituloSyled = styled.h2`
    color: red;
    font-size: 50px;
    background-color: pink;
    margin:10px;
    padding:20px;
    border:2px solid pink;

    &:hover{
        background-color: #c3727e;

        h2{
            color:blue;
        }
    }
`
// utilização de variantes de css 
// é possível utilizar as variáveis passadas para o styled component
export const ParagrafoStyled = styled.p`
    color:${props => props.color === 'azul' ? 'blue' : props.color };
    font-size:${props =>{
        switch(props.tamanho){
            case 'pequeno':
                return '10px';
            case 'medio':
                return '20px';
            case 'grande':
                return '30px';
            default:
                return '15px';
        }
    }};
`
export const ParagrafoDetalheStyled = styled(ParagrafoStyled)`
    background-color: yellow;
    font-weight: bold;
`

export function TesteSyled({texto}){
    return(
        <div>
            <TituloSyled>Exemplo de Título Estilizado</TituloSyled>
            <p>{texto}</p>
            <ParagrafoStyled tamanho='grande' color='#f00'>Exemplo de Parágrafo Estilizado</ParagrafoStyled>
            <ParagrafoStyled tamanho='pequeno' color='green'>Exemplo de Parágrafo Estilizado</ParagrafoStyled>

            <ParagrafoDetalheStyled tamanho='grande' color='green'>Intervalo :) Retornaremos de 20:25</ParagrafoDetalheStyled>
        </div>
    )
}
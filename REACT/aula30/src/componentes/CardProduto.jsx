import {styled} from "styled-components";
import { Link } from "react-router-dom";

export const  DivStyled = styled.div`
    padding: 16px;
    border: 10px solid black;
    border-radius: 10px;
    background-color: white;
    color: black;
    width: 400px;

    h1{
        color:gray;
        /* espaço entre linhas */
        line-height: 1.5;
        margin: 10px 0px;
    }

    img{
        border-radius: 10px;
    }
`

export const H2Styled = styled.h2`
    padding: 4px 10px;
    border-radius: 20px;
    background-color: black;
    color: white;
`

export const ButtonStyled = styled.button`
    padding: 12px 20px;
    border-radius: 8px;
    background-color: black;
    color: white;
`

export default function CardProduto(props) {
    return (
        <DivStyled>
            <h1>{props.nome}</h1>
            <img src={props.img} alt={props.nome}/>
            <h3>{props.autor}</h3>
            <H2Styled>{props.categoria}</H2Styled>
            <h3>{props.preco}</h3>
            <Link to={`/livros/${props.id}`}>
                <ButtonStyled>Ver Detalhes</ButtonStyled>            
            </Link>
        </DivStyled>
    )
}
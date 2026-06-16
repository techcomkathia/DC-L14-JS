import {styled} from "styled-components";
import { Link } from "react-router-dom";

export const  DivStyled = styled.div`
    padding: 16px;
    border: ${props=>props.destaque ? '3pxm solid yellow' : '10 solid black'};
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
    background-color: ${(props) => { 
        switch (props.categoria) {
            case "Programação": 
                return "blue";
            case "Backend": 
                return "green"; 
            case "Data Science": 
                return "purple"; 
            case "Business Intelligence": 
                return "orange"; 
            case "Arquitetura": 
                return "red"; 
            default: 
                return "black"; 
            }}};
    color: white;
`

export const ButtonStyled = styled.button`
    padding: 12px 20px;
    border-radius: 8px;
    background-color: ${(props)=>{ 
        switch(props.variante){
              case "detalhe":
                 return "#0d3b66"; 
            case "comprar": 
                return "green";
            default: 
                return "black";
        }
      
    }};
       border: ${props=> 
        props.destaque ? '2px solid yellow' : '2px solid black'
    };
    color: white;
`

export const H3Styled = styled.h3`
    color: ${(props)=> {(props.desconto > 10 ? 'green' : 'black')} };
`

export default function CardProduto(props) { 
    return ( 
    <DivStyled destaque={props.nota >= 4.8}>
         {props.nota >= 4.8 && <h3>⭐ Destaque</h3>} 
         <h1>{props.nome}</h1> 
         <img src={props.img} alt={props.nome} /> 
         <h3>{props.autor}</h3> 
         <H2Styled categoria={props.categoria}> {props.categoria} </H2Styled> 
         <H3Styled desconto={props.desconto}> R$ {props.preco} </H3Styled> 
         <Link to={`/livros/${props.id}`}> 
         <ButtonStyled variante="detalhe"> Ver Detalhes </ButtonStyled> 
         </Link> <ButtonStyled variante="comprar"> Comprar </ButtonStyled> 
    </DivStyled> ); }
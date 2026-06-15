import {styled} from 'styled-components'

export const DivStyled = styled.div`
    background-color: #dbbfc3;
    margin:10px;
    padding:20px;
    border:2px solid pink;
    
    &:hover{
        background-color: #c3727e;
    }

    h2{
        color:blue;
    }
    
`

export const ParagrafoStyled = styled.p`
    color: red;
    font-size: 20px;
    margin:10px;
    padding:20px;
`

export function ExemploStyled({titulo,texto1, texto2}){ 
    return (
        <DivStyled>
            <h2>{titulo}</h2>
            <ParagrafoStyled>{texto1}</ParagrafoStyled>  
            <ParagrafoStyled>{texto2}</ParagrafoStyled>          
        </DivStyled>
    )
}
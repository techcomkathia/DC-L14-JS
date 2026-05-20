/*  -------------------Atividade 1 --------------------
Crie um componente chamado Tabuada. Esse componente deve conter 9 botões que ao serem clicados devem exibir a tabuada do respectivo botão. O valor inicial da tabuada deve ser 2. Ao clicar no botão 9 a tabuada deve ser exibada a tabuada do 9.

botões 

Tabuada

numero x 1 = resultado
numero x 2 = resultado
numero x 3 = resultado
numero x 4 = resultado
numero x 5 = resultado
numero x 6 = resultado
numero x 7 = resultado
numero x 8 = resultado
numero x 9 = resultado  */


import { useState } from "react";

export default function Tabuada() {
    const [tabuada, setTabuada] = useState(2);

    return(
        <>

        <button onClick={() => setTabuada(1)}>1</button>
        <button onClick={() => setTabuada(2)}>2</button>
        <button onClick={() => setTabuada(3)}>3</button>
        <button onClick={() => setTabuada(4)}>4</button>
        <button onClick={() => setTabuada(5)}>5</button>
        <button onClick={() => setTabuada(6)}>6</button>
        <button onClick={() => setTabuada(7)}>7</button>
        <button onClick={() => setTabuada(8)}>8</button>
        <button onClick={() => setTabuada(9)}>9</button>

        <div>
            <h1>Tabuada de {tabuada}</h1>
            <ul>
                <li>{tabuada} x 1 = {tabuada * 1}</li>
                <li>{tabuada} x 2 = {tabuada * 2}</li>
                <li>{tabuada} x 3 = {tabuada * 3}</li>
                <li>{tabuada} x 4 = {tabuada * 4}</li>
                <li>{tabuada} x 5 = {tabuada * 5}</li>
                <li>{tabuada} x 6 = {tabuada * 6}</li>
                <li>{tabuada} x 7 = {tabuada * 7}</li>
                <li>{tabuada} x 8 = {tabuada * 8}</li>
                <li>{tabuada} x 9 = {tabuada * 9}</li>
            </ul>
        </div>     

        </>
    )



}
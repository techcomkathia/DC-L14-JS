//Esse componente permite que o usuário digite um texto e ele seja exibido na tela mediante a digitação

import { useState } from "react";

export default function InputTeste() {
    const [texto, setTexto] = useState("");
    return (
        <div>
            <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} />
            <p>{texto}</p>
        </div>
    )
}

/*Crie um componente que permita que o usuário digite 3 campos: nome, email e cargo. Os campos devem ser exibidos na tela quando o usuário clicar no botão "Cadastrar Funcionário".
Dicas: Use o hook useState para armazenar os valores dos campos. Serão necessários 4 variáveis de estado controlado: nome, email, cargo e objFuncionario.

//Para nome, email e cargo usaremos inputs do type text e email, com o evento onChange
//Para o botão usaremos o evento onClick e irá atualizar o estado do objFuncionario com os valores digitados nos inputs
*/
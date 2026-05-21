/*------------Atividade3 ------------

Crie um componente que permita que o usuário digite 3 campos: nome, email e cargo. Os campos devem ser exibidos na tela quando o usuário clicar no botão "Cadastrar Funcionário".
Dicas: Use o hook useState para armazenar os valores dos campos. Serão necessários 4 variáveis de estado controlado: nome, email, cargo e objFuncionario.

//Para nome, email e cargo usaremos inputs do type text e email, com o evento onChange
//Para o botão usaremos o evento onClick e irá atualizar o estado do objFuncionario com os valores digitados nos inputs
*/

import { useState } from "react";

export default function CadastroUsuario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cargo, setCargo] = useState("");
    const [objFuncionario, setObjFuncionario] = useState({});   

    function cadastrarFuncionario() {
        if(nome ==='' || email==='' || cargo===''){
            alert('Preencha todos os campos')
            return
        }
        setObjFuncionario({nome: nome, email: email, cargo: cargo})

        //limpar os inputs
        setNome('')
        setEmail('')
        setCargo('')
    }

    return(
        <div>
            <div>
                <input type="text" 
                    placeholder="Digite seu nome" 
                    value={nome} 
                    onChange={(e)=> setNome(e.target.value)}
                />
                <input type="email" 
                    placeholder="Digite seu email" 
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <input type="text" 
                placeholder="Digite seu cargo"  
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                />
                
                <button onClick={cadastrarFuncionario}>Cadastrar Funcionario</button>
            </div>

            {objFuncionario && 
                <div>
                    <p>Nome: {objFuncionario.nome}</p>
                    <p>Email: {objFuncionario.email}</p>
                    <p>Cargo: {objFuncionario.cargo}</p>
                </div>
            }


        </div>
    )
}
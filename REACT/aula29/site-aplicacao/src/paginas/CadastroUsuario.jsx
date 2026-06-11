import { useContext } from "react";
import {UsuariosContexto} from '../contexto/UsuariosContexto.jsx'




export default function CadastroUsuario() {

    const {usuarios} = useContext(UsuariosContexto)


    // crie um formulário com os campos de nome, email e senha, endereço com : logradouro, numero, complemento, bairro, cidade, estado e cep
    //ao fazer o submit do formulário, valide os campos e caso estiverem corretos, faça a execução da função postUsuario que deve ser compartilhada/consumida pelo contexto.
    // ao enviar o formulário, adicione o usuário ao array de usuários


    return (
        <div>
            <h1>Cadastro de Usuário</h1>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.nome}</li>
                ))}
            </ul>
        </div>
    );
}
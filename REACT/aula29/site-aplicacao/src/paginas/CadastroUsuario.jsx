import { useState, useEffect } from "react";
import {getUsuarios} from '../servicos/UsuarioServicos'


export default function CadastroUsuario() {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
         getUsuarios().
            then(setUsuarios)
    }, []) //apenas na montagem da página será executado o consumo da api para a atualização dos usuarios




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
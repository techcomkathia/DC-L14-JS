//Crie o contexto do usuário e proveja-o toda a aplicação.
//Importante: o valor inicial do contexto deverá ser o obtido pelo consumo da API.
//use o serviço getUsuarios para obter os usuários e armazenar-os no estado do contexto.

//Faça o teste do contexto na tela de cadastro de usuários.

/*Dicas: create context para criação no arquivo 
com o UsuariosContextoProvider use-o no arquivo main.jsx*/

import { useState, useEffect, createContext } from "react";
import {getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario} from '../servicos/UsuarioServicos'

export const UsuariosContexto = createContext()

export function UsuariosContextoProvider({children}) {
    const [usuarios, setUsuarios] = useState([])

    
    useEffect(() => {
         getUsuarios().
            then(setUsuarios)
    }, []) //apenas na montagem da página será executado o consumo da api para a atualização dos usuarios

    return (
        <UsuariosContexto.Provider value={{usuarios, postUsuario, putUsuario,getUsuario, deleteUsuario}}>
            {children}
        </UsuariosContexto.Provider>
    )
}

import { createContext } from "react";
import { useState } from "react";

export const UsuariosContexto = createContext();


export function UsuariosProvider({ children }){
    

const [usuarios, setUsuarios] = useState(['admin', 'user1', 'user2', 'user3'])

    return(

    <>
    <UsuariosContexto.Provider value={{usuarios, setUsuarios}}>
        {children}
    </UsuariosContexto.Provider>
    </>
    )
}
import { UsuariosContexto} from "../contexto/UsuariosContexto";
import { useContext } from "react";
import { useEffect } from "react";
export default function Home() {
    const {usuarios, setUsuarios, getUsuario} = useContext(UsuariosContexto)
    //atualização direta dos usuários


    useEffect(() => {
        getUsuario().then(setUsuarios)
    }, [])


    


    return (
        <div>
            <h1>Pagina Principal</h1>
            <p>Quantidade de usuários: {usuarios.length}</p>
            {usuarios.map((usuario) => (
                <div key={usuario.id}>
                    <p>{usuario.nome}</p>
                    
                </div>
            ))}
        </div>
    );
}
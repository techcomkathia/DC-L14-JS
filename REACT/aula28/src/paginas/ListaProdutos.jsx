import { useContext } from "react"
import {UsuariosContexto} from '../contextos/UsuariosContexto'


function ListaProdutos() {

    const {usuarios} = useContext(UsuariosContexto);
    return (
        <>
            <h1>LISTA DE PRODUTOS</h1>
            <p>Aqui vai a lista de produtos</p>

            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario}>{usuario}</li>
                ))}
            </ul>
        </>
    )
}

export default ListaProdutos
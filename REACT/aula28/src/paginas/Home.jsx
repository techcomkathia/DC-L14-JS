import { useEffect, useContext } from "react"
import { UsuariosContexto } from "../contextos/UsuariosContexto"

function Home() {

    function minhaFuncao() {
        console.log("Minha funcao FOI executada")
        alert("Minha funcao FOI executada")
    }

    const{usuarios, setUsuarios} = useContext(UsuariosContexto)

    useEffect(() => {
        //consumo da api para atualização dos usuarios
        fetch('https://fakestoreapi.com/users')
        .then((resp) => resp.json())
        .then((dados) => {
            //montar um array só com os nomes 
            const nomes = dados.map((usuario) => usuario.username)
            setUsuarios(nomes)
        })
        .catch((erro) => console.log(erro))
    }, [])



    return (
        <>
            <h1>Home</h1>
            <p>Página home do site, acessada na rota principal</p>

            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario}>{usuario}</li>
                ))}
            </ul>

            <button onClick={() => setUsuarios([...usuarios, 'user4'])}>Cadastrar</button>
        </>
    )
}

export default Home
import { useContext, useEffect } from "react"
import {UsuariosContexto} from '../contextos/UsuariosContexto'

import {ProdutosContexto} from '../contextos/ProdutosContexto'


function ListaProdutos() {

    // const {usuarios} = useContext(UsuariosContexto);
    const {produtos, setProdutos} = useContext(ProdutosContexto);

    //montagem da página utilizar o consumo da api fakestore para obter os produtos e atualizar o estado do contexto

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products') //promisse
        .then((resp) => resp.json()) //conversão para objeto
        .then((dados) => {
            //passando o array de produtos para o contexto
            setProdutos(dados)})
        .catch((erro) => console.log(erro))
    },[])



    return (
        <>
            <h1>LISTA DE PRODUTOS</h1>
            <p>Aqui vai a lista de produtos</p>

            {/* <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario}>{usuario}</li>
                ))}
            </ul> */}

            <ul>
                {produtos.map((produto) => (
                    <li key={produto.id}>{produto.title}</li>
                ))}
            </ul>


        </>
    )
}

export default ListaProdutos
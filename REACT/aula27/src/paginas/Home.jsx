import { useContext } from "react"
import { ProdutosContext } from "../contextos/ProdutosContext"

export default function Home() {
    const {produtos, somar} = useContext(ProdutosContext)
    somar(10, 20)
    return (
        <>
            <h1>Home</h1>
            <p>Página home do site, acessada na rota principal</p>

            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>{produto.name}</li>
                ))}
            </ul>
        </>
    )
}
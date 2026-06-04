//é responsavel por criar o contexto (elemento) e o provider (elemento que fornece o contexto para partes do app)
import { createContext, useState} from "react";

export const ProdutosContext = createContext();

//criar o componente que receberá os valores iniciais para o contexto e fornece o contexto para partes do app
export function ProdutosProvider({children}){

    const [produtos, setProdutos] = useState([
        {
            id: 1,
            name: "Notebook Gamer",
            price: 4500,
            image: "https://placehold.co/300x200?text=Notebook"
        },
        {
            id: 2,
            name: "Mouse RGB",
            price: 150,
            image: "https://placehold.co/300x200?text=Mouse"
        },
        {
            id: 3,
            name: "Teclado Mecânico",
            price: 350,
            image: "https://placehold.co/300x200?text=Teclado"
        },
        {
            id: 4,
            name: "Monitor Ultrawide",
            price: 1800,
            image: "https://placehold.co/300x200?text=Monitor"
        },
        {
            id: 5,
            name: "Produto teste contexto",
            price: 500,
            image: "https://placehold.co/300x200?text=Teste"
        },
        {
            id:60,
            name: "Produto teste 2 contexto",
            price: 500,
            image: "https://placehold.co/300x200?text=Teste2"        }
        ]);

    function somar(num1, num2){
        console.log( num1 + num2);
    }

    function adicionarProduto(produto){
        setProdutos([...produtos, produto])
    }

    function removerProduto(id){
        setProdutos(produtos.filter(produto => produto.id !== id))
    }

    function atualizarProduto(produto){
        setProdutos(produtos.map(p => p.id === produto.id ? produto : p))
    }

    return(

        <ProdutosContext.Provider value={{produtos, adicionarProduto, removerProduto, atualizarProduto, somar}}>
            {children}
        </ProdutosContext.Provider>

    )
    
}
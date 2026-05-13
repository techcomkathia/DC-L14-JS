const retorno = fetch('https://fakestoreapi.com/products')

let retorno2 = []

fetch('https://fakestoreapi.com/products')
.then((resp) => resp.json())
.then((dados) => {
    console.log(dados) 
    retorno2 = dados //não funciona pois não é uma função assíncrona, os dados usados fora do then não podem ser acessados, pois serão executados de forma sincrona antes mesmo de serem atribuidos a variável
    return dados
}).
then((informacoes)=>{
    let elemento = document.createElement('div')
    elemento.innerHTML = informacoes[0].title
    document.body.appendChild(elemento)
})
.catch((erro) => console.log(erro))

async function buscarProdutos() {
    try{
        /*a estrutura await permite que o JavaScript aguarde a conclusão de uma operação assíncrona antes de continuar a 
        execução do programa. Isso garante por exemplo que a atribuição de um valor a uma variável seja feita apenas depois que a operação assíncrona tenha concluido.*/
        let respostaApi = await fetch('https://fakestoreapi.com/products')

        let informacoes = await respostaApi.json() //converção para objeto

        retorno2 = informacoes

        let elemento = document.createElement('div')
        elemento.innerHTML = retorno2[1].title
        document.body.appendChild(elemento)
    }
    catch(erro){
        console.log(erro)
    }
}

buscarProdutos()






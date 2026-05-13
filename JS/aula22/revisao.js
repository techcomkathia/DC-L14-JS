//consumo da api fake store https://fakestoreapi.com/

fetch("https://fakestoreapi.com/products") //promisse
    .then((resp) => resp.json())
    .then((dados) =>{
       console.log(dados) 
       return dados
    } )
    .then((retornoFuncaoAnterior)=> console.log(retornoFuncaoAnterior))
    .catch((erro) => console.log(erro))


function buscarProduto(id){
    fetch(`https://fakestoreapi.com/products/${id}`) //promisse
    .then((resp) => resp.json())
    .then((dados) =>{
       console.log(dados) 
       return dados
    } )
    .then((retornoFuncaoAnterior)=> console.log(retornoFuncaoAnterior))
    .catch((erro) => console.log(erro))
}

buscarProduto(1)

buscarProduto(2)
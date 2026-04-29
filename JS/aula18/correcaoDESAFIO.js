let vendas2025= [
    { mes: 'Janeiro', valor: 1000 },
    { mes: 'Fevereiro', valor: 1500 },
    { mes: 'Março', valor: 2000 },
    { mes: 'Abril', valor: 2500 },
    { mes: 'Maio', valor: 3000 },    
    { mes: 'Junho', valor: 3500 },
    { mes: 'Julho', valor: 4000 },
    { mes: 'Agosto', valor: 4500 },
    { mes: 'Setembro', valor: 5000 },
    { mes: 'Outubro', valor: 5500 },
    { mes: 'Novembro', valor: 6000 },
    { mes: 'Dezembro', valor: 6500 }
]

//Calcule qual o total de vendas de 2024 e 2025, considerando que o somatório do ano anterior foi de 50000
let totalVendas = vendas2025.reduce((somatorio, objVenda)=> somatorio+= objVenda.valor, 50000)


//Calculo do valor total do estoque do cleitinho magazine

let estoque = [
    { produto: 'Camiseta', quantidade: 100, precoUnitario: 50 },
    { produto: 'Calça', quantidade: 50, precoUnitario: 100 },
    { produto: 'Tênis', quantidade: 30, precoUnitario: 200 },
    { produto: 'Jaqueta', quantidade: 20, precoUnitario: 150 },
    { produto: 'Bermuda', quantidade: 40, precoUnitario: 80 }
]

let totalValorEstoque = estoque.reduce((somatorio, objProduto) => somatorio+= objProduto.precoUnitario * objProduto.quantidade)


//reduzir um array de objetos em um único objeto
let produtosCategorias = [
    {nome: 'Camiseta', categoria: 'Roupas', precoUnitario: 50},
    {nome: 'Calça', categoria: 'Roupas', precoUnitario: 100},
    {nome: 'Tenis', categoria: 'Calcados', precoUnitario: 200},
    {nome: 'Jaqueta', categoria: 'Roupas', precoUnitario: 150},
    {nome: 'Bermuda', categoria: 'Roupas', precoUnitario: 80},
    {nome: 'sandalias', categoria: 'Calcados', precoUnitario: 80}
]

//reduzir um array de objetos em um único objeto com base na categoria
//ex: { roupas: [{nome: 'Camiseta', precoUnitario: 50}, {nome: 'Calça', precoUnitario: 100}, {nome: 'Jaqueta', precoUnitario: 150}]}

let produtosPorCategoria = produtosCategorias.reduce(
    (objetoFinal, objProduto) => {
        //verificar a categoria do produto que está sendo processado
        if(objProduto.categoria === 'Roupas'){
            //Acessar o objeto final e no atributo roupas, adicionar o produto ao atributo produtos ( que é o array com todos os produtos da categoria)
            objetoFinal.roupas.produtos.push(objProduto)
            objetoFinal.roupas.qtd++
        }
        else if(objProduto.categoria === 'Calcados'){
            objetoFinal.calcados.produtos.push(objProduto)
            objetoFinal.calcados.qtd++
        }

        return objetoFinal

    }
    ,
    {
        roupas:{
            qtd:0,
            produtos: []
        }, 
        calcados:{
        qtd:0,
        produtos: []
        }
    }
)

console.log(produtosPorCategoria)
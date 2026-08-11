//faça 2 funções : uma que compara os números recebidos em um array e retorne o maior número. 
//a segunda função será uma evolução da primeira, ela recebe um array e retornar o maior e o menor número desse array de números. 

//Dicas: use laço de repetição e e uma variável para armazenar o maior e o menor número.


function retornarMaiorNumero(listaNumeros){
    let maior = listaNumeros[0];

    for(let i = 1; i < listaNumeros.length; i++){
        if( listaNumeros[i]> maior ){
            maior = listaNumeros[i];
        }
    }
    return maior
    
}


function retornarMaiorEmenor(listaNumeros){
    let maior = listaNumeros[0];
    let menor = listaNumeros[0];

    for(numero of listaNumeros){
        if( numero > maior ){
            maior = numero;
        }
        if( numero < menor ){
            menor = numero;
        }
    }
    return [maior, menor]
    
}

/*let menorEmaiorNumero = retornarMaiorEmenor([1,2,3,4,10,5,6,7,8,9])
let maiorNumero = retornarMaiorNumero([1,2,3,4,10,5,6,7,8,9])

console.log(menorEmaiorNumero)
console.log(maiorNumero)

maiorNumero = retornarMaiorNumero([1,'J',3,4,10,5,6,7,8,9])

console.log(maiorNumero)*/

//Crie um função que receba  2 palavras e compare elas. Indique qual a palavra com maior quantidade de letras.
//Importante: faça a verificação se os elementos informados como parâmetro são tipos verdadeiros. 
//Caso sejam tipos falsos, retorne uma mensagem de erro.
//Caso sejam verdadeiros retorne qual palavra tem mais letras.

function compararPalavras(palavra1, palavra2){
    //type of é um recurso do js que retorna o tipo da informação passada como parâmetro

    if( typeof palavra1 !== 'string' || typeof palavra2 !== 'string' ){
        return 'Os parâmetros informados devem ser do tipo string'
    }

    /* if( palavra1.length > palavra2.length ){
        return palavra1
    }
    
    return palavra2*/

    return palavra1.length > palavra2.length ? palavra1 : palavra2
    //teste lógico ? retorno se verdadeiro : retorno se falso

}


//Atividade para explorar callback

// defina uma função que receba um array com objetos de produtos e um callback. Esse callback pode definir regras para criar descontos em preços de produtos, com base em algum atributo do produto (objeto). A função deve retornar um resumo da: quantidade de produtos (contagem de elmentos do array), preço total da compra e o valor total de desconto com relação ao preço original.

//para testar a função, crie duas funções: cliente ouro ( tem 15% de desconto para produtos de preço maior que 100), cliente platina (tem 20% de desconto para produtos de preço maior que 50)

//chame a função passando o array de produtos e a funcao de callback como parâmetro

const produtosCompra = [
    {nome: "produto 1"},
    {nome: "produto 2", preco: 51},
    {nome: "produto 3", preco: 10},
    {nome: "produto 4", preco: 110},
    {nome: "produto 5", preco: 5}
]

//faça o ajuste da questão para verificar se o objeto do array passado com parâmetro tem a propriedade preço. Caso essa propriedade não exista, retorne um erro personalizado. Indique para o usuário que todos os itens do array devem ter a propriedade preco.

function calcularConta(arrayProdutos, funcaoDesconto) {

    for(produto of arrayProdutos){
        if(!produto.preco) {
            throw new Error('Todos os itens do array devem ter a propriedade preco')
        }
    }

    let totalDesconto = 0
    let totalCompra = 0
    let totalProdutos = arrayProdutos.length
    
    for(produto of arrayProdutos){
        totalDesconto += funcaoDesconto(produto.preco)
        totalCompra += produto.preco
    }
    return {
            totalDeProdutos: totalProdutos,
            totalCompra: totalCompra,
            totalDesconto: totalDesconto,
            totalCompraComDesconto: Number((totalCompra - totalDesconto).toFixed(2))
        }
    
}

function clienteOuro(preco){
    if(preco > 100){
        return preco * 0.15
    }
    return 0
}

function clientePlatina(preco){
    if(preco > 50){
        return preco * 0.20
    }
    return 0
}

function clienteDiamante(preco){
    if(preco > 150){
        return preco * 0.25
    }
    return preco * 0.5
}

function clienteBasico(preco){
    return 0
}
console.log(calcularConta(produtosCompra, clienteOuro))
console.log(calcularConta(produtosCompra, clientePlatina))
console.log(calcularConta(produtosCompra, (preco)=>{
    if(preco>150){
        return preco * 0.15
    }
    else{
        return preco * 0.5
    }

}))


//crie uma função, emissão de compra que receba um objeto com as seguintes informações:

//nome do cliente
//produtos : array de produtos
//metodo de pagamento
//data da compra
//tipo do cliente.  

//essa função deve ter um bloco try catch para tratar as exceções que podem acontecer.

//verificar se existem nome, metodo de pagamento, produtos e data da compra. Caso nao exista, retorne um erro personalizado.
//deverá ser retornado um objeto com o nome do cliente, o total de desconto, o total da compra e o total de produtos.
//a função deve utilizar um switch para identificar o tipo do cliente e chamar a funcao de desconto correspondente.
//tipos de cliente: 
//básico (sem desconto)
//cliente ouro ( aplicar função que já existe)
//cliente platina (aplicar função que já existe)
//cliente diamante (20% de desconto sem condição minima de preço) (criar função de callback personalizada )
//caso seja informado um tipo de cliente retorne um erro personalizado.

//Os erros personalizados serão captados dentro do bloco catch e devem ser mostrados no console.

function emissaoCompra(objetoCliente){

    try{

        if(!objetoCliente.nome || !objetoCliente.metodoPagamento || !objetoCliente.produtos || !objetoCliente.dataCompra || !objetoCliente.tipoCliente){
            throw new Error("Todos os parâmetros devem ser informados: o objeto deve ter nome do cliente, produtos, metodo de pagamento, data da compra e tipo de cliente")
        }

        let detalhesCompra = {
            
        }
        switch(objetoCliente.tipoCliente){
            case 'basico':
                datelhesCompra = calcularConta(objetoCliente.produtos,clienteBasico)
                break
            case 'ouro':
                detalhesCompra = calcularConta(objetoCliente.produtos, clienteOuro)
                break
            case 'platina':
                detalhesCompra = calcularConta(objetoCliente.produtos, clientePlatina).totalDesconto
                break
            case 'diamante':
                detalhesCompra = calcularConta(objetoCliente.produtos, clienteDiamante)
                break
            default:
                throw new Error('O tipo de cliente informado nao existe')
            
        }

        objetoCliente.totalDesconto = detalhesCompra.totalDesconto
        objetoCliente.totalCompra = detalhesCompra.totalCompra
        objetoCliente.totalProdutos = detalhesCompra.totalDeProdutos
        objetoCliente.totalCompraComDesconto = detalhesCompra.totalCompraComDesconto

        return objetoCliente

    }
    catch(e){
        console.log(e.message)
    }

}

//Uma loja tem uma política de descontos de acordo com o valor da compra do cliente. Os descontos começam acima dos R$500 A cada 100 reais acima dos R$500,00 o cliente ganha 1% de desconto cumulativo até 25%. Por exemplo: R$500 = 1% || R$600,00 = 2% ... etc... Faça um programa que exiba essa tabela de descontos no seguinte formato:

let valorCompra = 500
let porcentagemDesconto = 1
let porcentagemMaxima = 25

console.log(`Valor da compra - porcentagem de desconto - Valor final`)

for(let desconto= porcentagemDesconto; desconto<= porcentagemMaxima; desconto++){
 //operação de montagem da tabela
 //Valordacompra - porcentagem de desconto - valor final
    let valorFinal = valorCompra - (valorCompra * (desconto/100))
    console.log(`R$ ${valorCompra} - ${desconto}% - R$ ${valorFinal}`)

    //atualização do valor da compra
    valorCompra+=100
}


//Uma loja deseja cadastrar a venda realizada para 5 clientes e verificar se o faturamento da loja foi superior a loja B (faturamento = 54000). 
// Se o faturamento da loja A atingir esse valor mostre na tela uma mensagem contendo em quanto foi superado o faturamento.

//criação das variáveis
let qtdVendas = 5
let faturamentoA = 0
let faturamentoB = 54000

//leitura dos valores e adição ao faturamento ( processo repetitivo)
for(let i = 1; i<= qtdVendas; i++){
    faturamentoA += Number(prompt(`Digite o valor da venda nº ${i}:(apenas números)`))
}

//verificação se o faturamento da loja A foi maior que o da loja B
if(faturamentoA> faturamentoB){
    console.log(`O faturamento da loja A foi maior em ${faturamentoA-faturamentoB} que o faturamento da loja B`)
}
else{
    console.log(`O faturamento da loja A não foi maior que o faturamento da loja B`)
}

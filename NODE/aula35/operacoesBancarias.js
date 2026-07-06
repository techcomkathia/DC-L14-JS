/*Produção do módulo bancário

//criação das funções do módulo bancário: abrir conta, depositar, sacar e extrato

//função para abrir conta: receberá como parâmetro o nome do cliente, numero da conta, agencia e o saldo inicial da conta, retornando um objeto com as informações da conta. Caso o saldo inicial não seja informado, o valor padrão será 0. (utilizar valor padrão para variável da função)

//função para depositar: receberá como parâmetro o objeto da conta e o valor a ser depositado, retornando o novo saldo da conta e mostrando uma mensagem de sucesso no console. Caso o valor do depósito seja negativo, retornar uma mensagem de erro.

//função para sacar: receberá como parâmetro o objeto da conta e o valor a ser sacado, retornando o novo saldo da conta e mostrando uma mensagem de sucesso no console. Caso o valor do saque seja negativo ou maior que o saldo da conta, retornar uma mensagem de erro.

//função para extrato: receberá como parâmetro o objeto da conta, retornando o saldo atual da conta e mostrando uma mensagem no console com o saldo atual.*/

// Função para abrir conta
function abrirConta(nomeCliente, numeroConta, agencia, saldoInicial = 0) {
    console.log(`Conta aberta com sucesso para ${nomeCliente}. Saldo inicial: R$ ${saldoInicial.toFixed(2)}`);
    return {
        nomeCliente,
        numeroConta,
        agencia,
        saldo: saldoInicial
    };
}

// Função para depositar
function depositar(conta, valor) {
    if (valor <= 0) {
        return "Erro: o valor do depósito deve ser maior que zero.";
    }

    conta.saldo += valor;
    console.log(`Depósito realizado com sucesso! Novo saldo: R$ ${conta.saldo.toFixed(2)}`);

    return conta.saldo;
}

// Função para sacar
function sacar(conta, valor) {
    if (valor <= 0) {
        return "Erro: o valor do saque deve ser maior que zero.";
    }

    if (valor > conta.saldo) {
        return "Erro: saldo insuficiente.";
    }

    conta.saldo -= valor;
    console.log(`Saque realizado com sucesso! Novo saldo: R$ ${conta.saldo.toFixed(2)}`);

    return conta.saldo;
}

// Função para extrato
function extrato(conta) {
    console.log(` A conta ${conta.numeroConta}, do cliente ${conta.nomeCliente}, possui saldo atual de R$ ${conta.saldo.toFixed(2)}`);
    return conta.saldo;
}

// Exportando as funções do módulo bancário
module.exports = {
    abrirConta, 
    depositar,
    sacar,
    extrato
}


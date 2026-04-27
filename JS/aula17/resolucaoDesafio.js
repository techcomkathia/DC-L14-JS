//Crie um objeto chamado contaBancaria que tenha as seguintes propriedades:
//  titular
//  agencia
//  numero
//  saldo 
// emprestimo
// valorChequeEspecial
// métodos: chamado depositar, sacar e consultarSaldo 

let contaBancaria = {
    titular: "João Silva",
    agencia: "1234",
    numero: "56789-0",
    saldo: 1000,
    emprestimo: 0,
    valorChequeEspecial: 500,
    depositar: function(valor){
        let valorDepositado = valor;
        //verificar se há um empréstimo em aberto
        if(contaBancaria.emprestimo>0){
            //subtrair o valor do empréstimo
            valorDepositado = valor - contaBancaria.emprestimo;
            contaBancaria.emprestimo -= valor;
            //verificar se sobrou algum valor do depósito para ser adicionado ao saldo

            if(valorDepositado>0){
                    contaBancaria.saldo += valorDepositado;
            }
        }

        if(contaBancaria.emprestimo<=0){
            //subtrair o valor do cheque especial
            contaBancaria.saldo += valorDepositado;
        }
    },
    sacar: function(valor){
        //verificar se o valor é menor ou igual ao saldo 
        if(valor <= contaBancaria.saldo){
            contaBancaria.saldo -= valor;
            return 'Saque realizado com sucesso.';
        }
        else if ( valor <= (contaBancaria.saldo + contaBancaria.valorChequeEspecial)){
            //calcular o valor do empréstimo necessário para cobrir o saque
            let valorEmprestimo = valor - contaBancaria.saldo;
            contaBancaria.emprestimo += valorEmprestimo;
            contaBancaria.saldo = 0;
            return 'Saque realizado com sucesso.';
        }
        else{
            console.log("Saldo insuficiente para realizar o saque.");
            return 'Saldo insuficiente para realizar o saque.';
        }
    },
    consultarSaldo: function(){
        //exibir o valor do saldo, valor do empréstimo e valor do cheque especial disponível
        console.log(`Saldo: R$${contaBancaria.saldo}`);
        console.log(`Empréstimo: R$${contaBancaria.emprestimo}`);
        console.log(`Cheque Especial Disponível: R$${contaBancaria.valorChequeEspecial - contaBancaria.emprestimo}`);
    }
}

// só será possível sacar se o valor for menor ou igual ao saldo + valorChequeEspecial
// caso o chequespecial seja utilizado, o valor do empréstimo deve ser atualizado
// para depositar, o valor deve ser adicionado ao saldo, e caso haja um empréstimo, o valor do empréstimo deve ser reduzido e voltar para o valor do cheque especial
// para o método consultarSaldo, deve ser exibido o valor do saldo, valor do empréstimo e valor do cheque especial disponível


//após isso teste o objeto realizando algumas operações de depósito, saque e consulta de saldo.

// Testando o objeto contaBancaria
contaBancaria.consultarSaldo();

console.log(contaBancaria.sacar(2200))

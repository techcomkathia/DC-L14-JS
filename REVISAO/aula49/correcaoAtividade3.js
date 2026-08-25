class ContaBancaria{
    #saldo
    constructor(titular, numero, agencia, saldo=0){
        this.titular = titular;
        this.#saldo = saldo;
        this.numero = numero;
        this.agencia = agencia;
        
    }

    depositar(valor){
        if(valor <= 0){
            return("O valor precisa ser maior que 0")            
        }
        this.#saldo += valor;
        return('Depósito realizado com sucesso');
    }

    sacar(valor){
        if(this.#saldo < valor){
            return("Saldo insuficiente");
        }
        this.#saldo -= valor;
        return('Saque realizado com sucesso');
    }

    exibirInformacoes(){
        return(`Titular: ${this.titular}, Saldo: ${this.#saldo}, Numero: ${this.numero}, Agencia: ${this.agencia}`)
    }

    // retornar o valor do saldo para usar em funções fora da classe
    getSaldo(){
        return(this.#saldo);
    }
}

let conta = new ContaBancaria("Joaquim", 1, 1,20);
console.log(conta.sacar(50));
console.log(conta.depositar(100));
console.log(conta.sacar(50));
console.log(conta.exibirInformacoes());

//crie a classe agenciaBancaria que tanha os atributos nome, endereco , telefone, horarioFuncionamento, contas, totalContas.

class AgenciaBancaria{
    #horarioFuncionamento
    #nome
    constructor(nome, endereco, telefone, horarioFuncionamento, contas=[], totalContas=0){
        this.#horarioFuncionamento = horarioFuncionamento;
        this.#nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.contas = contas;
        this.totalContas = contas.length;
    }

    exibirContas(){
        return(this.contas);
    }

    adicionarConta(objConta){
        if(!(objConta instanceof ContaBancaria)){
            return("O parâmetro precisa ser uma instância da classe ContaBancaria");
        }
        this.contas.push(objConta);
        this.totalContas = this.contas.length;    
    }
    
    buscarConta(numConta){
        let contaEncontrada = this.contas.find((conta) => conta.numero == numConta);
        if(!contaEncontrada){
            return("Conta não encontrada");
        }
        return(contaEncontrada); 
    }

    finalizarConta(numConta){
        let contaEncontrada = this.contas.find((conta) => conta.numero == numConta);
        if(!contaEncontrada){
            return("Conta não encontrada");
        }
        if(contaEncontrada.getSaldo() > 0){
            //criar um método get na classe contaBancaria que retorne o saldo
            return("Conta possui saldo, impossível finalizar. Faça o saque antes e depois encerre a conta'");
        }
        this.contas = this.contas.filter((conta) => conta.numero != numConta);
        this.totalContas = this.contas.length;
        return("Conta finalizada com sucesso");
    }

}
//TODOS OS ATRIBUTOS DEVEM SER PRIVADOS
//Os atributos horarioFuncionamento e nome só podem ser acessados pela classe agenciaBancaria (getter), e não terão possibilidade de modificação externa(sem setter).
//Os demais atributos deverão ser acessados e modificados externamente por meio de métodos.
//O método de exibir todas as contas deverá ser criado e exibir as informações de todas as contas cadastradas.
//o método adicionarConta deverá receber como parâmetro uma conta, da classe contaBancaria e adicionar essa conta na lista de contas da agência bancária.
//finalizar conta deverá receber como parâmetro o número da conta bancaria, se ela existir, ele deverá ser removida da lista de contas da agência bancária.Para isso é necessário verificar se não existe saldo na conta, caso exista saldo, ele deverá ser removido (sacado anteriormente) para então remover a conta da agência bancária.
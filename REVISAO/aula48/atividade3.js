//para praticar os conceitos de encapsulamento faça a classe ContaBancaria
/*Atributos:
titular
saldo
numero
agencia

//o saldo será um atributo privado

//metodos:
depositar -> necessário fazer as verificações do valor do depósito
sacar -> necessário fazer as verificações de saldo e do valor do saque
exibirInformacoes*/

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
}

let conta = new ContaBancaria("Joaquim", 1, 1,20);
console.log(conta.sacar(50));
console.log(conta.depositar(100));
console.log(conta.sacar(50));
console.log(conta.exibirInformacoes());

//crie a classe agenciaBancaria que tanha os atributos nome, endereco , telefone, horarioFuncionamento, contas, totalContas.
//TODOS OS ATRIBUTOS DEVEM SER PRIVADOS
//Os atributos horarioFuncionamento e nome só podem ser acessados pela classe agenciaBancaria (getter), e não terão possibilidade de modificação externa(sem setter).
//Os demais atributos deverão ser acessados e modificados externamente por meio de métodos.
//O método de exibir todas as contas deverá ser criado e exibir as informações de todas as contas cadastradas.
//o método adicionarConta deverá receber como parâmetro uma conta, da classe contaBancaria e adicionar essa conta na lista de contas da agência bancária.
//finalizar conta deverá receber como parâmetro o número da conta bancaria, se ela existir, ele deverá ser removida da lista de contas da agência bancária.Para isso é necessário verificar se não existe saldo na conta, caso exista saldo, ele deverá ser removido (sacado anteriormente) para então remover a conta da agência bancária.
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
    setSaldo(saldo){
        this.#saldo = saldo
    }
}

//crie uma classe filha chamada contaCorrente
//a conta corrente terá todos os atributos e métodos da contaBancaria + 1 atributo chamado limiteChequeEspecial.

//crie uma classe filha chamada contaPoupanca
//a conta poupanca terá todos os atributos e métodos da contaBancaria + 1 atributo chamado taxaJuros

//crie o polimorfismo dentro de cada classe filha de forma que sobrescreva o metodoExibirInformacoes da classe mãe.
//Na classe contaCorrente ele deverá ainda modificar o comportamento do método sacar. Se o valor do saque for maior que o saldo , o limiteChequeEspecial poderá ser utilizado. Caso o cheque especial seja utilizado, o saldo deve ser zerado e o cheque especial deve ser atualizado considerando o valor que foi utilizado para o saque. Caso o saldo + o cheque especial seja menor que o valor do saque, ele não deverá ser sacado e deverá ser retornado uma mensagem informando o motivo. Na classe contaCorrente, adicione o atributo dividaChequeEspecial, que deverá ser um array com [booleano, valorDividaChequeEspecial].

class ContaCorrente extends ContaBancaria{

        #limiteChequeEspecial
        #dividaChequeEspecial
       
    constructor(titular, numero, agencia, saldo=0, limiteChequeEspecial=0, dividaChequeEspecial=[false, 0]){
        super(titular, numero, agencia, saldo);
        this.#limiteChequeEspecial = limiteChequeEspecial;
        this.#dividaChequeEspecial = dividaChequeEspecial;
    }

    //polimorfismo do método sacar
    sacar(valor){
        if(this.getSaldo() >= valor){
            const valorSaldo= this.getSaldo() - valor;
            this.setSaldo(valorSaldo);
            return('Saque realizado com sucesso');
        }
        else if(this.getSaldo() + this.#limiteChequeEspecial >= valor){
            this.setSaldo(0);    
            const valorDivida = this.#limiteChequeEspecial - (valor - this.getSaldo());
            this.#limiteChequeEspecial -= valorDivida;
            this.#dividaChequeEspecial[0] = true;
            this.#dividaChequeEspecial[1] = valorDivida;            
            return('Saque realizado com sucesso, utilizando o cheque especial');
        }
        return ('Saldo insuficiente');        
    }

    //polimorfismo do método 
    exibirInformacoes(){
        if(this.#dividaChequeEspecial[0]){
            return(`
                    Titular: ${this.titular},
                    Saldo: ${this.getSaldo()},
                    Numero: ${this.numero},
                    Agencia: ${this.agencia},
                    Limite Cheque Especial: ${this.#limiteChequeEspecial},
                    Divida Cheque Especial: ${this.#dividaChequeEspecial[1]}`)
        }
        return(`
                Titular: ${this.titular}, 
                Saldo: ${this.getSaldo()},
                Numero: ${this.numero},
                Agencia: ${this.agencia}
                Limite Cheque Especial: ${this.#limiteChequeEspecial}
                `)
    }
}

class contaPoupanca extends ContaBancaria{
    #taxaJuros
    constructor(titular, numero, agencia, saldo=0, taxaJuros=0){
        super(titular, numero, agencia, saldo);
        this.#taxaJuros = taxaJuros;
    }

    exibirInformacoes(){
        return(`
                Titular: ${this.titular}, 
                Saldo: ${this.getSaldo()},
                Numero: ${this.numero},
                Agencia: ${this.agencia},
                Taxa Juros: ${this.#taxaJuros}
                `)
    }   
}


//Faça a modificação da Classe Agencia Bancaria.
//Ela terá os atributos horarioFuncionamento e nome,contas e totalContas e além dos métodos que já existem na atividade anterior, agora teremos o método exibirInformacoes, ele exibirá as informacoes da agencia.

//Herdando a classe AgenciaBancaria teremos 2 classes filhas: agenciaFisica e agenciaVirtual

//AgenciaFisica terá o atributo telefone, endereco
//AgenciaVirtual terá o atributo whatsapp e site
//em ambas as classes teremos o polimorfismo do metodo exibirInformacoes que exibirá as informacoes da agencia com os seus respectivos atributos


class AgenciaBancaria{
    #horarioFuncionamento
    #nome
    constructor(nome, horarioFuncionamento, contas=[], totalContas=0){
        this.#horarioFuncionamento = horarioFuncionamento;
        this.#nome = nome;
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

    exibirInformacoes(){
        return(`
            Nome: ${this.#nome},
            Horario de Funcionamento: ${this.#horarioFuncionamento},
            Total de Contas: ${this.totalContas}
            `)

    }

    getHorarioFuncionamento(){
        return(this.#horarioFuncionamento);
    }

    getNome(){
        return(this.#nome);
    }

}

class AgenciaFisica extends AgenciaBancaria{
    #telefone
    #endereco
    constructor(telefone, endereco, nome, horarioFuncionamento, contas=[], totalContas=0){
        super(nome, horarioFuncionamento, contas, totalContas);
        this.#telefone = telefone;
        this.#endereco = endereco;
    }

    exibirInformacoes(){
        return(`
            Nome: ${this.getNome()},
            Horario de Funcionamento: ${this.getHorarioFuncionamento()},
            Total de Contas: ${this.totalContas},
            Telefone: ${this.#telefone},
            Endereco: ${this.#endereco}
            `)
    }
}

class AgenciaVirtual extends AgenciaBancaria{
    #whatsapp
    #site
    constructor(whatsapp, site, nome, horarioFuncionamento, contas=[], totalContas=0){
        super(nome, horarioFuncionamento, contas, totalContas);
        this.#whatsapp = whatsapp;
        this.#site = site;
    }

    exibirInformacoes(){
        return(`
            Nome: ${this.getNome()},
            Horario de Funcionamento: ${this.getHorarioFuncionamento()},
            Total de Contas: ${this.totalContas},
            Whatsapp: ${this.#whatsapp},
            Site: ${this.#site}
            `)
    }
}
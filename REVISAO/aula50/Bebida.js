const Produto = require('./Produto');

class Bebida extends Produto{
    constructor(nome, preco, tamanho, possuiGelo=false){
        super(nome, preco);
        this.tamanho = tamanho;
        this.possuiGelo = possuiGelo;
    }

     
    adicionarGelo(){
        this.possuiGelo = true;
    }

    removerGelo(){
        this.possuiGelo = false;
    }

    //polimorfismo
    exibirDescricao(){
        return(`Nome: ${this.nome}, Preco: ${this.getPreco()}, Tamanho: ${this.tamanho}, Possui gelo: ${this.possuiGelo}`)
    }

}

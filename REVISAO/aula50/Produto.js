class Produto{
    #preco
    constructor(nome, preco){
        this.nome = nome;
        this.#preco = preco;
    }

    calcularPrecoFinal(desconto=0){
        return this.#preco - (this.#preco * desconto);
    }

    exibirDescricao(){
        return(`Nome: ${this.nome}, Preco: ${this.#preco}`)
    }

    getPreco(){
        return this.#preco
    }
}

module.exports = Produto
const Produto = require('./Produto');

class Sobremesa extends Produto{
    #precoFinal
    constructor(nome, preco, tipo, possuiEmbalagem=false, possuiDescartaveis=false){
        super(nome, preco);
        this.tipo = tipo;
        this.possuiEmbalagem = possuiEmbalagem;
        this.possuiDescartaveis = possuiDescartaveis;
        this.#precoFinal = preco;
    }

    adicionarEmbalagem(){
        this.possuiEmbalagem = true;
    }

    adicionarDescartaveis(){
        this.possuiDescartaveis = true;
        //incluir custo ao preco
        this.precoFinal += 1; 
    }

    calcularPrecoFinal(desconto=0){
        return this.precoFinal - (this.precoFinal * desconto)
    }

    getPrecoFinal(){
        return this.precoFinal;
    }

    setPrecoFinal(precoFinal){
        this.precoFinal = precoFinal;
    }

    exibirDescricao(){
        return(`
            Nome: ${this.nome} 
            Preco: ${this.getPreco()}
            Preco final: ${this.precoFinal}
            Tipo: ${this.tipo}
            Possui embalagem: ${this.possuiEmbalagem}
            Possui descartaveis: ${this.possuiDescartaveis}`)
    }
}
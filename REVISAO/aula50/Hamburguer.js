const Produto = require('./Produto');

class Hamburguer extends Produto{
 constructor(nome, preco, tipoPao, adicionais=[]){
    super(nome, preco);
    this.tipoPao = tipoPao;
    this.adicionais = adicionais;
    this.precoFinal = preco;
 }

    adicionarAdicional(adicional){
        //queijo, ovos, bacon, hamburger
        switch(adicional){
            case 'queijo':
                this.adicionais.push({
                    tipo: 'queijo',
                    preco: 3
                });
                break;
            case 'ovos':
                this.adicionais.push({
                    tipo: 'ovos',
                    preco: 2
                });
                break;
            case 'bacon':
                this.adicionais.push({
                    tipo: 'bacon',
                    preco: 4
                });
                break;
            case 'hamburger':
                this.adicionais.push({
                    tipo: 'hamburger',
                    preco: 7
                });
                break;
            default:
                console.log('Adicional nao encontrado');
        }
    }

    removerAdicional(tipoAdicional){
        //buscar pelo atributo tipo
        //buscar o indice do adicional pelo atributo e fazer a exclusão
        const adicional = this.adicionais.find(adicional => adicional.tipo === tipoAdicional);
        if(!adicional){
            console.log('Adicional nao encontrado');
            return;
        }
        
        this.adicionais.splice(this.adicionais.indexOf(adicional), 1);
    }

    calcularPrecoFinal(){
        //verifica se existe adicional e soma o preco
        let precoFinal = this.getPreco();
        if(this.adicionais.length > 0){
            precoFinal += this.adicionais.reduce((total, adicional) => total + adicional.preco, 0);
        }
        this.precoFinal = precoFinal;
        return precoFinal;   
    }

    exibirDescricao(){
        return(`
            Nome: ${this.nome}
            Preco: ${this.preco}
            Tipo de pao: ${this.tipoPao}
            Adicionais: ${this.adicionais.map(adicional => adicional.tipo)}
            Preço final: ${this.precoFinal}`
        )
    }

}

module.exports = Hamburguer

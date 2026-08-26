/*Cliente
Atributos: nome, telefone, endereço
Métodos: 
atualizarEndereco()
exibirEndereco() 
exibirDados()*/

class Cliente {
    #endereco
    constructor(nome, telefone, endereco) {
        this.nome = nome;
        this.telefone = telefone;
        this.#endereco = endereco;
    }

    atualizarEndereco(endereco) {
        if(endereco.legth > 0){
          this.#endereco = endereco; 
          return "Endereço atualizado com sucesso" 
        }
        return "Endereço inválido"
    }

    exibirEndereco() {
        return this.#endereco;
    }

    exibirDados() {
        return (`
        Nome: ${this.nome}
        Telefone: ${this.telefone}
        Endereço: ${this.#endereco}
        `)
    }

}

//exportar a classe cliente
module.exports = Cliente
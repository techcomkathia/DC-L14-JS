class Pessoa {
    #nome
    #idade
    constructor(nome, idade, cidade) {
        this.#nome = nome
        this.#idade = idade
        this.cidade = cidade
    }

    getNome(){
        return this.#nome
    }

    setNome(novoNome){
        this.#nome = novoNome
    }
}

const pessoa1 = new Pessoa("João", 20, "Rio de Janeiro")
//acessar atributos privados com função fora da classe
//console.log(pessoa1.#nome)
console.log(pessoa1.nome)
console.log(pessoa1.getNome())
//console.log(pessoa1.#idade)
console.log(pessoa1.idade)

pessoa1.setNome("Paulo")
console.log(pessoa1)
console.log(pessoa1.getNome())
class Pessoa{
    constructor(nome, idade, cidade) {
        this.nome = nome
        this.idade = idade
    }

    falar() {
        console.log(`Ola, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }

    comer(comida) {
        console.log(`Estou comendo ${comida}`)
    }

    dormir() {
        console.log(`Estou dormindo`)
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, cidade, curso) {
        super(nome, idade)
        this.curso = curso
        this.cidade = cidade
    }

    estudar() {
        console.log(`Estou estudando ${this.curso}`)
    }

}

const estudante = new Estudante("Joao", 20, "Rio de Janeiro", "Engenharia")
estudante.falar() //herdado da classe Pessoa
estudante.estudar() //é próprio da classe estudante
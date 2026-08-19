class Animal{
    //definição dos atributos
    //método construtor é o responsável por inicializar os atributos
    constructor(especie, nome, idade=1){
        this.especie = especie
        this.nome = nome
        this.idade = idade
    }

    //métodos 
    andar(qtdPassos){
        console.log(`${this.nome} andou ${qtdPassos} passos`)
    }

}

const objetoCachorro = {
    especie: "cachorro",
    nome: "Toby",
    idade: 3,
    andar: function(qtdPassos){
        console.log(`${this.nome} andou ${qtdPassos} passos`)
    }
}

//instância de um objeto
const cachorro = new Animal("cachorro", "Toby", 3)
console.log(cachorro)
console.log(objetoCachorro)
cachorro.andar(10)

//verificar se determinado objeto foi instanciado por uma classe
console.log(cachorro instanceof Animal) //true
console.log(objetoCachorro instanceof Animal) //false



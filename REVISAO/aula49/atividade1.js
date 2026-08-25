//crie uma classe veículo que tenha os seguintes atributos:
//marca, modelo, ano, cor, placa, proprietario. Todos os atributos devem ser privados.
//crie o método exibir detalhes
//trocar proprietario
//exibir proprietario

//SUPER CLASSE
class Veiculo{
    #marca
    #modelo
    #ano
    #cor
    #placa
    #proprietario
    constructor(marca, modelo, ano, cor, placa, proprietario = 'Sem proprietario'){
        this.#marca = marca
        this.#modelo = modelo
        this.#ano = ano
        this.#cor = cor
        this.#placa = placa
        this.#proprietario = proprietario        
    }

    exibirDetalhes(){
        return(`
        Marca: ${this.#marca}
        Modelo: ${this.#modelo}
        Ano: ${this.#ano}
        Cor: ${this.#cor}
        Placa: ${this.#placa}
        Proprietario: ${this.#proprietario}
        `)

    }

    trocarProprietario(novoProprietario){
        this.#proprietario = novoProprietario
    }

    exibirProprietario(){
        return this.#proprietario
    }
}


//crie 2 classes que herdam todos os métodos e atributos da classe veículo
//Carro
//Moto


//CARRO
//Atributos:
//quantidade de portas
//km máxima
//tipoCambio
//tipoCombustível
//Métodos:
//os métodos para get dos atributos : quantidade de portas, km máxima, tipoCambio, tipoCombustível
//os métodos de set para: tipo de combustível

class Carro extends Veiculo {
    #quantidadePortas
    #kmMaxima
    #tipoCambio
    #tipoCombustivel
    constructor(marca, modelo, ano, cor, placa,  quantidadePortas, kmMaxima, tipoCambio, tipoCombustivel, proprietario='Sem proprietario'){
        super(marca, modelo, ano, cor, placa, proprietario)
        this.#quantidadePortas = quantidadePortas
        this.#kmMaxima = kmMaxima
        this.#tipoCambio = tipoCambio
        this.#tipoCombustivel = tipoCombustivel
    }

    getQuantidadePortas(){
        return this.#quantidadePortas
    }

    getKmMaxima(){
        return this.#kmMaxima
    }

    getTipoCambio(){
        return this.#tipoCambio
    }

    getTipoCombustivel(){
        return this.#tipoCombustivel
    }

    setTipoCombustivel(tipoCombustivel){
        this.#tipoCombustivel = tipoCombustivel
    }


}


//MOTO
//Atributos:
//cilindrada
//tipoCambio
//tipoCombustível
//Métodos:
//os métodos para get dos atributos : cilindrada, tipoCambio, tipoCombustível
//os métodos de set para: tipo de combustível

class Moto extends Veiculo{
    #cilindrada
    #tipoCambio
    #tipoCombustivel
    constructor(marca, modelo, ano, cor, placa,  cilindrada, tipoCambio, tipoCombustivel, proprietario='Sem proprietario'){
        super(marca, modelo, ano, cor, placa, proprietario)
        this.#cilindrada = cilindrada
        this.#tipoCambio = tipoCambio
        this.#tipoCombustivel = tipoCombustivel
    }

    getCilindrada(){
        return this.#cilindrada
    }

    getTipoCambio(){
        return this.#tipoCambio
    }

    getTipoCombustivel(){
        return this.#tipoCombustivel
    }

    setTipoCombustivel(tipoCombustivel){
        this.#tipoCombustivel = tipoCombustivel
    }
}

const carro = new Carro('Fiat', 'Uno', 2010, 'Preto', 'ABC-1234', 4, 300, 'manual', 'Gasolina')
console.log(carro.exibirDetalhes()) //herdado da classe Veiculo
const moto = new Moto('Honda', 'CBR', 2020, 'Branco', 'DEF-5678', 150, 'manual', 'Gasolina')
console.log(moto.exibirDetalhes()) //herdado da classe Veiculo

console.log(carro.getQuantidadePortas()) //herdado da classe Carro
console.log(moto.getCilindrada()) //herdado da classe Moto
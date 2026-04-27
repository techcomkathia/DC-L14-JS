//você tem uma demanda para criar 3 funções: 
//1 função de cálculo de média : essa função recebe um objeto e para o atrbuto notas ( que é um array) calcula a média e retorna o valor da média 
//  calcularMedia(aluno) 

//2 função de cálculo de faltas : essa função recebe um objeto e para o atributo faltas (que é um array) calcula a quantidade de faltas e retorna o valor da quantidade de faltas
// calcularFaltas(aluno)

// a terceira função é a função que irá receber um objeto aluno, irá passar esse objeto como parâmetro para o segundo parametro que é a função de callback. Essa função de callback irá mostrar todos os dados do aluno recebido como parâmetro mais o valor retornado pela função de callback passada como segundo parâmetro.
// mostrarDados(aluno, callback)

let alunos = [
    {
        nome: 'Cleitinho',
        notas: [10, 9, 8],
        faltas: [1, 0, 2]
    },
    {
        nome: 'Sandoval',
        notas: [7, 6, 5],
        faltas: [0, 1, 0]
    }
]
//execute as funções para o cleitinho (aluno[0]) e para o sandoval (aluno[1])

function calcularMedia(aluno) {
    let soma = 0
    for(nota of aluno.notas) {
        soma += nota
    }
    return soma / aluno.notas.length
}

function calcularFaltas(aluno) {
    let totalFaltas = 0
    for(falta of aluno.faltas) {
        totalFaltas += falta
    }
    return totalFaltas
}

function mostrarDados(aluno, callback) {
    for(chave in aluno) {
        console.log(`${chave}: ${aluno[chave]}`)
    }

    console.log(`${callback.name}: ${callback(aluno)}`)
}

mostrarDados(alunos[0], calcularMedia)
mostrarDados(alunos[0], calcularFaltas)
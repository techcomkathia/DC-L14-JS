let alunos = [
    ['joão', 10],
    ['maria', 9],
    ['pedro', 8],
    ['ana', 7],
    ['joana', 6]
]

//acessar o nome da maria
console.log(alunos[1][0])
//variavel[indiceDoArray][indiceDoElementoDentroDoArray]

//faça o calculo da média e mostre no console, para cada aluno
let alunosNotas = [
    ['joão', 10,10,8],
    ['maria', 9,10,9],
    ['pedro', 8,7,6],
    ['ana', 7, 5, 7],
    ['joana', 6, 8, 10]
]
//soma3Notas/3

//faça o calculo da média e mostre no console, para cada aluno

for (let i = 0; i < alunosNotas.length; i++){
    let aluno = alunosNotas[i][0]
    let soma = 0
    for(let j=1; j < alunosNotas[i].length; j++){
        soma += alunosNotas[i][j]
    }
    let media = soma / (alunosNotas[i].length - 1)
    console.log(`Média aluno(a): ${aluno} - Média: ${media.toFixed(2)}`)
}
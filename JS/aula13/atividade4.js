//uma escola tem turmas com 10 alunos. 
//cada aluno tem 3 notas. 
//Faça um programa que calcule a media das notas de todos os alunos da turma. Use laços aninhados.
//ao final do cálculo da média de cada aluno mostre no console. As 3 notas deverão ser informadas pelo usuário.

//Exemplo
/*
n1 =10
n2 =10
n3 =8

média aluno 1 = somaNotas/3*/


//1º) são 10 alunos que serão avaliados -> 10x um cálculo de média será o laço externo

//2º) sao 3 notas que serão lidas -> 3x será executado o laço interno
let qtdAlunos = 3 //qtd x de repetição do laço externo
let qtdNotas = 3 //qtd x de repetição do laço interno
for(let i=1; i<=qtdAlunos; i++){
    //ler 3 notas
    let somaNotas = 0 //acumulador
    for(let j=1 ; j<=qtdNotas; j++){
        let nota = Number(prompt(`Digite a nota ${j} do aluno ${i}:`))
        somaNotas += nota
    }
    //saí do laço e tenho as 3 notas no acumulador somaNotas
    let media = somaNotas / qtdNotas
    console.log(`A média do aluno ${i} é: ${media.toFixed(2)}`)
}
//mostre todas as informações dos objetos pedidos no console no seguinte formato
// chave: valor
// chave: valor

let alunos = [
    {
        nome: 'João',
        idade: 20,
        sexo: 'M',
        media : 10
    },
    {
        nome: 'Maria',
        idade: 20,
        sexo: 'F',
        media : 9
    },
    {
        nome: 'Pedro',
        idade: 20,
        sexo: 'M',
        media : 10
    },
    {
        nome: 'Ana',
        idade: 20,
        sexo: 'F',
        media : 10
    },
    {
        nome: 'Joana',
        idade: 20,
        sexo: 'F',
        media : 9
    }
]

//Mostre as informações do 2 e do 4 aluno do array de alunos. Use o for in para percorrer o array mostrando as informações.

//acesso das informações do segundo aluno do array
for(let x in alunos[1]){
    //console.log(`${x} : ${alunos[1].x}`) //nome: undefined o ponto gera um erro
    console.log(`${x} : ${alunos[1][x]}`) //nome: Maria
}

//acesso das informações do quarto aluno do array
for(let x in alunos[3]){    
    console.log(`${x} : ${alunos[3][x]}`) //nome: Ana
}


//mostrar todos os valores de todos os elementos do array
for(let i=0; i<alunos.length; i++){
    //faz o acesso aos elementos, um por vez. Todos são objetos
    for(let x in alunos[i]){
        //acessa todas as chaves e valores do objeto
        console.log(`${x} : ${alunos[i][x]}`)
    }
}
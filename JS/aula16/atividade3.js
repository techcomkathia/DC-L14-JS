//Você precisa criar 3 funções: uma função será responsável por calcular um adicional, recebendo uma porcentagem e um valor. Essa função retornará o valor com adicional.
//A segunda função deverá verficar a existencia de um atributo de um objeto, recebendo o nome do atributo e o objeto. A função deve retornar true ou false.
//A terceira função deverá receber um objeto e retornar uma cópia desse objeto modificado, obedecendo as seguntes regras:
// o salário será aumentado em 15% se o funcionário tiver mais de 5 anos de empresa. 
// o atributo dependentes deve ser adicionado ao objeto, caso o funcionário tenha filhos. O valor do atributo dependentes deve ser igual ao número de filhos do funcionário.
//DICA: quando o objeto não tiver o atributo filhos, você deverá considerar que o funcionário não tem filhos.

//A terceira função deve utilizar as duas primeiras funções para realizar as modificações necessárias no objeto.

let funcionario ={
    nome: "João",
    salario: 2000,
    anosEmpresa: 6,
    filhos: 2
}


let funcionario2 ={
    nome: "Maria",
    salario: 3000,
    anosEmpresa: 3
}


let func = [
    {
        nome: "João",
        salario: 2000,
        anosEmpresa: 6,
        filhos: 2
    },
    {
        nome: "Maria",
        salario: 3000,
        anosEmpresa: 3
    }
]

console.log(func[0].nome) // joao
console.log(func[1].nome) // maria


function calcularValorComAdicional(valor, adicional){
    return valor + (valor * adicional / 100)
}

function temAtributo( objt, atributo){
    return Object.keys(objt).includes(atributo)

}

function atualizarFuncionario(funcionario){
    let novoFuncionario = {...funcionario}

    if(novoFuncionario.anosEmpresa>5){
        novoFuncionario.salario = calcularValorComAdicional(novoFuncionario.salario, 15)
    }
    if (temAtributo(novoFuncionario, "filhos") && novoFuncionario.filhos > 0){
        novoFuncionario.dependentes  = novoFuncionario.filhos
    }
    return novoFuncionario
}

let retornoFuncao = atualizarFuncionario(funcionario)
console.log(funcionario, retornoFuncao )
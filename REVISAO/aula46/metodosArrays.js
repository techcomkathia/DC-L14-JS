let coisas = [
    {
        id:1,
        nome: "mesa",
        valor: 100
    },
    {
        id:2,
        nome: "cadeira",
        valor: 50
    },
    {
        id:3,
        nome: "cama",
        valor: 300
    },
    {
        id:4,
        nome: "sofa",
        valor: 500
    }
]

//forEach - executa uma funcao para cada elemento do array
let retornoForEach = coisas.forEach((coisa)=>{
    console.log(coisa.nome.toLocaleUpperCase()) //mostra o nome em maiusculo
})
console.log(retornoForEach)

let novoArray = coisas.map((coisa)=>{
    return coisa.nome
})
console.log(novoArray)

let retornoFilter = coisas.filter((coisa)=>{
    return coisa.valor >= 300
})
console.log(retornoFilter)

let total = coisas.reduce((acumulador, coisa)=>{
    return acumulador + coisa.valor
}, 0.8)
console.log(total)
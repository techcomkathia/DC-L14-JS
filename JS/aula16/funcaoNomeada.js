//definição de uma função nomeada sem parâmetros
//variavel global, existe em todo o código
let y = 5
let x = 20
function minhaFuncao(){
    //variável local, só existe dentro da função
    let x = 10
    console.log(`Olá, sou a função nomeada e o valor de x é ${x}`)
}
//chamada da função
minhaFuncao()
console.log(`O valor de y é ${y}`)
console.log(`O valor de x é ${x}`) //erro, x não existe fora da função

//função com parametros
function soma(a, b){
    console.log(`A soma de ${a} + ${b} é ${a + b}`)
}

//passagem de valores para os parâmetros de forma posicional
soma(5, 10)
//passagem de valores para os parâmetros a menos o valor será undefined 
soma(5)
//valores a mais para os parâmetros serão ignorados
soma(5, 10, 15)

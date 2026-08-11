// funções com retorno / sem retorno
// funções com e sem parâmetros
// funções anônimas (arrow functions)
// funções com callbacks
// funções assíncronas com async/await (serão exopl)

function testeComRetorno() {
    return 'Retorno da função'
    console.log('essa linha não será executada')
}

function testeComRetornoEparametro(a, b) {
    return a + b
    console.log('essa linha não será executada')
}

function funcaoSemRetorno(a, b) {
    console.log(a + b)
}

function funcaoComValoresPadroes(a = 100, b = 200) {
    console.log(a + b)
    return a + b
}

const x = funcaoSemRetorno(10, 20) //undefined
console.log(x)

const y = funcaoComValoresPadroes() //300
const z = funcaoComValoresPadroes(500) //700 -> passagem de valores para os parâmetros continua sendo posicional
console.log(y)


//Number -> int e float
//String -> texto, ou qualquer coisa dentro de aspas simples ou duplas
//Boolean -> true ou false
//Funções de conversão: Number(), String(), Boolean()

//Os valores abaixo são considerados falsos

//NaN -> conversão de tipo não adequada
//null -> variável vazia
//undefined -> um elemento não foi declarado / definido
//string vazia ""


function falarNome(nome) {
    console.log(`Ola ${nome}!`)
}


function dizerOi(nome){
    falarNome(nome)
    console.log("Boa noite!")
}


function minhaFuncaoComCallback(funcao, nome) {
    funcao(nome)
}


minhaFuncaoComCallback(dizerOi, "Joaquim")
minhaFuncaoComCallback((nome) => console.log(`Tudo bem, ${nome}`), "Joaquim")
minhaFuncaoComCallback((nome)=> console.log(`O NOME  ${nome} TEM ${nome.length} LETRAS`), "Joaquim")

// ----------------------------Trabalhando com erros personalizados--------------------------

//('').map((item) => { return item.toFixed(2)}) //esse tipo de dado não tem suporte ao método map

function multiplicar(a, b){
    return a * b
}

function somar(a, b){
    //criar um erro personalizado 
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('Os parâmetros informados devem ser do tipo number')
    }
    return a + b
}


console.log(multiplicar(2, '2'))
console.log(tratamentoDeErro(2, '2', somar))

function tratamentoDeErro(a,b, operacao){
    try{
        return operacao(a,b)
    }
    catch(e){
        console.log(e.message)
    }
}

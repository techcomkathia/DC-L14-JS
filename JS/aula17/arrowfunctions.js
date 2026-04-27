let gato={
    nome: 'cleitinho', 
    cor: 'laranja',
    falar: function(){
        console.log('miau');
    }
}

function minhaFuncao(){
    console.log('Olá, sou uma função tradicional!');
}

let cachorro = {
    nome: 'Rex',
    cor: 'preto',
    falar: () => console.log('au au')
}

let minhaArrowFunction = () => console.log('Olá, sou uma função arrow!');

console.log(()=> 2*2) //retorna 4
console.log(()=> 'palavra'.toLocaleUpperCase()) //retorna 'PALAVRA'


// existem 3 variações dass funções de seta : uma única linha, com retorno implícito, e sem parâmetros
// uma única linha, com retorno implícito
let umaLinha = () => 'Esta é uma função de seta de uma única linha com retorno implícito.';
//Retorna "Esta é uma função de seta de uma única linha com retorno implícito."
// e com parâmetros;
// e múltiplas linhas, com retorno explícito, e com parâmetros.
let umaLinhaComParametros = (param1, param2) =>  param1 + param2; //retorna a soma dos parâmetros

let comParametros = (param1, param2) => {
    let resultado = param1 + param2;
    return resultado;
}


function funcaoComCallback(valor1, valor2, callback){
    let retornoFuncao = callback(valor1, valor2);
    console.log(retornoFuncao)
}

funcaoComCallback(10,20, (a,b)=> a*b) //definição da função no local de uso do callback, retorna 200

//faça a multiplicação dos 2 números de o primeiro for par 
// faça a soma se o primeiro for ímpar
//arrow function com callback para realizar a operação matemática com mais de 1 linha, e retorno explícito
funcaoComCallback(10,20, (a,b) => {
    if(a%2 === 0){
        return a*b;
    } else {
        return a+b;
    }
})

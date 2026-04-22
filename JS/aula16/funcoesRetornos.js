let retornoConsole = console.log("Este é um retorno do console.log"); //undefined
//o método log do console não retorna nenhum valor
console.log(retornoConsole) //undefined


//estrutura de função com retorno
//os retornos permitem flexibilidade na hora de trabalhar com funções, podendo ser armazenados em variáveis, passados como argumentos para outras funções ou usados em expressões.

function soma(a, b) {
    return a + b
    console.log("Esta linha não será executada"); //tudo que estiver depois do return não será executado'
}

function divisao(a, b) {
    if (b === 0) {
        //caso essa situação ocorra, a função retorna sem executar o resto do código.
        return ; //o valor será undefined, pois não foi especificado um valor de retorno
    }
    alert("Divisão " + a/b);
    return a / b;
}

let resultadoSoma = soma(5, 3);
console.log(`O resultado da soma é: ${resultadoSoma}`); //8

let resultadoDivisao = divisao(10, 0);
console.log(`O resultado da divisão é: ${resultadoDivisao}`); //undefined, pois a função retornou sem valor devido à divisão por zero.

let resultadoDivisao2 = divisao(10, 2);
console.log(`O resultado da divisão é: ${resultadoDivisao2}`); //5
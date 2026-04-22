//crie 4 funções para as operações matemáticas básicas: soma, subtração, multiplicação e divisão. Cada função deve receber dois parâmetros e mostrar o resultado da operação no console. Importante, não existe divisão por zero, então a função de divisão deve verificar se o segundo parâmetro é diferente de zero antes de realizar a operação. Caso contrário, deve mostrar uma mensagem de erro no console.

//invocação da função antes da sua declaração : é possivel, pois o JavaScript tem um mecanismo chamado "hoisting" que eleva as declarações de funções para o topo do escopo, permitindo que sejam chamadas antes de serem definidas no código.
soma(5,3)


function soma(a, b) {
    console.log(`A soma de ${a} e ${b} é: ${a + b}`);
}

function subtracao(a, b) {
    console.log(`A subtração de ${a} e ${b} é: ${a - b}`);
}

function multiplicacao(a, b) {
    //variavel local, fora funcao é como se nao existisse
    let resultado = a * b;
    console.log(`A multiplicação de ${a} e ${b} é: ${resultado}`);
}

function divisao(a, b) {
    if (b > 0) {
        console.log(`A divisão de ${a} por ${b} é: ${a / b}`);
    }
    else if (b === 0) {
        console.log("Erro: Divisão por zero não é permitida.");
    }
    else {
        console.log("Erro: O segundo parâmetro deve ser um número positivo.");
    }
}
//após criar as funções teste cada uma delas, passando valores diferentes para os parâmetros, incluindo casos de divisão por zero para verificar se a mensagem de erro é exibida corretamente.

soma(10, 5);
subtracao(10, 5);
multiplicacao(10, 5);
divisao(10, 5);
divisao(10, 0);
divisao(10, -5);

function calculadora(a,b, operacao){
    switch(operacao){
        case '+':
            soma(a,b);
            break;
        case '-':
            subtracao(a,b);
            break;
        case '*':
            multiplicacao(a,b);
            break;
        case '/':
            divisao(a,b);
            break;
        default:
            console.log("Operação inválida");
    }
}
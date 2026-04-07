// Faça um programa que peça um número ao usuário: se esse número for par, adicione o dobro dele ao somatório dos pares, se for ímpar, apenas mostre no console.
//O programa deve ser executado até que o usuário digite uma palavra ou letra. 
//Ao finalizar o programa, mostre a soma dos números pares e a quantidade de números ímpares digitados.


//Dica: para verificar se o usuário digitou uma letra use isNaN() . Lembre-se a ! é uma negação, ou seja, !isNaN() verifica se o valor digitado é um número.

//1 variável para armazenar o número digitado pelo usuário
//1 variável para armazenar a soma dos números pares
//1 variável para contar a quantidade de números ímpares digitados

let numero= parseInt(prompt("Digite um número ou uma letra para encerrar: "))
//numero ou um NaN
let somaPares = 0
let quantidadeImpares = 0

//caso palavra = NaN -> true então !true => false - o programa é encerrado
//caso seja um número -> false então !false => true - o programa continua
while(!isNaN(numero)){

    if(numero%2 == 0){
        somaPares += numero*2
        console.log(`foi inserido um número par: ${numero} e a soma dos números pares é: ${somaPares}`) //adiciona o dobro do número par à soma dos pares
    }
    else{
        quantidadeImpares++ //incrementa a quantidade de números ímpares digitados
        console.log(`foi inserido um número ímpar: ${numero} e a quantidade de números ímpares digitados é: ${quantidadeImpares}`) //exibe o número ímpar digitado e a quantidade de números ímpares digitados
    }

    //atualizar a variável de controle para a próxima iteração
    numero= parseInt(prompt("Digite um número ou uma letra para encerrar: "))
}

//saiu do laço
console.log(`Programa encerrado. Foi digitada uma palavra ou letra. A soma dos números pares é: ${somaPares} e a quantidade de números ímpares digitados é: ${quantidadeImpares}`)
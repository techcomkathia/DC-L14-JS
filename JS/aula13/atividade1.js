
//ATIVIDADE: peça um número ao usuário e faça uma contagem regressiva até 0, no console ou no alert. Informe que só serão aceitos números positivos e maiores que 1. 
//contabilize quantos números pares e divisiveis por 5 existem nesse intervalo.
//utilizem o laço for. 

//&& para o and - todas as condições devem ser verdadeiras para o resultado ser verdadeiro
// % para o resto da divisão por 2 e 5


let numero = parseInt(prompt("Digite um número: "))
let paresDivisiveisPor5 = 0

for(let i= numero; i>=0; i--){

    //mostrar o valor no console
    console.log(i)

    //testar se esse número é par E divisível por 5
    if(i%2==0 && i%5==0){
        //contabilize quantos números pares e divisiveis por 5 existem nesse intervalo.
        paresDivisiveisPor5+=1
        console.log(`o número ${i} é divisivel por 2 e 5`)
    }
}

console.log(`No intervalo de ${numero} e 0 existem ${paresDivisiveisPor5} números divisíveis por 2 e 5 ao mesmo tempo.`)
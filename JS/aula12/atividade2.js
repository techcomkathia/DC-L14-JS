//Peça 2 números ao usuário: um número inicial e um número final de um intervalo. Imprima todos os números entre eles (inclusive) usando um loop while.
//5 e  50 -> contagem inicia em 5 e termina em 50

let numeroInicial = parseInt(prompt("Digite o número inicial do intervalo: "))
let numeroFinal = parseInt(prompt("Digite o número final do intervalo: "))

while (numeroInicial<= numeroFinal) {
    console.log(numeroInicial)

    //atualizar a variável de controle
    numeroInicial++    
}
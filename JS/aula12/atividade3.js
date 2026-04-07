//Faça um programa que peça um número positivo ao usuário e imprima todos os números pares de 0 até esse número, inclusive. 
//faça a soma de todos os números pares encontrados e todos os números ímpares ( duas somas separadas)

//para verificar a condição de paridade usaremos o operador "%" (resto da divisão)

let numero = parseInt(prompt("Digite um número positivo: "))
let contador = 0
let somaPares = 0
let somaImpares = 0

while (contador <= numero) {
    //caso seja par: mostrado no console e adicionado à soma dos pares
    if(contador%2 == 0){
        console.log(contador) //exibe o número par encontrado
        somaPares += contador //adiciona o número par encontrado à soma dos pares
    }
    // condição final: ímpar adicionado à soma dos ímpares
    else{
        somaImpares += contador //adiciona o número ímpar encontrado à soma dos ímpares
    }

    //atualizar a variável de controle
    contador++
  
}

console.log(`A soma dos números pares de 0 a ${numero} é: ${somaPares}`)
console.log(`A soma dos números ímpares de 0 a ${numero} é: ${somaImpares}`)


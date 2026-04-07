//exibir todos os números de 1 a 10 e mostrar a soma desses números
let contador = 1 //variavel de controle do laço
let soma = 0 //acumulador para a soma dos números

while (contador <= 10) {
    console.log(contador) //exibe o número atual
    soma += contador //adiciona o número atual à soma
    contador++ //incrementa o contador para o próximo número, atualizando a variável de controle
}

console.log("A soma dos números de 1 a 10 é: " + soma)



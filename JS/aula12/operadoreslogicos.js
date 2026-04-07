// && para o E(And) - todas as condições devem ser verdadeiras para o resultado ser verdadeiro
// || para o OU(Or) - pelo menos uma das condições deve ser verdadeira para o resultado ser verdadeiro

let numero = 'K'


if( (numero%2 ==0) && (numero%5 ==0)){
    //numero é par e múltiplo de 5 
    console.log("O número é par e múltiplo de 5")
}


if ( (numero%2 == 0 ) || (numero%5 ==0)){
    //numero é par ou múltiplo de 5
    console.log("O número é par ou múltiplo de 5")
}
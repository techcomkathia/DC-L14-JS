let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//somatório de todos os numeros do array
let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual)
//utilizado quando precisamos reduzir um array a um único valor, como uma soma, produto, ou mesmo um objeto.

//considerando valores anteriores ou valores iniciais para o acumulador
let somaComValorInicial = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 10)
//o segundo argumento do reduce é o valor inicial do acumulador. Se não for fornecido, o primeiro elemento do array será usado como valor inicial e a iteração começará a partir do segundo elemento.

//Fazer o cálculo de vendas, considerando um valor do ano anterior 
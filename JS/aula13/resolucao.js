
//leitura dos valores para calcular o desconto
let preco = parseFloat(prompt("Digite o preço do produto: "))
let corEtiqueta = prompt("Digite a cor da etiqueta: ").toLowerCase() // Transforma a string para minúscula

//VALIDAR A ENTRADA DE UMA COR DE ETIQUETA VÁLIDA (verde, amarelo, azul, vermelho)
//enquanto o usuário digitar uma cor diferente de verde, amarelo, azul ou vermelho, ele será perguntado novamente

// diferente ( negação no JS é a !)
// cor diferente de verde ======> corEtiqueta != 'verde'
// utilizar a estrutura OU porque não é possivel que uma cor seja igual a 4 cores ao mesmo tempo

// cor != 'verde' ou cor != 'amarelo' ou cor != 'azul' ou cor != 'vermelho' => mesmo digitando uma cor válida ele será perguntado novamente

// cor != 'verde' && cor != 'amarelo' && cor != 'azul' && cor != 'vermelho'

while (corEtiqueta != 'verde' && corEtiqueta != 'amarelo' && corEtiqueta != 'azul' && corEtiqueta != 'vermelho') {
    //atualização da variável de controle
    corEtiqueta = prompt("Digite a cor da etiqueta: ").toLowerCase()
}



//definição da que armazene o desconto
let desconto= 0

//definição do desconto de acordo com a cor (a exata ocorrencia da cor da etiqueta)
//verde, amarelo, azul, vermelho

switch (corEtiqueta) {
    case 'verde':
        //10% de desconto
        //preco = preco - (preco * 0.1)
        preco = preco * 0.9 // 90% do preço original
        desconto = 10
        break;
    case 'amarelo':
        //20% de desconto
        //preco = preco - (preco * 0.2)
        preco = preco * 0.8 // 80% do preço original
        desconto = 20
        break;
    case 'azul':
        //30% de desconto
        preco = preco * 0.7 // 70% do preço original
        desconto = 30
        break;
    case 'vermelho':
        //40% de desconto
        preco = preco * 0.6 // 60% do preço original
        desconto = 40
        break;
    //o código nunca chegará aqui, pois a corEtiqueta nunca vai ser diferente de verde, amarelo, azul ou vermelho
    default:
        desconto = 0
        break;
}

console.log(`O preço final do produto é R$ ${preco.toFixed(2)} com um desconto de ${desconto}%`)
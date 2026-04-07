/* Leia o preço de um produto e a cor da sua etiqueta. De acordo com a cor da etiqueta aplique um desconto sobre o produto. Verde - 10% | Amarelo - 20% | Azul - 30 % | Vermelho 40%*/

let preco = parseFloat(prompt("Digite o preço do produto: "))
let corEtiqueta = prompt("Digite a cor da etiqueta: ").toLowerCase() // Transforma a string para minúscula
let desconto= 0

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
    default:
        desconto = 0
        break;
}

console.log(`O preço final do produto é R$ ${preco.toFixed(2)} com um desconto de ${desconto}%`)
//você recebeu um arrays de produtos e com base na cor da etiqueta você deverá construir um novo array com o objeto contendo apenas o nome do produto e o preço com o desconto. Os demais atributos ( cor da etiqueta, departamento e preço original) devem ser ignorados, ou seja não devem ser incluidos como atributos do objeto no novo array. O desconto deve ser aplicado de acordo com a cor da etiqueta: vermelho = 20% de desconto, verde = 10% de desconto, amarelo = 5% de desconto.

let produtos = [
    {nome: "Camiseta", preco: 50.00, etiqueta: "vermelho", departamento: "Roupas"},
    {nome: "Calça", preco: 100.00, etiqueta: "verde", departamento: "Roupas"},
    {nome: "Tenis", preco: 150.00, etiqueta: "amarelo", departamento: "Calcados"},
    {nome: "Blusa", preco: 30.00, etiqueta: "vermelho", departamento: "Roupas"},
    {nome: "Sapato", preco: 80.00, etiqueta: "vermelho", departamento: "Calcados"},
    {nome: "Meia", preco: 10.00, etiqueta: "verde", departamento: "Roupas"},
    {nome: "Chinelo", preco: 20.00, etiqueta: "amarelo", departamento: "Calcados"}
]
//ao final mostre os dois arrays, o original e o novo array com os produtos e os preços com desconto.

//saída esperada:
// [
//     {nome: "Camiseta", preco: preco com desconto},
//     {nome: "Calça", preco: preco com desconto},
//     {nome: "Tenis", preco: preco com desconto},
//     {nome: "Blusa", preco: preco com desconto},
//     {nome: "Sapato", preco: preco com desconto},
//     {nome: "Meia", preco: preco com desconto},
//     {nome: "Chinelo", preco: preco com desconto}
// ]
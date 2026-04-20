let fruta= {
    nome: 'banana',
    cor: 'amarela',
    peso: '100g',
    preco: 3,
    //propriedade: 'teste'
}

for(let propriedade in fruta){
    console.log(propriedade, fruta[propriedade])
}
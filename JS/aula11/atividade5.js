let peso = Number(prompt( 'Digite seu peso em kg: ')) 
let altura = Number(prompt( 'Digite sua altura em metros: ')) 

// Calcular o IMC
let imc = peso / (altura * altura) 

// Determinar a condição com base no IMC calculado
let condicao = '' 

/*Abaixo de 18,5: Abaixo do peso
Entre 18,5 e 25: Peso normal
Entre 25 e 30: Acima do peso
Acima de 30: Obeso*/

if(imc > 30){
    condicao = 'Obeso'
}
else if(imc > 25){
    condicao = 'Acima do peso'
}
else if(imc > 18.5){
    condicao = 'Peso normal'
}
else{
    condicao = 'Abaixo do peso'
}


// Exibir a condição do IMC
alert(`Seu IMC é ${imc} e você está ${condicao}`) 
console.log(`Seu IMC é ${imc} e você está ${condicao}`)
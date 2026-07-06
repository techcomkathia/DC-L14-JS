// definir os recursos do módulo

function somar(a, b) {  
    console.log(`A soma de ${a} + ${b} = ${a + b}`);
    return a + b;
}

function subtrair(a, b) {
    console.log(`A subtração de ${a} - ${b} = ${a - b}`);
    return a - b;
}

function multiplicar(a, b) {
    console.log(`A multiplicação de ${a} * ${b} = ${a * b}`);
    return a * b;
}

function dividir(a, b) {
    console.log(`A divisão de ${a} / ${b} = ${a / b}`);
    return a / b;
}  

// exportar os recursos do módulo

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}
//importação do módulo 
const operacoesMatematicas = require('./operacoesMatematicas');
//operações matemáticas é um objeto que contém as funções do módulo
const {somar, subtrair, multiplicar, dividir} = require('./operacoesMatematicas'); //desestruturação do objeto operacoesMatematicas para obter as funções diretamente

let resultado = operacoesMatematicas.somar(10, 5);

console.log('resultado: ', resultado);
//importação do módulo 
const operacoesMatematicas = require('./operacoesMatematicas');
//operações matemáticas é um objeto que contém as funções do módulo
const {somar, subtrair, multiplicar, dividir} = require('./operacoesMatematicas'); //desestruturação do objeto operacoesMatematicas para obter as funções diretamente
const operacoesBancarias = require('./operacoesBancarias');

const concatenar = require('./concatenacaoArquivos');

//------------------EXEMPLOS--------------------

let resultado = operacoesMatematicas.somar(10, 5);
console.log('resultado: ', resultado);


//------- ATIVIDADE 1 -----------------

// Abrindo uma conta
const conta1 = operacoesBancarias.abrirConta("Maria Silva", "12345-6", "0001", 500);

console.log(conta1);

// Depositando
operacoesBancarias.depositar(conta1, 200);

// Sacando
operacoesBancarias.sacar(conta1, 150);

// Consultando extrato
operacoesBancarias.extrato(conta1);

//------- ATIVIDADE 2 -----------------

// Concatenando arquivos
//concatenar.concatenarArquivosAssincrono('./texto.txt', './texto2.txt', './texto3.txt');

concatenar.concatenarArquivosSincrono('./texto.txt', './texto2.txt', './texto4.txt');


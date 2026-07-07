//importação do módulo 
const operacoesMatematicas = require('./operacoesMatematicas');
//operações matemáticas é um objeto que contém as funções do módulo
const {somar, subtrair, multiplicar, dividir} = require('./operacoesMatematicas'); //desestruturação do objeto operacoesMatematicas para obter as funções diretamente
const operacoesBancarias = require('./operacoesBancarias');

const concatenar = require('./concatenacaoArquivos');

const gestorDbLoja = require('./gestorDbLoja');

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


//------- ATIVIDADE 3 -----------------
console.log('-------------------------------------------')
// Criando o banco de dados da loja
console.log(gestorDbLoja.lerBanco())
// Buscando um objeto no banco de dados
console.log(gestorDbLoja.lerColecao('frutas'))

console.log(gestorDbLoja.buscarObjeto('frutas', 2))

console.log(gestorDbLoja.escreverBanco(
    {
  frutas: [
    { id: 1, nome: 'Banana', preco: 2.5 },
    { id: 2, nome: 'Maçã', preco: 3 },
    { id: 3, nome: 'Laranja', preco: 2 },
    { id: 4, nome: 'Abacaxi', preco: 2.5 }
  ],
  legumes: [
    { id: 4, nome: 'Cenoura', preco: 1.5 },
    { id: 5, nome: 'Batata', preco: 2 },
    { id: 6, nome: 'Tomate', preco: 2.5 },
    { id: 7, nome: 'beterraba', preco: 1 },
    { id: 8, nome: 'abobrinha', preco: 1.5 }
  ]
}
)) // objeto não encontrado

gestorDbLoja.adicionarObjetoColecao('frutas', {id: 6, nome: 'Uva', preco: 2.5})

gestorDbLoja.criarNovaColecao('vegetais')
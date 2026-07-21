//1) Preparação 

/* Faça a instalação dos módulos :
sequelize
mysql2
bcrypt
*/

//npm i sequelize mysql2 bcrypt

/* Crie um banco de dados vazio no MySQL com o nome atividade20_07 

create database atividade20_07;
use atividade20_07;

*/

/*crie o arquivo servidorBanco e usuariosModel.js*/

//execute o arquivo usuariosModel.js  PARA CRIAR A TABELA DE USUARIOS

//2) Criação dos métodos para o CRUD de usuarios
// crie a função assíncrona que receba os parametros necessarios para criar um novo registro na tabela. Essa função deve receber como parametro o nome, nomeUsuario, email e senha. Essa função deverá retornar uma mensagem de sucesso ou erro.
//para a senha deverá ser criptografada com o módulo bcrypt (método hashSync) e o salt deverá ser criado com o módulo bcrypt (método genSaltSync).

//para o sucesso: retorne o seguinte objeto {dados: informaçãoBanco.dataValues}
//para erro : retorne o seguinte objeto {erro: erro.message}


//3) Criação das funções de leitura (todos os usuarios) e busca por id
//crie uma função "buscarTodosUsuarios" que retorne todos os registros da tabela de usuarios. Se sucesso: {dados: array de objetos} Se erro: {erro: erro.message}
//Dica: use o método map para percorrer o array e criar um novo array de objetos com apenas os atributo dataValues de cada um dos elementos do array original

//crie uma função "buscarUsuarioPorId" que receba como parametro o id do usuario a ser buscado. Se sucesso: {dados: objeto.dataValues} Se erro: {erro: erro.message}
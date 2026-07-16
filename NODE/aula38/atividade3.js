//No Banco Livraria faça a criação de um livro a partir do modelo Livro com o método create.
//Capte o retorno da função assíncrona e exiba-o no console, apenas o atributo dataValues.

//No banco Projetos, crie um usuário. Faça o mesmo procedimento que foi feito no Banco Livraria.


//Após o sucesso das inserções tente 2 casos de erros : 
//1- Tentar inserir um livro sem que a chave estrangeira autor_id exista. Exempo id 5000
//2- Tentar inserir um projeto sem o nome. Exemplo nome NULL

const LivrariaBanco = require('./2.modelos.js')
const ProjetosBanco = require('./criacaoColunasSequelize.js')

/*LivrariaBanco.Livros.create({
    titulo: 'O Senhor dos Aneis',
    ano_publicacao: 1954,
    preco: 49.99,
    autor_id: 3,
    categoria_id: 110
}).then((result) => {
    console.log(result.dataValues)
}).catch((error) => {
    console.log(error)
})*/

/*ProjetosBanco.UsersModel.create({
    name: 'user 1',
    username: 'username 1',
    password: 'password 1',
    email: 'email 1'
}).then((result) => {
    console.log(result.dataValues)
}).catch((error) => {
    console.log(error)
})*/

/*ProjetosBanco.UsersProjectsModel.create({
    users_id: 1,
    project_id: 1
}).then((result) => {
    console.log(result.dataValues)
}).catch((error) => {
    console.log(error)
})*/

LivrariaBanco.Livros.create({
    titulo: 'O Senhor dos Aneis',
    ano_publicacao: 1954,
    preco: 49.99,
    autor_id: 5000,
    categoria_id: 110
}).then((result) => {
    console.log(result.dataValues)
}).catch((error) => {
    console.log(error)
})
//Faça as definições dos modelos :
const {Sequelize, DataTypes} = require('sequelize')
const conexaoBanco = new Sequelize('projetos', 'root', 'km2026', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logger: false //desabilita o logger dos comandos sql mostrados no terminal
}
);

/*Projects
Columns:
id int AI PK 
name varchar(45) 
description varchar(45) 
date date*/
const ProjectsModel = conexaoBanco.define('projects', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name :{
        type: DataTypes.STRING(45),
        allowNull: false
    },
    description :{
        type: DataTypes.STRING(45),
        allowNull: false
    },
    date :{
        type: DataTypes.DATEONLY,
        allowNull: false
    }
})

/*users
Columns:
id int AI PK 
nome varchar(45) 
username varchar(45) 
senha varchar(12) 
email varchar(45)*/
const UsersModel = conexaoBanco.define('users', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name :{
        type: DataTypes.STRING(45),
        allowNull: false
    },
    username :{
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    },
    password :{
        type: DataTypes.STRING(12),
        allowNull: false
    },
    email :{
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    }
    }
)

/*users_has_projects
Columns:
users_id int PK 
project_id int PK*/
const UsersProjectsModel = conexaoBanco.define('users_has_projects', {
    users_id :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references:{
            model: UsersModel,
            key: 'id'
        }
    },
    project_id :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references:{
            model: ProjectsModel,
            key: 'id'
        }
    }
}
)

//Importante: criar um outro objeto de conexão ao banco de dados, para trabalhar com o segundo banco de dados. Use o banco com as tabelas que existem localmente no seu computador, caso os nomes sejam diferentes.


// UsersProjectsModel.belongsToMany(ProjectsModel, {foreignKey: 'project_id'})
// UsersProjectsModel.belongsToMany(UsersModel, {foreignKey: 'users_id'})




/*Teste de conexão e sincronização*/
conexaoBanco.authenticate()
    .then(() => {
        conexaoBanco.sync({alter: true}) //atualiza as tabelas para corresponder ao modelo
        //vai realizar a criação das 2 colunas gerenciadas pelo sequelize (created_at e updated_at)
        console.log('Conectado ao banco de dados')
    }).catch(() => {
        console.log('Erro ao se conectar ao banco de dados')
    })




/* Execução dos testes dos métodos dos modelos */
// ProjectsModel.create({
//     name: 'projeto 1',
//     description: 'description 1',
//     date: '2021-01-01'
// }).then((result) => {
//     console.log(result.dataValues)
// }).catch((error) => {
//     console.log(error)
// })

/*UsersModel.create({
    name: 'user 1',
    username: 'username 1',
    password: 'password 1',
    email: 'email 1'
}).then((result) => {
    console.log(result.dataValues)
}).catch((error) => {
    console.log(error)
})

UsersProjectsModel.create({
    users_id: 1,
    project_id: 1
}).then((result) => {
    console.log(result.dataValues)
}).catch((error) => {
    console.log(error)
})*/

module.exports = {ProjectsModel, UsersModel, UsersProjectsModel}
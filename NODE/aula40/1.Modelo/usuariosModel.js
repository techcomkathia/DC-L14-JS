//cria uma tabela de usuarios para armazenar os dados dos usuarios cadastrados
const {DataTypes} = require('sequelize')
const servidorBanco = require('./servidorBanco')

const Usuarios = servidorBanco.define('usuarios', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.STRING, //não fazemos a deliminação de caracteres, pois a senha vai ser armazenada criptografada
            allowNull: false
        }
    })

module.exports = Usuarios

//Usuarios.sync({alter: true}).then(() => console.log('Tabela criada com sucesso')).catch((erro) => console.log(erro))

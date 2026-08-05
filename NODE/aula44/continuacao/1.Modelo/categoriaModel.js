const { DataTypes } = require('sequelize')
const conexaoBanco = require('./servidorBanco')

const Categoria = conexaoBanco.define('Categoria', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },

    use_in_menu: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    }
})


//Categoria.sync({alter: true})

module.exports = Categoria
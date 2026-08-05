const {Sequelize} = require('sequelize')
const path = require('path')
require('dotenv').config({ path:path.resolve(__dirname,'../../.env') });

console.log(process.env.BANCO_NOME)


const conexaoBanco = new Sequelize(process.env.BANCO_NOME, process.env.BANCO_USUARIO, process.env.BANCO_SENHA,{
    host: process.env.BANCO_HOST,
    port: process.env.BANCO_PORTA,
    dialect: 'mysql',
    logger: false //desabilita o logger dos comandos sql mostrados no terminal
}
);

/*const conexaoBanco = new Sequelize('aula39_l14', 'root', 'km2026', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logger: false //desabilita o logger dos comandos sql mostrados no terminal
}
);*/



conexaoBanco.authenticate(  
)
.then(() => {
    conexaoBanco.sync({alter: true})
    console.log('Conectado ao banco de dados')
}).catch(() => {
    console.log('Erro ao se conectar ao banco de dados')
})

module.exports = conexaoBanco
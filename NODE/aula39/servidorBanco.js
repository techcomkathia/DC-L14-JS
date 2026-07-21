const {Sequelize} = require('sequelize')


const conexaoBanco = new Sequelize('aula39_l14', 'root', 'km2026', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logger: false //desabilita o logger dos comandos sql mostrados no terminal
}
);

conexaoBanco.authenticate(  
)
.then(() => {
    //conexaoBanco.sync({alter: true})
    console.log('Conectado ao banco de dados')
}).catch(() => {
    console.log('Erro ao se conectar ao banco de dados')
})

module.exports = conexaoBanco
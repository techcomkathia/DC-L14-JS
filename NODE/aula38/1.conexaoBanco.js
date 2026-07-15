const {Sequelize} = require('sequelize')

//nomeBanco, usuarioBanco, senhaBanco, objeto de configuração {host, dialect, port e/ou logger}
const conexaoBanco = new Sequelize('livrarial14', 'root', 'km2026', {host: 'localhost', port: 3306, dialect: 'mysql'});

//testar a conexão com o banco
conexaoBanco.authenticate()
.then(() => {
    console.log('Conectado ao banco de dados')
}).catch(() => {
    console.log('Erro ao se conectar ao banco de dados')
})

module.exports = conexaoBanco
//Atividade 1
//Faça a definição do modelo Autores :)
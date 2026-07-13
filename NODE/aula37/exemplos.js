//importação dos módulos
const express = require('express'); //vem em susbstituição ao módulo http
const fs = require('fs'); // vai ser a camada de acesso aos dados (bancoJson)

const app = express(); // cria uma instância do express e permite o uso dos métodos do express e todos os recursos definidos para o framework

//CRIAÇÃO DAS ROTAS
/*
C - CREATE com método POST
R - READ com métodos GET
U - UPDATE com métodos PUT
D - DELETE com métodos DELETE
*/
//padrão de criação da rota é app.metodo(url, callback)

//criação da rota raiz
app.get("/", (req, res) => {
    res.json({ mensage: "Olá Mundo", status: 200 , api: 'API da aula 37' , autora: 'Káthia Rocha'});
    res.end()
});


//EXECUÇÃO DO SERVIDOR
app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001 http://localhost:3001");
});

const express = require('express');
const fs = require('fs');

const app = express();
const conteudo = fs.readFileSync('bancoJson.json', 'utf-8');
const banco = JSON.parse(conteudo)

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        autor: 'Vitor',
        versao: '1.0',
        objetivo: 'Listar frutas'
    });
});

app.get('/frutas', (req, res)=>{
    res.status(200).json({
        status: 200,
        quantidade: banco.frutas.length,
        dados: banco.frutas
    })
})

app.listen(4000, ()=>{
    console.log('servidor rodando na porta 4000 http://localhost:4000')
})
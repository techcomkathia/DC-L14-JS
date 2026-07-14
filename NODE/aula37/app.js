const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json())
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
    let dados = banco.frutas
    const {maior, menor} = req.query
    if(maior){
        dados = dados.filter(item => item.preco >= maior)
    }
    if(menor){
        dados = dados.filter(item => item.preco <= menor)
    }
    res.status(200).json({
        status: 200,
        quantidade: dados.length,
        dados: dados
    })
})

app.post('/frutas', (req, res)=>{
    //dados da requisiçã. Verficar se existe o atributo nome e preco , e se eles contém informações
    const dados = req.body
    console.log(dados)
    if(!dados.nome || !dados.preco || dados.nome == '' || dados.preco == ''|| dados.preco<=0){
        res.status(400).json({
            status: 400,
            response: 'nome e preco obrigatorios'
        })
        return
    }
    //criar o id para o objeto
    dados.id = banco.frutas.length + 1
    //se os dados passarem na validação, adicionar ao banco
    banco.frutas.push(dados) //adicionamos ao obj banco

    //persistir os dados no banco json
    fs.writeFileSync("./bancoJson.json", JSON.stringify(banco))

    res.status(201).json({
        status: 201,
        response: 'item criado',
        dados: dados
    })
})

app.get('/frutas/:id', (req, res)=>{
    const {id} = req.params

    const dado = banco.frutas.find(item => item.id == id)
    
    if(!dado){
        res.status(404).json({
            status: 404,
            response: 'item nao encontrado'
        })
        return
    }

    res.status(200).json({
        status: 200,
        response: dado
    })
})


app.get('/legumes', (req, res)=>{
    res.status(200).json({
        status: 200,
        quantidade: banco.legumes.length,
        dados: banco.legumes
    })
})

app.get('/legumes/:id', (req, res)=>{
    const {id} = req.params

    const dado = banco.legumes.find(item => item.id == id)
    
    if(!dado){
        res.status(404).json({
            status: 404,
            response: 'item nao encontrado'
        })
        return
    }

    res.status(200).json({
        status: 200,
        response: dado
    })
})

app.post('/legumes', (req, res)=>{
    //dados da requisiçã. Verficar se existe o atributo nome e preco , e se eles contém informações
    const dados = req.body
    console.log(dados)
    if(!dados.nome || !dados.preco || dados.nome == '' || dados.preco == ''|| dados.preco<=0){
        res.status(400).json({
            status: 400,
            response: 'nome e preco obrigatorios'
        })
        return
    }
    //criar o id para o objeto
    dados.id = banco.legumes.length + 1
    //se os dados passarem na validação, adicionar ao banco
    banco.legumes.push(dados) //adicionamos ao obj banco

    //persistir os dados no banco json
    fs.writeFileSync("./bancoJson.json", JSON.stringify(banco))

    res.status(201).json({
        status: 201,
        response: 'item criado',
        dados: dados
    })
})


app.listen(4000, ()=>{
    console.log('servidor rodando na porta 4000 http://localhost:4000')
})
//importação dos módulos
const express = require('express') //vem em susbstituição ao módulo http
const fs = require('fs'); // vai ser a camada de acesso aos dados (bancoJson)
const dadosBanco = JSON.parse(fs.readFileSync('bancoTeste.json', 'utf-8'));

const app = express(); // cria uma instância do express e permite o uso dos métodos do express e todos os recursos definidos para o framework

app.use(express.json()); //isso dá a capabidade de interpretar o corpo da requisição no formato json

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

app.get('/colecao1', (req, res)=>{
    //configurando parametros de consulta
    const {limite} = req.query
    const {primeiraLetra} = req.query
    let dados = dadosBanco.colecao1
    if(limite){
        //vamos percorrer o array e fazer um filtro
        dados = dadosBanco.colecao1.filter(item => item.length > limite)
    }
    if(primeiraLetra){
        //vamos percorrer o array e fazer um filtro
        dados = dadosBanco.colecao1.filter(item => item[0] == primeiraLetra)
    }
    res.status(200).json({
        status: 200,
        response: dados
    })
})
//para filtrar por um limite consumir rota : http://localhost:3001/colecao1?limite=2 
//palavras com mais de 2 caracteres
//para filtrar palavras com mais de n caracteres E iniciada com a letra a consumir rota : http://localhost:3001/colecao1?limite=2&primeiraLetra=a



//buscar 1 dado no array da colecao1
app.get('/colecao1/:index', (req, res)=>{
    //:valor -> recebe o parâmetro da rota obrigatório
    const {index} = req.params //recebe o parâmetro da rota obrigatório
    //const id = req.params.id

    const dado = dadosBanco.colecao1[index-1]
    //caso fosse um objeto em um array utilizaria o método find no array.
    //const dado = dadosBanco.array.find(item => item.id == id)

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


app.post('/colecao1', (req, res)=>{
    const dados = req.body //recebe os dados do corpo parseados em json por conta do app.use(express.json())
    console.log(dados)

    //validação do conteúdo
    if(!dados.conteudo || dados.conteudo == ''){
        res.status(400).json({
            status: 400,
            response: 'conteudo obrigatorio. envie um objeto com o atributo conteudo e um valor'
        })
        return
    }

    dadosBanco.colecao1.push(dados.conteudo)

    //persistir os dados no banco json
    fs.writeFileSync("./bancoTeste.json", JSON.stringify(dadosBanco))

    res.status(201).json({
        status: 201,
        response: 'item criado'
    })
})

//EXECUÇÃO DO SERVIDOR
app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001 http://localhost:3001");
});

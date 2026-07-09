const http = require("http") // permite criar um servidor http para chamadas do tipo GET, POST, PUT E DELETE
const fs = require("fs") // permite trabalhar com arquivos, como leitura e escrita
const { json } = require("stream/consumers")



// -------------criação do servidor--------------
/*
// o método createServer recebe um callback que recebe dois parâmetros: requisição e resposta
// o objeto requisição representa a requisição feita pelo cliente tendo acesso aos parâmetros da requisição como url, metodo, headers etc
// objeto resposta representa a resposta enviada pelo servidor para o cliente, tendo acesso aos parâmetros da resposta como status, headers etc*/
const server =  http.createServer((req, res) => {
    
    /*o método writeHead recebe dois parâmetros: status e headers(objeto de configuração para o tipo de conteudo da resposta). Trabalhando com rotas diferentes: 
    / rota raiz             /colecao1               /colecao2*/
    let db = JSON.parse(fs.readFileSync("./bancoTeste.json", "utf-8"))

    if(req.method == 'GET' && req.url == '/'){
        res.writeHead(200, { "Content-Type": "application/json" })
        res.write(JSON.stringify(
            {
                status: 200,
                response: { mensage: "olá mundo" }
            })
        )
    }
    else if(req.method == 'GET'&& req.url == '/colecao1'){
        res.writeHead(200, { "Content-Type": "application/json" })
        res.write(JSON.stringify(
            {
                status: 200,
                response: db.colecao1
            })
        )
    }
    else if(req.method == 'POST' && req.url == '/colecao1'){
        req.on('data', (data) => {
            console.log(data.toString())
            let dados = JSON.parse(data.toString()) //transformando os dados em json
            db.colecao1.push(dados.conteudo)
            console.log(db.colecao1)
            //persistir os dados no banco json
            fs.writeFileSync("./bancoTeste.json", JSON.stringify(db))
        })
        res.writeHead(200, { "Content-Type": "application/json" })
        res.write(JSON.stringify(
            {
                status: 201,
                response: 'item criado'
            })
        )
    }
    else if(req.url == '/colecao2'){
        res.writeHead(200, { "Content-Type": "application/json" })
        res.write(JSON.stringify(
            {
                status: 200,
                response: db.colecao2
            })
        )
    }
    else{
        res.writeHead(404, { "Content-Type": "application/json" })
        res.write(JSON.stringify({
            status: 404,
            erro: { mensage: "rota nao encontrada" }
        }))
    }
    res.end() 
})

// --------------execução do servidor----------------
/*/ o método listen recebe dois parâmetros: porta e callback
// o callback será executado quando o servidor receber uma requisição. Esse callback pode receber dois parâmetros: erro e dados, pra tratar os erros ou os dados da requisição*/
server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
    console.log("http://localhost:3000")
})
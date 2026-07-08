/* const resposta = {
    status: 200,
    api: `API da atividade 1 da aula 36`,
    frutas: 'quantidade De Frutas DoBanco',
    verduras: 'quantidade De Verduras Do Banco',
    dados: {
        frutas: [],
        verduras: []
    }

}*/

const http = require("http") // permite criar um servidor http para chamadas do tipo GET, POST, PUT E DELETE
const fs = require("fs") // permite trabalhar com arquivos, como leitura e escrita

const DadosBanco = JSON.parse(fs.readFileSync("bancoJson.json", "utf-8")) // leitura do banco de dados e conversão para objeto javascript


const servidor = http.createServer( (requisicao, resposta) => {
    //configuração do cabeçalho da resposta
    
    // montar o objeto de resposta
    const objetoResposta = {
        status: 200,
        api: `API da atividade 1 da aula 36`,
    }

    if(requisicao.url == "/"){
       resposta.writeHead(200, { "Content-Type": "application/json" })
       objetoResposta.dados = {
           frutas: DadosBanco.frutas,
           verduras: DadosBanco.vegetais
       }
       objetoResposta.qtdFrutas = DadosBanco.frutas.length
       objetoResposta.qtdVerduras = DadosBanco.vegetais.length

    }
    else if(requisicao.url == "/frutas"){
       resposta.writeHead(200, { "Content-Type": "application/json" })
       objetoResposta.dados = DadosBanco.frutas
    }
    else if(requisicao.url == "/verduras"){
       resposta.writeHead(200, { "Content-Type": "application/json" })
       objetoResposta.dados = DadosBanco.vegetais
    }
    else{
        resposta.writeHead(404, { "Content-Type": "application/json" })
        objetoResposta.status = 404
        objetoResposta.mensagem = "Rota nao encontrada"
        objetoResposta.erro = "404"
    }

    resposta.write(JSON.stringify(objetoResposta))
    resposta.end()

})

//configuração da execução do servidor
servidor.listen(3001, () => {
    console.log("Servidor rodando na porta 3001")
    console.log("http://localhost:3001")
})

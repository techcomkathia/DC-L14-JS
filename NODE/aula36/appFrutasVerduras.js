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
    resposta.writeHead(200, { "Content-Type": "application/json" })
    // montar o objeto de resposta
    const objetoResposta = {
        status: 200,
        api: `API da atividade 1 da aula 36`,
        frutas: DadosBanco.frutas.length,
        verduras: DadosBanco.legumes.length,
        dados: {
            frutas: DadosBanco.frutas,
            verduras: DadosBanco.legumes
        }
    }

    //escrever o corpo da resposta
    resposta.write(JSON.stringify(objetoResposta))
    //encerrar a resposta
    resposta.end()

})

//configuração da execução do servidor
servidor.listen(3001, () => {
    console.log("Servidor rodando na porta 3001")
    console.log("http://localhost:3001")
})

const http = require("http") // permite criar um servidor http para chamadas do tipo GET, POST, PUT E DELETE
const fs = require("fs") // permite trabalhar com arquivos, como leitura e escrita

const DadosBanco = JSON.parse(fs.readFileSync("bancoJson.json", "utf-8"))

const servidor = http.createServer((requisicao, resposta) => {

    const objetoResposta = {
        status: 200,
        api: "API da atividade 1 da aula 36",
    }

    if (requisicao.method == "GET" && requisicao.url == "/") {

        resposta.writeHead(200, { "Content-Type": "application/json" })

        objetoResposta.dados = {
            frutas: DadosBanco.frutas,
            verduras: DadosBanco.vegetais
        }

        objetoResposta.qtdFrutas = DadosBanco.frutas.length
        objetoResposta.qtdVerduras = DadosBanco.vegetais.length
    }

    else if (requisicao.method == "GET" && requisicao.url == "/frutas") {

        resposta.writeHead(200, { "Content-Type": "application/json" })
        objetoResposta.dados = DadosBanco.frutas

    }

    else if (requisicao.method == "POST" && requisicao.url == "/frutas") {

        requisicao.on("data", (data) => {

            const dadosRequisicao = JSON.parse(data.toString())

            if (!dadosRequisicao.nome || !dadosRequisicao.preco) {

                resposta.writeHead(400, { "Content-Type": "application/json" })

                objetoResposta.status = 400

                // CORREÇÃO: a mensagem dizia "preço", mas a validação verifica "categoria".
                objetoResposta.mensagem = "Fruta não criada. Os atributos nome e preco são obrigatórios."

                // CORREÇÃO: encerra a resposta imediatamente para não continuar criando a fruta.
                resposta.end(JSON.stringify(objetoResposta))
                return
            }

            // CORREÇÃO: só executa se a validação passar.
            const id = DadosBanco.frutas.length + 1

            dadosRequisicao.id = id

            DadosBanco.frutas.push(dadosRequisicao)

            fs.writeFileSync(
                "bancoJson.json",
                JSON.stringify(DadosBanco, null, 2)
            )

            resposta.writeHead(201, { "Content-Type": "application/json" })

            objetoResposta.status = 201
            objetoResposta.mensagem = "Sucesso na criação da fruta."
            objetoResposta.dados = dadosRequisicao

            // CORREÇÃO: a resposta do POST deve ser enviada aqui,
            // pois o processamento é assíncrono.
            //com o resposta.end() a requisição é encerrada .
            resposta.end(JSON.stringify(objetoResposta))
            //resposta.write() : escreve dados na resposta, mas não finaliza a conexão.
            //resposta.end() : finaliza a resposta. Se receber um argumento, escreve esse conteúdo e encerra a resposta ao mesmo tempo.
        })

        // CORREÇÃO: impede que o código continue até o write/end do final da função.
        return
    }

    else if (requisicao.method == "GET" && requisicao.url == "/verduras") {

        resposta.writeHead(200, { "Content-Type": "application/json" })
        objetoResposta.dados = DadosBanco.vegetais

    }

    else {

        resposta.writeHead(404, { "Content-Type": "application/json" })

        objetoResposta.status = 404
        objetoResposta.mensagem = "Rota não encontrada."
        objetoResposta.erro = "404"

    }

    // CORREÇÃO: este write/end atende apenas às rotas GET e 404.
    // O POST não chega aqui porque possui um "return".
    resposta.write(JSON.stringify(objetoResposta))
    resposta.end()

})

servidor.listen(3001, () => {
    console.log("Servidor rodando na porta 3001")
    console.log("http://localhost:3001")
})
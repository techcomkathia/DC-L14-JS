const fs = require("fs");

// Função para ler o arquivo JSON
function lerBanco() {
    const dados = fs.readFileSync("./bancoJson.json", "utf-8");
    return JSON.parse(dados);
}

//ler coleção
function lerColecao(colecao) {
    const dados = JSON.parse(fs.readFileSync("./bancoJson.json", "utf-8"))
        
    if(dados[colecao]){
        return dados[colecao]
    }
    else{
        return "Coleção nao encontrada"
    }
}


// Função para escrever no arquivo JSON
function escreverBanco(objeto) {
    fs.writeFileSync(
        "./bancoJson.json",
        JSON.stringify(objeto),
        "utf-8"
    );
}

// Função para buscar um objeto por coleção e id
function buscarObjeto(colecao, id) {
    const banco = lerBanco();

    // Verifica se a coleção existe
    if (!banco[colecao]) {
        return "Coleção não encontrada.";
    }

    const objeto = banco[colecao].find(item => item.id === id);

    if (!objeto) {
        return "Objeto não encontrado.";
    }

    return objeto;
}

function adicionarObjetoColecao(colecao, objeto) {
    const banco = lerBanco();
    if(!banco[colecao]){
       console.log("Coleção nao encontrada")
       //se a coleção não existir não se pode adicionar o objeto
    }
    banco[colecao].push(objeto);
    //atualizar o banco inteiro
    escreverBanco(banco);
}

function criarNovaColecao(colecao) {
    const banco = lerBanco();
    banco[colecao] = [];
    escreverBanco(banco);
    console.log(`Coleção ${colecao} criada com sucesso!`);
}

module.exports = {
    lerBanco,
    lerColecao,
    escreverBanco,
    buscarObjeto,
    adicionarObjetoColecao,
    criarNovaColecao
};
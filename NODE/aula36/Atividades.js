// Atividade 1 
// Com o módulo http e fs crie um servidor http que receba uma requisição GET e retorne o conteúdo de um arquivo JSON. A configuração do objeto de resposta deve conter o cabeçalho Content-Type com o valor application/json, além do status 200.
//O formato da resposta deve ser: 

const resposta = {
    status: 200,
    api: `API da atividade 1 da aula 36`,
    frutas: 'quantidade De Frutas DoBanco',
    verduras: 'quantidade De Verduras Do Banco',
    dados: {
        frutas: [],
        verduras: []
    }

}

// o servidor deve ser executado na porta 3001 e durante a execução do servidor deve ser impresso no console o seguinte texto: "Servidor rodando na porta 3001"


//Atividade 2
//Modifique a rota existente para que a resposta configurada seja devolvida apenas quando a rota raiz for solicitada. A rota raiz deve ser acessada na url http://localhost:3001
//Crie uma rota para frutas, onde ao ser acessada deve retornado um objeto com os dados de frutas do banco de dados. A rota deve ser acessada na url http://localhost:3001/frutas
//Crie uma rota para verduras, onde ao ser acessada deve retornado um objeto com os dados de verduras do banco de dados. A rota deve ser acessada na url http://localhost:3001/verduras
//Crie uma rota para tratamento de erro, para quando uma rota nao for encontrada onde ao ser acessada deve retornar um objeto com o status 404 e a mensagem "Rota nao encontrada". A rota deve ser acessada na url http://localhost:3001/qualquercoisa




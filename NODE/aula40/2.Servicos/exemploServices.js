//faz acesso a camada de modelo e retorna um objeto para a próxima etapa ( controlador)

async function exemplo() {
    try{
        return {
        dados: 'rota de exemplo acessada',
        info: 'exemplo de resposta montada no serviço'
    }
    }
    catch(erro){
        return{
            erro: erro.message
        }
    }
}

module.exports = {exemplo}
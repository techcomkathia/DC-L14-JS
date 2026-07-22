// para os serviços de usuarios crie os controladores :

//Atividade 1 : Crie o controlador getUsuarios
/* Se o objeto retornado pela função buscarUsuarios da camada de serviços tiver o atributo dados, configure a seguinte resposta:

//status:200
//dados: retorno dados do serviço
//mensagem: usuarios selecionados com sucesso

Se o objeto tiver o atributo erro:

//status: 500
erro: erro ao selecionar usuarios


//Importante: faça a instalação do express e no arquivo app crie a rota get para a url '/usuarios'. 
*/

const usuariosServices = require('../2.Servicos/usuariosServices')

async function getUsuarios(req, res) {

    const response = await usuariosServices.buscarUsuarios()
    
    if(response.dados){
        res.status(200).json({
            status: 200,
            dados: response.dados,
            qtdUsuarios: response.dados.length,
            mensagem: 'usuarios selecionados com sucesso'
        })
    }
    else{
        res.status(500).json({
            status: 500,
            erro: response.erro
        })
    }
    
}

async function getUsuarioId(req, res) {

    const {id} = req.params

    const response = await usuariosServices.buscarUsuarioPorId(id)
    
    if(response.dados){
        res.status(200).json({
            status: 200,
            dados: response.dados,
            mensagem: 'usuario selecionado com sucesso'
        })
    }
    else if(response.erro == 'usuario nao encontrado'){
        res.status(404).json({
            status: 404,
            erro: response.erro
        })
        
    }
    else{
        res.status(500).json({
            status: 500,
            erro: response.erro
        })
    }
    
}

module.exports = {
    getUsuarios,
    getUsuarioId
}


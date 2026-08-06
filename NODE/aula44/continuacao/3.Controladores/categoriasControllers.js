const categoriasServices = require('../2.Servicos/categoriaServices.js')


//postCategoria -> criarCategoria
async function postCategoria(req, res) {
    try{
        const resposta = await categoriasServices.criarCtegoria(req.body)
        //sucesso -> res.status(201).json(resposta)
        if(resposta.dados){
            return res.status(201).json(resposta)
        }
        else if(resposta.erro){
            return res.status(400).json(resposta)
        }
    }
    catch(err){
        return res.status(500).json({status: 500, erro: err.message})
    }
    //erro -> res.status(400).json(resposta)
}

//putCategoria -> atualizarCategoria

async function putCategoria(req, res) {
    
    try{
        const resposta = await categoriasServices.atualizarCategoria(req.params.id, req.body)
        //sucesso -> res.status(200).json(resposta)
        if(resposta.dados){
            return res.status(200).json(resposta)
        }
        else if(resposta.erro){
            return res.status(400).json(resposta)
        }
    }
    catch(err){
        return res.status(500).json({status: 500, erro: err.message})
    }

    
}

async function getCategorias(req, res) {

    try{
        const resposta = await categoriasServices.buscarCategorias()
        //sucesso -> res.status(200).json(resposta)
        if(resposta.dados){
            resposta.status = 200
            return res.status(200).json(resposta)
        }
        else if(resposta.erro){
            resposta.status = 400
            return res.status(400).json(resposta)
        }
    }
    catch(err){
        return res.status(500).json({status: 500, erro: err.message})
    }
    
}

async function deleteCategoria(req, res) {
    const {id} = req.params

    try{
        const resposta = await categoriasServices.deletarCategoria(id)
        //sucesso -> res.status(200).json(resposta)
        if(resposta.dados){
            resposta.status = 200
            return res.status(200).json(resposta)
        }
        else if(resposta.erro){
            resposta.status = 400
            return res.status(400).json(resposta)
        }

    }
    catch(err){
        return res.status(500).json({status: 500, erro: err.message})
    }


}

async function getCategoriaId(req, res) {
    
    const {id} = req.params
    try{
        const resposta = await categoriasServices.buscarUmaCategoria(id)
        //sucesso -> res.status(200).json(resposta)
        if(resposta.dados){
            return res.status(200).json(resposta)
        }
        else if(resposta.erro){
            return res.status(400).json(resposta)
        }
    }
    catch(err){
        return res.status(500).json({status: 500, erro: err.message})
    }
}

module.exports = {postCategoria, putCategoria, getCategorias, getCategoriaId, deleteCategoria}


//DESAFIO: Construir os middlewares para as funções de atualização de categoria e criação de categoria


//criação das rotas para categorias, lembrando que as rotas de categorias devem ser privadas



function validarNovaCategoria(req, res, next){
    const{name, slug, use_in_menu} = req.body

    if(!name || !slug || !use_in_menu){
        return res.status(400).json({status: 400, erro: "name, slug e use_in_menu devem ser informados. Sao obrigatórios"})
    }

    if(use_in_menu !== true && use_in_menu !== false){
        return res.status(400).json({status: 400, erro: "use_in_menu deve ser true ou false. Sao obrigatórios"})
    }

    next()
    
}

function validarCategoriaAtualizacao(req, res, next){
    const{name, slug, use_in_menu} = req.body

    //tenha pelo menos um dos atributos informados
    if(!name && !slug && !use_in_menu){
        return res.status(400).json({status: 400, erro: "para o método de atualização, pelo menos um dos atributos deve ser informado: name, slug ou use_in_menu "})
    }

    next()
    

}

module.exports = {validarNovaCategoria, validarCategoriaAtualizacao}
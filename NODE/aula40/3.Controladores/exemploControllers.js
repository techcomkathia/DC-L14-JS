const exemploServices = require('../2.Services/exemploServices')

async function getExemplo(req, res){

    const retornoDadosServico = await exemploServices.exemplo()

    if(retornoDadosServico.erro){
        res.status(400)
        res.json({
            status:400,
            dados:retornoDadosServico
        })
        return
    }

    res.status(200)
    res.json(
        {
            status:200,
            dados: retornoDadosServico.dados,
            info: retornoDadosServico.info
        }
    )    
}

module.exports={
    getExemplo
}
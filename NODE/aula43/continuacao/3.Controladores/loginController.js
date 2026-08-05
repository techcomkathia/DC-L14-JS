const loginService = require('../2.servicos/loginServices')

async function postlogin(req, res) {
    const {email, senha} = req.body

    const resposta = await loginService(email, senha)

    //erro-> 400
    if(resposta.erro) {
        return res.status(400).json(resposta)
    }

    //info-> 200
    return res.status(200).json(resposta)    
}

module.exports = postlogin
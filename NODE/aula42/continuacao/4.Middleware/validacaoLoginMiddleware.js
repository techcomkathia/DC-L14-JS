function validarLogin(req, res, next) {
    const {email, senha} = req.body
    
    if(!email || !senha){
        return res.status(400).json({status: 400, erro: "email ou senha nao informados. São obrigatórios"})
    }
    
    next()
}

module.exports = validarLogin
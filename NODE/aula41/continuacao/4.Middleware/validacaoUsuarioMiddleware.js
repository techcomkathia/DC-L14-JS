function validarUsuario(req, res, next) {
const {nome, username, email, senha, confirmarSenha} = req.body

//se todos os campos obriigatorios forem preenchidos
    if(!nome || !username || !email || !senha || !confirmarSenha){
        res.json({status: 400, info: "campos obrigatórios: nome, username, email, senha, confirmarSenha", erro: "campos obrigatórios"})
    }

    //se a senha e a confirmacao de senha forem iguais
    if(senha !== confirmarSenha){
        res.json({status: 400, info: "senha e confirmacao de senha devem ser iguais", erro: "senha e confirmacao de senha devem ser iguais"})
    }

    next()
}

module.exports = validarUsuario
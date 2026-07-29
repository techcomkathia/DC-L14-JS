const Usuarios = require('../1.Modelo/usuariosModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function login(email, senha){
    const usuarioEncontrado = await Usuarios.findOne({where: {email: email}})

    if(!usuarioEncontrado) {
        return {status: 400, erro: 'email nao cadastrado'}
    }

    const senhaCorreta = await bcrypt.compare(senha, usuarioEncontrado.dataValues.senha)

    if(!senhaCorreta) {
        return {status: 400, erro: 'senha ou email incorreto'}
    }
    //ATIVIDADE 1
    //aplique os conceitos vistos com o JWT para o servico de login
    const token = jwt.sign({
       id: usuarioEncontrado.dataValues.id,
       email: usuarioEncontrado.dataValues.email
    },
   'minhaPalavraSecreta',
    { expiresIn: '1h'}
    )

    return {status: 200, info: 'sucesso no login', token: token}
   


}

module.exports = login
const Usuarios = require('../1.Modelo/usuariosModel')
const bcrypt = require('bcrypt')

async function login(email, senha){
    const usuarioEncontrado = await Usuarios.findOne({where: {email: email}})

    if(!usuarioEncontrado) {
        return {status: 400, erro: 'email nao cadastrado'}
    }

    const senhaCorreta = await bcrypt.compare(senha, usuarioEncontrado.dataValues.senha)

    if(!senhaCorreta) {
        return {status: 400, erro: 'senha ou email incorreto'}
    }

    return {status: 200, info: 'usuario logado com sucesso$$$$$$$$$$$$$'}


}

module.exports = login
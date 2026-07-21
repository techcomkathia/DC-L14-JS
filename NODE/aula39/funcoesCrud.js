const Usuarios = require('./usuariosModel')
const bcrypt = require('bcrypt')

//C - criar um usuario

async function criarUsuario(nome, nomeUsuario, email, senha){
    //hash da senha
    try{
        const salt = bcrypt.genSaltSync(10)
        const senhaHash = await bcrypt.hash(senha, salt)

        const usuario = await Usuarios.create({
        nome: nome,
        username: nomeUsuario,
        email: email,
        senha: senhaHash
        })
        console.log(usuario)
        return {dados: usuario.dataValues}

    }
    catch(error){
        console.log(error)
        return {erro: error.message}
    }
}

criarUsuario('Bartô', 'bart', 'bart@gato.com', 'pate')
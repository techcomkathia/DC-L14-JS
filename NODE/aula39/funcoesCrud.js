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
async function buscarUsuarios(){
    try{
        const dadosBanco = await Usuarios.findAll()
        const usuarios = dadosBanco.map((usuario) => usuario.dataValues)

        console.log(dadosBanco, usuarios)
        return {dados: usuarios}
    }
    catch(error){
        console.log(error)
        return {erro: error.message}
    }
    
}

async function buscarUsuarioPorId(id){
    try{
        const dadosBanco = await Usuarios.findByPk(id)
        if(dadosBanco){
            console.log(dadosBanco)
            return {dados: dadosBanco.dataValues}
        }
        else{
            console.log('usuario nao encontrado')
            return {erro: 'usuario nao encontrado'}
        }
    }
    catch(error){
        console.log(error)
        return {erro: error.message}
    }
    
}
//criarUsuario('Bartô', 'bart', 'bart@gato.com', 'pate')
//buscarUsuarios()
//buscarUsuarioPorId(10)

async function atualizarUsuario(novoNome, id){

    try{
        const dados = await Usuarios.update({nome:novoNome},{where:{id:id}})

        if(dados>0){
            console.log(dados)
            return {dados: 'usuario atualizado'}
        }
        else{
            console.log('usuario nao encontrado')
            return {erro: 'usuario nao encontrado'}
        }
    }
    catch(error){
        console.log(error)
        return {erro: error.message}
    }
    
}



atualizarUsuario('Bartozinho', 2) //id não existe

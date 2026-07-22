const Usuarios = require('../1.Modelo/usuariosModel')
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
        //ATIVIDADE 4:
        //primeira etapa:

        //No serviço faça uma adaptação para as regras de negócio:
        //caso os campos não seja preenchidos, retorne um erro: {status: 400, info: 'campos obrigatórios: nome, username, email, senha', erro: 'campos obrigatórios'}

        //o email deve ser unico (use o método findOne com o parâmetro where:{email: email} para verificar se o email ja existe, caso exista retorne um erro: {status: 400, info: 'email ja cadastrado', erro: 'email ja cadastrado'})
        
        //caso de sucesso: retorne todas as informações MENOS o hash da senha 
        //{status: 200, info: 'usuário criado com sucesso', dados: {id, nome, username, email}}
        return {dados: usuario.dataValues}







        //crie uma função postUsuario que a partir dos dados recebidos no corpo da requisição, crie um novo usuário. Esse controlador deverá retornar o seguinte objeto:
        // sucesso: 200 {status: 200, info: 'usuário criado com sucesso', dados: retorno do serviço}
        // erro: 500 {status: 500, info: 'não foi possivel criar o usuário', erro: erro.message}
        

    }
    catch(error){
        console.log(error)
        return {erro: error.message}
    }
}


async function buscarUsuarios(){
    try{
        const dadosBanco = await Usuarios.findAll()
        const usuarios = dadosBanco.map((usuario) => {
            //retornar todos os dados do atributo datavalues MENOS a senha
            const dados = {
                id: usuario.dataValues.id,
                nome: usuario.dataValues.nome,
                username: usuario.dataValues.username,
                email: usuario.dataValues.email
            }
            return dados
        })

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
            //todas as informações MENOS a senha
            //atividade 3: fazer a modificação no serviço, construir o controlador com os retornos adequados: 200/ 404 /500, juntamente com o corpo da resposta
            //configurar uma rota get para a url '/usuarios/:id'
            //DICA: no controlador use o req.params.id para captar o valor o parâmetro da rota
            return {dados: {
                id: dadosBanco.dataValues.id,
                nome: dadosBanco.dataValues.nome,
                username: dadosBanco.dataValues.username,
                email: dadosBanco.dataValues.email
            }}
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



module.exports = {
    criarUsuario,
    buscarUsuarios,
    buscarUsuarioPorId,
    atualizarUsuario
}

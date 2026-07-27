const {Express} = require('express')
const controladorExemplo = require('./3.Controladores/exemploControllers')

const app = Express()
app.use(Express.json())
//----------------------EXEMPLO DE MIDDLEWARE DE VALIDACAO----------------------
function validacaoExemploMiddleware(req, res, next){
    const {nome, email, senha} = req.body
    if(!nome || !email || !senha){
        res.status(400)
        res.json({
            status: 400,
            response: 'nome, email e senha obrigatorios'
        })
        return
    }
    next()
}

//----------------------aplicacao em uma rota----------------

app.post('/exemplo', validacaoExemploMiddleware, (req, res)=> controladorExemplo.postExemplo(req, res))
//faz a criação de um 'exemplo' no banco de dados
//o exemplo precisa de um nome, email e senha


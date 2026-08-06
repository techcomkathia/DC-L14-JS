const Express = require('express')
const exemploController = require('./3.Controladores/exemploControllers')

const loginController = require('./3.Controladores/loginController')
const loginValidacao = require('./4.Middleware/validacaoLoginMiddleware')



const RotasExemplo = require('./5.Rotas/ExemploRotas')

const RotasUsuarios = require('./5.Rotas/UsuariosRotas')

const RotasCategorias = require('./5.Rotas/CategoriasRotas')


const app = Express()

//middleware de body parse 
app.use(Express.json())

app.use('/exemplo', RotasExemplo)

app.use('/usuarios', RotasUsuarios)

// app.use('/categorias', RotasCategorias)


//rotas -> controladores -> serviços -> modelo -----> banco de dados

app.post('/login', loginValidacao, (req, res)=> loginController(req, res))



//crie uma rota para excluir um usuario
//crie o serviço o controlador e a rota. A rota será autenticada.



//crie uma rota autenticada para atualização de senha
//o método utilizado será o put
//no modelo usar o metodo update.

app.listen('3000', ()=>{
    console.log('Servidor rodando na porta 3000.')
})
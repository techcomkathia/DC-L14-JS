const Express = require('express')
const exemploController = require('./3.Controladores/exemploControllers')
const usuariosController = require('./3.Controladores/usuariosControllers')
const UsuarioValidacao = require('./4.Middleware/validacaoUsuarioMiddleware')
const loginController = require('./3.Controladores/loginController')
const loginValidacao = require('./4.Middleware/validacaoLoginMiddleware')
const autenticacaoMiddleware = require('./4.Middleware/autenticacaoMiddleware')

const app = Express()

//middleware de body parse 
app.use(Express.json())


//rotas -> controladores -> serviços -> modelo -----> banco de dados
/*app.get('/exemplo', (req, res)=> exemploController.getExemplo(req, res))*/

app.get('/usuarios', (req, res)=> usuariosController.getUsuarios(req, res))

app.post('/usuarios', UsuarioValidacao, (req, res)=> usuariosController.postUsuario(req, res))

app.get('/usuarios/:id', (req, res)=> usuariosController.getUsuarioId(req, res))

app.post('/login', loginValidacao, (req, res)=> loginController(req, res))

app.get('/exemplo', autenticacaoMiddleware, (req, res)=>res.json({msg: 'exemplo autenticado'}))

app.delete('/usuarios/:id', autenticacaoMiddleware, (req, res)=> usuariosController.deleteUsuario(req, res))

app.put('/usuarios/:id', autenticacaoMiddleware, (req, res)=> usuariosController.putUsuario(req, res))



//crie uma rota para excluir um usuario
//crie o serviço o controlador e a rota. A rota será autenticada.



//crie uma rota autenticada para atualização de senha
//o método utilizado será o put
//no modelo usar o metodo update.

app.listen('3000', ()=>{
    console.log('Servidor rodando na porta 3000.')
})
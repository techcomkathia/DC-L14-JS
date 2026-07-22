const Express = require('express')
const exemploController = require('./3.Controladores/exemploControllers')
const usuariosController = require('./3.Controladores/usuariosControllers')

const app = Express()

//middleware de body parse 
app.use(Express.json())

//rotas -> controladores -> serviços -> modelo -----> banco de dados
app.get('/exemplo', (req, res)=> exemploController.getExemplo(req, res))

app.get('/usuarios', (req, res)=> usuariosController.getUsuarios(req, res))

app.get('/usuarios/:id', (req, res)=> usuariosController.getUsuarioId(req, res))

app.listen('3000', ()=>{
    console.log('Servidor rodando na porta 3000.')
})
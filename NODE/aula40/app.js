const Express = require('express')
const exemploController = require('./3.Controladores/exemploControllers')

const app = Express()

//middleware de body parse 
app.use(Express.json())

//rotas -> controladores -> serviços -> modelo -----> banco de dados
app.get('/exemplo', (req, res)=> exemploController.getExemplo(req, res))

app.listen('3000', ()=>{
    console.log('Servidor rodando na porta 3000.')
})
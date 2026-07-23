const Express = require('express')
const exemploController = require('./3.Controladores/exemploControllers')
const usuariosController = require('./3.Controladores/usuariosControllers')

const app = Express()

//middleware de body parse 
app.use(Express.json())

//rotas -> controladores -> serviços -> modelo -----> banco de dados
app.get('/exemplo', (req, res)=> exemploController.getExemplo(req, res))

app.get('/usuarios', (req, res)=> usuariosController.getUsuarios(req, res))

app.post('/usuarios', (req, res)=> usuariosController.postUsuario(req, res))

app.get('/usuarios/:id', (req, res)=> usuariosController.getUsuarioId(req, res))

//DESAFIO:
//Para as funções de "atualização de senha para um usuário e exclusão de um usuário" utilize esses arquivos produzidos na aula passada para criar os controladores que consomem esses serviços . 
//Importante: nas funções é necessário fazer as validações:
// atualização de senha: o usuario existe? a senha atual corresponde ao hash armazenado no banco de dados?
// exclusão de um usuario: o usuario existe? 
//crie retornos com status 200 e 400 para as funções dos serviços de atualização de senha e exclusão de um usuario
//crie rotas para consumir os controladores putSenha e deleteUsuario


app.listen('3000', ()=>{
    console.log('Servidor rodando na porta 3000.')
})
const {Router} = require('express')
const route = Router()

const usuariosController = require('../3.Controladores/usuariosControllers')
const UsuarioValidacao = require('../4.Middleware/validacaoUsuarioMiddleware')
const autenticacaoMiddleware = require('../4.Middleware/autenticacaoMiddleware')
route.get('/', (req, res)=> usuariosController.getUsuarios(req, res))

route.post('/', UsuarioValidacao, (req, res)=> usuariosController.postUsuario(req, res))

route.get('/:id', (req, res)=> usuariosController.getUsuarioId(req, res))

route.delete('/:id', autenticacaoMiddleware, (req, res)=> usuariosController.deleteUsuario(req, res))

route.put('/:id', autenticacaoMiddleware, (req, res)=> usuariosController.putUsuario(req, res))

module.exports = route

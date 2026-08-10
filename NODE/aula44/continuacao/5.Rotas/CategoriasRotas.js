const {Router} = require('express');
const router = Router();
const controladores = require('../3.Controladores/categoriasControllers')
const middlewares = require('../4.Middleware/categoriasMiddleware')
const middlewareAutenticacao = require('../4.Middleware/autenticacaoMiddleware')

//criação das rotas para categorias:
//ambas as rotas são privadas, teremos também o middleware de validação dos dadas
//post /categoria (privada)
router.post('/',middlewareAutenticacao, middlewares.validarNovaCategoria,(req, res)=>controladores.postCategoria(req,res))

//put /categoria/:id (privada)
router.put('/:id',middlewareAutenticacao, middlewares.validarCategoriaAtualizacao, (req, res)=>controladores.putCategoria(req,res))


//get /categoria (pública)
router.get('/', (req, res)=>controladores.getCategorias(req, res))

router.get('/:id', (req, res)=>controladores.getCategoriaId(req, res))

//rota.metodo('url', controlador) -> rotas públicas
//rota.metodo('url', middleware, controlador) -> rotas privadas
//rotas privadas + validação de dados -> 2 middlewares
//rota.metodo('url', middleware1, middleware2, controlador)

//IMPORTANTE : Para rota get faça o serviço, controlador e aplique a rota. A rota get será a única rota pública para categorias.


//Crie as rotas :
//get /categorias/:id (pública)
//delete /categorias/:id (privada)
router.delete('/:id', middlewareAutenticacao, (req, res)=>controladores.deleteCategoria(req, res))

//criar serviço -> criar controlador -> aplicar a rota

module.exports = router


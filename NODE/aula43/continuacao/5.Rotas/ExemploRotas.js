const {Router} = require('express');
const router = Router();
const autenticacaoMiddleware = require('../4.Middleware/autenticacaoMiddleware')


router.get('/', (req, res) => {
    res.status(200).json({mensagem: 'Ola'})
})

router.get('/:id', (req, res) => {
    res.status(200).json({mensagem: `Ola ${req.params.id}`})
})

router.delete('/:id', autenticacaoMiddleware, (req, res) => {
    res.status(200).json({mensagem: `Ola ${req.params.id}`})
})

module.exports = router

/* Crie um arquivo para as rotas de usuários.Importe-o no arquivo app.js e faca a configuração do roteamento.
Importante: para rotas privadas continuaremos a utilizar o middleware autenticacaoMiddleware, para rotas publicas usaremos apenas o controlador*/
const jwt = require('jsonwebtoken')

const path = require('path')
require('dotenv').config({ path:path.resolve(__dirname,'../../.env') });

//Atividade 2
/*Crie um middleware de autenticação que recebe como parametro req, res e next.
na requisição faça a separação do token pelo espaco
verifique se ele é válido.
IMPORTANTE: use try e catch
se o token for valido, passe para o controlador.
se o token for invalido, retorne um status 401 e uma mensagem de erro.*/


async function autenticacaoMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const tokenDecodado = jwt.verify(token, process.env.PALAVRA_SECRETA)
        req.usuario = tokenDecodado.usuario
        req.token = tokenDecodado
        next()
    } catch (error) {
        return res.status(401).json({erro: 'token invalido'})
    }
}

module.exports = autenticacaoMiddleware
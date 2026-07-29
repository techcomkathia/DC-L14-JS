//importação jwt

const jwt = require('jsonwebtoken');
require('dotenv').config();

//método sign (payload, chaveSecreta, opções de configuração)
//payload: informações que serão armazenadas no token, um objeto
//chaveSecreta: chave usada para assinar o token, USAR UMA VARIÁVEL DE AMBIENTE 
//opções de configuração: expiração do token, algoritmo de assinatura, etc.
const token = jwt.sign({
    info:'exemplo token',
    adm: true,
    id: 1,
    email: 'HbNl0@example.com'
},
process.env.PALAVRA_SECRETA_JWT,
{
    expiresIn: '1s'
    //Possiveis valores: '1d', '1h', '1m', '1s'
}
)

console.log(`token gerado pelo método sign: ${token}, salve para uso futuro`)

try{
    const tokenDecodado = jwt.verify(token, process.env.PALAVRA_SECRETA_JWT)
    console.log(tokenDecodado)
}
catch(error){
    //ou jwt expired ou invalid signature
    console.log(error.message)
    console.log('A função verify falhou e o token não é válido')
}

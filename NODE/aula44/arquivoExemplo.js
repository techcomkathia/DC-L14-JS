//objetivo desse arquivo é consumir as variáveis de ambiente

//este arquivo está na raiz da aplicação ( ou seja no mesmo diretório do .env )

require('dotenv').config();

console.log(process.env.MEU_TEXTO)
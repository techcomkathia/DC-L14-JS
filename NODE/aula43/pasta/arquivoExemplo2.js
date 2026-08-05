//objetivo desse arquivo é consumir as variáveis de ambiente

//este arquivo está em um outro diretório ( ou seja não está na raiz ou mesmo diretorio do .env )

require('dotenv').config({ path: '../.env' });

console.log(process.env.MEU_TEXTO)
console.log(Number(process.env.MINHA_VARIAVEL_EXEMPLO)+10)

//Atividade 1
/*Faça a instalação do dotenv no projeto e crie o arquivo .env, igore-o e faça a configuração necessária para que a palavra secreta usada nos arquivos de serviços e middleware, seja substituida pela variável de ambiente correta. 
O mesmo deve ser feito para os arquivos que tenham as credenciais de acesso ao banco de dados.*/
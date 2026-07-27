//--------------ATIVIDADE-1---------------------------------
/*Faça a modificação do arquivo usuariosServices, para retirar a validacao dos campos obrigatorios. 
Essa validação ficará concentrada no middleware de validacaoUsuarioMiddleware.
Além de confirmar se nome, email e senha estao preenchidos, ele também deverá confirmar a senha e a confirmacao de senha sejam iguais.
Crie uma nova pasta para o middleware e faça a aplicação em uma rota

Importante: Agora a rota post deverá recever email,senha, confirmação de senha e nome.

Arquivos que devem ser editados:2.Servicos/usuariosServices.js e app.js
*/


//-----------------ATIVIDADE - 2 -------------------------------
/*Crie uma rota de login para o usuário. 
post /login
o corpo requisição deve conter email e senha.
caso o email não esteja cadastrado no banco de dados, retorne um objeto com o status 400 e a mensagem de erro "email nao cadastrado".
caso a senha esteja incorreta, retorne um objeto com o status 400 e a mensagem de erro "senha ou email incorreto"
caso email e senha sejam corretos, retorne um objeto com o status 200 e uma mensagem de sucesso: "usuario logado com sucesso".
Essa etapa posteriormente(próxima aula) será substituida pelo token jwt
ETAPAS: criação do serviço de login, criação do controlador de login, middleware de validação de login, criação da rota de login
o serviço de login usará o modelo usuario, e executará o método findOne do sequelize, com o objeto where: {email: emailfornecido}

o controlador captará o retorno do serviço e montará o objeto de resposta:status 200 e uma mensagem de sucesso: "usuario logado com sucesso".

o middleware de validação de login vai captar o corpo da requisição e validar se o email e senha foram preenchidos.

a rota de login controlador de login

*/


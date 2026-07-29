//receber um token e verificar se ele é valido

//o texto do atributo req.headers.authorization deve ser da forma "Bearer <token>"
//ou seja, vamos captar o token separando a string pelo espaco
const token = req.headers.authorization.split(' ')[1] //Bearer <token>

//Atividade 2
/*Crie um middleware de autenticação que recebe como parametro req, res e next.
na requisição faça a separação do token pelo espaco
verifique se ele é válido.
IMPORTANTE: use try e catch
se o token for valido, passe para o controlador.
se o token for invalido, retorne um status 401 e uma mensagem de erro.*/
/* Atividade 1 
-Faça a instalação do express e nodemon no projeto.
(npm i express nodemon)
-Crie um arquivo chamado app.js e instacie o express dentro dele.
-Crie uma rota raiz, onde ao ser acessada deve retornar um objeto com o status 200 e um json com as informações do autor, versao da api e objetivo 
-crie uma rota get para /frutas onde ao ser acessada deve retornar um objeto com o status 200 e um json com a quantidade de fruras e o array de frutas do banco de dados.
-Execute o servidor e deixe-o rodando na porta 4000.
*/


/* Atividade 2

-Faça a adaptação da rota get /frutas para legumes.
-Faça a rota post para /frutas fazendo a verificação dos campos obrigatórios (nome, preco).*/
//Caso sucesso 
let resposta = {
    status:201,
    mensagem:"Fruta criada com sucesso",
    dados:{
        nome:"nome fruta",
        preco:"preco fruta"
    }
}
//Caso erro 
resposta = {
    status:400,
    mensagem:"Erro ao criar fruta",
    erro:"Campos nome e preco sao obrigatórios"
}

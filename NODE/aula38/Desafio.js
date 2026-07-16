/*Escolha um banco de dados que já fizemos as definições dos modelos e importe os modelos para esse arquivo.*/

//Para as tabelas com chaves primárias crie uma função assincrona que receba os parametros necessarios para criar um novo registro na tabela. Essa função deverá retornar uma mensagem de sucesso ou erro. Ex.:
//Sucesso 
const sucesso = {
    status:201,
    mensagem:"Fruta criada com sucesso",
    dados:"atributo dataValue do retorno do método create"
}

//Erro 
const erro ={
    status:400,
    mensagem:"Erro ao criar fruta",
    erro:"Campos nome e preco sao obrigatórios"
}

//Crie uma função assíncrona que receba o id de um elemento em um modelo específico e busque ele no banco de dados. Se ele for encontrado retorne um objeto com o status 200 e o objeto encontrado. Se ele nao for encontrado retorne um objeto com o status 404 e a mensagem de erro apropriada.
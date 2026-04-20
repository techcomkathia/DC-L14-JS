//crie um objeto que represente um usuário com : nome, email, cargo, idade, senha e telefone
//essas informações deverão ser solicitadas ao usuário e armazenadas no objeto
//ao final mostre cada uma das informações armazenadas no objeto no console no seguinte formato

//nome: valor
//email: valor
//cargo: valor
//idade: valor
//senha: valor
//telefone: valor

//criação do objeto já com todas as propriedades, recebendo os valores digitados pelo usuário
let usuario = {
    nome: prompt('Digite o nome do usuário: '),
    email: prompt('Digite o email do usuário: '),
    cargo: prompt('Digite o cargo do usuário: '),
    idade: prompt('Digite a idade do usuário: '),
    senha: prompt('Digite a senha do usuário: '),
    telefone: prompt('Digite o telefone do usuário: ')
}

//criação do objeto sem as propriedades
let usuario2 = {}
//fazendo a criação das propriedades após a criação do objeto
usuario2.nome = prompt('Digite o nome do usuário: ')
usuario2.email = prompt('Digite o email do usuário: ')
usuario2.cargo = prompt('Digite o cargo do usuário: ')  
usuario2.idade = prompt('Digite a idade do usuário: ')
usuario2.senha = prompt('Digite a senha do usuário: ')
usuario2.telefone = prompt('Digite o telefone do usuário: ')

console.log('nome: ' + usuario.nome)
console.log('email: ' + usuario.email)
console.log('cargo: ' + usuario.cargo)
console.log('idade: ' + usuario.idade)
console.log('senha: ' + usuario.senha)
console.log('telefone: ' + usuario.telefone)
/*//----------------ATIVIDADE 2 ------------
//Usando o conceito da atividade 1 crie um segundo componente chamado InfoUsuarioProps.jsx
//Esse componente deve retornar a seguinte estrutura:
// Nome: propriedade nome
// Idade: propriedade idade
// Profissão: propriedade profissão
// Email: propriedade email
//Dica: use o objeto props para acessar as propriedades do componente pai ou faça a desestruturação das propriedades {propriedade1, propriedade2, ...}
//use o componente 3x com diferentes valores para as propriedades no arquivo App.jsx*/


export default function InfoUsuarioProps({nome, idade, profissao, email}) {
    return (
        <div>
            <h1>Nome: {nome}</h1>
            <h2>Idade: {idade}</h2>
            <h3>Profissão: {profissao}</h3>
            <h4>Email: {email}</h4>
        </div>
    );
}

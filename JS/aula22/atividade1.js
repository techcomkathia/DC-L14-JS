//usando uma função async com await, incluindo tratamento de erro com try/catch faça a chamada a api 'https://fakestoreapi.com/users' e mostre o total de usuários cadastratos na tela. Crie uma lista com o nome e sobrenome de cada usuário. Ex:

/*
<div>
    <h1>Usuários cadastrados: 5</h1>

    <ul>
        <li>Nome 1 Sobrenome 1</li>
        <li>Nome 2 Sobrenome 2</li>
        ...
    </ul>
</div>
*/

//DICAS: 
//getElementById OU querySelector, createElement, innerHTML, appendChild
//fetch, await DENTRO DE UMA FUNÇÃO ASYNC
//try/catch PARA TRATAR ERROS
//O retorno da api é um array de objetos, use o forEach para percorrer o array e mostrar os dados na tela

async function mostrarUsuarios() {
    try {
        const response = await fetch('https://fakestoreapi.com/users');
        const data = await response.json();

        const totalUsuarios = data.length;
        const listaUsuarios = document.createElement('ul');

        data.forEach(usuario => {
            const li = document.createElement('li');
            //Colocando iniciais maiusculas
            //charAt(0) - pega a primeira letra da string e transforma em maiuscula
            //slice(1) - pega o resto da string
            //concatenando as duas strings para forma o nome completo com a primeira letra maiuscula
            usuario.name.firstname = usuario.name.firstname.charAt(0).toUpperCase() + usuario.name.firstname.slice(1);
            usuario.name.lastname = usuario.name.lastname.charAt(0).toUpperCase() + usuario.name.lastname.slice(1);

            li.textContent = `${usuario.name.firstname} ${usuario.name.lastname}`;
            listaUsuarios.appendChild(li);
        });

        const divUsuarios = document.getElementById('usuarios');
        divUsuarios.innerHTML = '';
        divUsuarios.appendChild(document.createElement('h1')).textContent = `Usuários cadastrados: ${totalUsuarios}`;
        divUsuarios.appendChild(listaUsuarios);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
    }
}

mostrarUsuarios();
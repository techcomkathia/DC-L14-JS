//Para a rota auth da fake store, implemente a seguinte  interface: um formulario com campo de nomeUsuario e senhaUsuario. Ao fazer a submissão deverá ser verificado primeiro se o usuário existe: get em usuarios. User o método find para procurar pelo nome do usuário. Caso ele não exista, retorne um erro na interface em um campo reservado. Caso ele exista, verifique se a senha informada corresponde ao do usuário. Caso a senha seja diferente, retorne um erro na interface em um campo reservado.

//Passadas todas as verificações, faça uma chamada na rota https://fakestoreapi.com/auth/login com o método post e retorne o token do usuário na interface em um campo reservado.

//Importante: use uma função assíncrona com await e use o fetch para fazer a chamada da api. Trate os erros com try/catch
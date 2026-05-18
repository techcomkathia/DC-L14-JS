//crie um formulário que tenha os campos 
//username
//email
//password
//confirme a senha
//Quando o formulario for submetido validade as senhas e caso não sejam iguais exiba um alerta com a mensagem "Senhas diferentes"
//Se as senhas passarem na validação faça uma chamada na API 'https://fakestoreapi.com/users' com o método POST e crie um novo usuário com os dados do formulário. Exiba um alerta com a mensagem "Usuário criado com sucesso" e limpe o formulário.

//dica! crie uma função assíncrona com await e use o fetch para fazer a chamada da api
//para o evento de submit do formulário use o preventDefault para evitar o comportamento padrão do formulário, faça a validação das senhas e se as senhas forem diferentes exiba um alerta com a mensagem "Senhas diferentes" caso contrário faça a chamada da api e exiba um alerta com a mensagem "Usuário criado com sucesso"

//CONCEITOS EXPLORADOS:
//eventos de formulários (preventDefault, addEventListener, submit, change)
//validação de formulários (validade de senhas iguais, validade de campos preenchidos)
//fetch (com url e objeto de configuração)
//await (funções assíncronas e armazenamento de dados assíncronos)
//try catch

//todas as variaveis globais que representam elementos do dom devem ser declaradas 
const formulario = document.querySelector("#formCadastro")
const username = document.querySelector("#userName")
const email = document.querySelector("#userEmail")
const password = document.querySelector("#userPassword")
const confirmarPassword = document.querySelector("#userConfirmPassword")

//função para cadastro do usuario. Essa função vai fazer o post na api

async function cadastrarUsuario(objUsuario) {
    const respostaApi = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        body: JSON.stringify(objUsuario),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })

    const usuarioCadastrado = await respostaApi.json()
    console.log(usuarioCadastrado)

    alert("Usuário criado com sucesso")
}

//função para validação das senhas
async function validarSenhas(objUsuario) {
    if (objUsuario.password != objUsuario.confirmarPassword) {
        alert("Senhas diferentes")
        return
    }
    
    cadastrarUsuario(objUsuario)
     //limpeza condicional dos campos do formulario
        username.value = ""
        email.value = ""
        password.value = ""
        confirmarPassword.value = ""
    
    
}

//criar o escutador de eventos para submissão do formulário
formulario.addEventListener("submit", async (e) => {
    e.preventDefault()

    const objUsuario = {
        username: username.value,
        email: email.value,
        password: password.value,
        confirmarPassword: confirmarPassword.value
    }

    validarSenhas(objUsuario)    
    

    
})
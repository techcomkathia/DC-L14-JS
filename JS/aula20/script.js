//selecionar todos os elementos do dom : formulários e campos de input

const formulario1= document.querySelector("#exemplo1")
const formulario2= document.querySelector("#exemplo2")

//CAMPOS DE INPUT DO FORMULÁRIO 1
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const senha = document.querySelector("#senha")

//CAMPOS FORMULÁRIO 2
const pesquisa = document.querySelector("#pesquisa")
const erroPesquisa = document.querySelector("#erroPesquisa")

//CAMPOS auxiliares
const termoPesquisa = document.querySelector("#termoPesquisa")

//verificar se todos os campos do formulario 1 foram preenchidos, mostrar valores no console, exibir um alerta com uma mensagem para o usuario e limpar o formulário


//detecção do evento e execução de uma função
//submissão para o formulario 1
formulario1.addEventListener("submit", ()=>{
    //validar se tudo preenchido
    if(nome.value === "" || email.value === "" || senha.value === "" ){
        alert("por favor preencha todos os campos")
        return
    }
    //mostrar as informações no console
    console.log(`nome: ${nome.value}`)
    console.log(`email: ${email.value}`)
    console.log(`senha: ${senha.value}`)
    //exibir um alerta
    alert(`nome: ${nome.value}\nemail: ${email.value}\nsenha: ${senha.value}`)
    //limpar o formulário
    formulario1.reset()
    //ou ainda limpar os campos individualmente
    //nome.value = ""
    //email.value = ""
    //senha.value = ""

})

formulario2.addEventListener("submit", ()=>{
    //valida se o campo de pesquisa foi preenchido
    if(pesquisa.value === ""){
        //personalizar mensagem de erro
        erroPesquisa.innerHTML = "preencha o campo de pesquisa"
        erroPesquisa.classList.remove("oculta")
        return
    }

    //caso passe da(s) validação(s), limpar o campo de pesquisa
    //manipular o dom e limpar o campo de pesquisa
    termoPesquisa.innerHTML = pesquisa.value
    //limpar o campo de pesquisa
    formulario2.reset()
    //adicionar uma classe para ocultar o campo de pesquisa
    erroPesquisa.classList.add("oculta")
})
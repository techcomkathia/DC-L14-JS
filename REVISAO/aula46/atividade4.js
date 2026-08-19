//crie um formulário com os campos título e mensagem e um botão de envio
//consuma a api https://jsonplaceholder.typicode.com/posts com método POST e envie os dados do formulário para a api
//o id do usuário será arbtrario (use um número de 1 a 10)

//Importante: use a remoção do evento default para evitar o comportamento padrão do formulário ( apagar o formulário e recarregar a página)
//se erro: deverá ser mostrada uma mensagem abaixo do formulário com o erro
//se sucesso: deverá ser mostrada uma mensagem abaixo do formulário com o sucesso e o conteúdo dos campos do formulário serão limpos. 

const postForm = document.querySelector("#post")
const titulo = document.querySelector("#titulo")
const mensagem = document.querySelector("#mensagemPost")
const infoPost = document.querySelector("#infoPost")

async function postarMensagem(titulo, mensagem, idUser){ 
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                userId: idUser,
                title: titulo,
                body: mensagem
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const json = await response.json() //json para objeto
        console.log(json)
        return json
    }
    catch(erro){
        console.log(erro.message)
        return {erro: erro.message}
    }
    
}

//atribuição da execução da função ao evento de envio do formulário
postForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    //verificar se existe título e mensagem
    if(!titulo.value || !mensagem.value){ 
        infoPost.innerHTML = "Preencha os campos título e mensagem"
        return
    }
    
    const resposta = await postarMensagem(titulo.value, mensagem.value, 1)

    //verificar sucesso ou erro na requisição
    if(resposta.erro){
        infoPost.innerHTML = `Erro ao enviar dados do post`
        return
    }
    
    infoPost.innerHTML = "Post foi criado com sucesso"
    //limpeza dos campos do formulario
    titulo.value = ""
    mensagem.value = ""
    
    
})
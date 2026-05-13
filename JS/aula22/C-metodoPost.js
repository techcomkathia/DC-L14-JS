// o método POST necessita de uma URL e um objeto de configuração

const url = 'https://jsonplaceholder.typicod.com/posts'

async function criarPost(objPost) {
    try{
            const respostaAPI = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(objPost), //informação a ser enviada, no formato de JSON
            headers: {
                'Content-type': 'application/json; charset=UTF-8' //O tipo da informação a ser enviada
            }
        })

        const postCriado = await respostaAPI.json() //conversão para objeto
        console.log(postCriado)
    }
    catch(erro){
        console.log(erro.message)
    }
}

criarPost({
    title: 'exemplo',
    body: 'exemplo de corpo',
    userId: 1
})

criarPost({
    title: 'exemplo2',
    body: 'exemplo de corpo2',
    userId: 10
})

console.log('passei dos erros')
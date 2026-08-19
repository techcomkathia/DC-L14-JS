fetch('url') //get
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))


async function chamadaApi() {
    try{
        const resposta = await fetch('url') //get
        const dados = await resposta.json()
        console.log(dados, 'sucesso na busca')
        return dados
    }
    catch(erro){
        console.log(erro.message)
    }
    
}








async function postApi(obj) {
    try{
        const resposta = await fetch('url', //post
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
        const dados = await resposta.json()
        console.log(dados, 'sucesso no cadastro')
        return dados
    }
    catch(erro){
        console.log(erro.message)
    }
    
}
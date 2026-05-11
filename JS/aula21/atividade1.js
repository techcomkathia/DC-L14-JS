//busque um cep e mostre no console

let cep = 60025200
let cepInvalido = '000000000'
let url = `https://viacep.com.br/ws/${cep}/json/`

//CHAMADA A API
fetch(url)
    .then(resposta => {
        if(resposta.status == 200){
            return resposta.json()
        }
        else if(resposta.status == 400){
            console.log('erro de requisição')
        }//quando a promise for resolvida, executa o then
        }
    ).then(dados => {
        console.log(dados)
        console.log(`Logradouro: ${dados.logradouro}, bairro: ${dados.bairro}, cidade: ${dados.localidade}, uf: ${dados.uf}`)
    })
    .catch(erro => console.log(erro))
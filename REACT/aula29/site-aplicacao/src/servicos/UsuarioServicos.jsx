//tem por objetivo centralizar as regras de acesso aos dados ( consumo da api)

const url = 'http://localhost:3000/' //deverá ser substituida pela url da api quando estiver pronta / hospedada

export async function getUsuarios() {

   try{
        const resposta = await fetch(`${url}usuarios`)
        const dados = await resposta.json()
        console.log(dados, 'sucesso na busca')
        return dados
   }
   catch(erro){
    console.log(erro.message)
   }

   
}

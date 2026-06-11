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

export async function getUsuario(id){
   try{
        const resposta = await fetch(`${url}usuarios/${id}`)
        const dados = await resposta.json()
        console.log(dados, 'sucesso na busca')
        return dados
   }
   catch(erro){
    console.log(erro.message)
   }
}


export async function postUsuario(nome, email, senha, endereco = { 
   logradouro: "",
   numero: "",
   complemento: "",
   bairro: "",
   cidade: "",
   estado: "",
   cep: "00000-000"
}){
   try{
        const resposta = await fetch(`${url}usuarios`, 
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nome: nome,
                email: email,
                senha: senha,
                endereco: endereco
            })
        }
      )
        const dados = await resposta.json()
        console.log(dados, 'sucesso no cadastro')
        return dados
   }
   catch(erro){
    console.log(erro.message)
   }
}


export async function putUsuario(id, nome, email, senha, endereco = {
   logradouro: "",
   numero: "",
   complemento: "",
   bairro: "",
   cidade: "",
   estado: "",
   cep: "00000-000"
})
{
   try{
        const resposta = await fetch(`${url}usuarios/${id}`, 
         {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nome: nome,
                email: email,
                senha: senha,
                endereco: endereco
            })
        }
      )    
        const dados = await resposta.json()
        console.log(dados, 'sucesso na atualizacao')
        return dados
   }
   catch(erro){
    console.log(erro.message)
   }
}


export async function deleteUsuario(id){
   try{
        const resposta = await fetch(`${url}usuarios/${id}`, 
         {
            method: 'DELETE',
        }
      )    
        const dados = await resposta.json()
        console.log(dados, 'sucesso na exclusao')
        return dados
   }
   catch(erro){
    console.log(erro.message)
   }
}

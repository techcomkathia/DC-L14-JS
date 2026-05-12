//crie uma interface que tenha um campo de input e um botão. O usuário usará esse campo para fazer uma pesquisa de filme ou série. 
//use a api da OMDB para buscar o filme ou serie. Mostre os dados do primeiro filme ou serie na interface.

//EVENTOS : click 
//métodos de seleção de elementos: querySelector, querySelectorAll
//métodos de manipulação de elementos: innerHTML, createElement, appendChild

//IMPORTANTE: crie a sua chave para a api da OMDB e cadastre no site https://www.omdbapi.com/apikey.aspx
//LINK PARA DOCUMENTACAO: https://www.omdbapi.com

const chaveAPI = 'f5071a3b'
const inputTexto = document.querySelector('#inputBusca')
const btnBuscar = document.querySelector('#btnBuscar')
const infoFilme = document.querySelector('#infoFilme')

//buscar dados na api
    //captar o texto do usuário
    //adicionar o texto ao url da api
    //chamar a api
    //consultar os dados da api de JSON para objeto
//mostrar os dados na interface:
    //captar os elementos
    //criar os elementos
    //modificar o src ou o innerHTML dos elementos
    //adicionar os elementos filhos aos pais

function buscarFilme(textoBusca){
    const urlAPI = `https://www.omdbapi.com/?s=${textoBusca}&apikey=${chaveAPI}&plot=full`
    fetch(urlAPI)
    .then(resposta => resposta.json())
    .then(dados => montarTela(dados))
    .catch(erro => console.log(erro))
}


function montarTela(objeto){
// inserido o laço for para percorrer todo o array. Em caso de renderização apenas do primeiro filme, comentar o for e substituir o 'item' por 0
    for(let item = 0; item < objeto.Search.length; item++){
        const cardFilme = document.createElement('div')
        const imagemPoster = document.createElement('img')
        const titulo = document.createElement('h2')
        const descricao = document.createElement('p')
        const ano = document.createElement('p')

        if(objeto.Response === 'True'){
            imagemPoster.src = objeto.Search[item].Poster
            titulo.innerHTML = objeto.Search[item].Title
            descricao.innerHTML = objeto.Search[item].Type
            ano.innerHTML = objeto.Search[item].Year
            cardFilme.appendChild(imagemPoster)
            cardFilme.appendChild(titulo)
            cardFilme.appendChild(descricao)
            cardFilme.appendChild(ano)
            cardFilme.style.border= '1px solid black'

            //adicionar os elementos filhos aos pais
            const infoFilme = document.querySelector('#infoFilme')
            infoFilme.appendChild(cardFilme)
        }
        else if(objeto.Response === 'False'){
            infoFilme.innerHTML = 'Nenhum filme encontrado'
        }
    }
    

}

btnBuscar.addEventListener('click', function(){
    buscarFilme(inputTexto.value)
})






//liste todos os albuns

//ao clicar no card do album devem ser mostradas todas as fotos desse album. 

//https://jsonplaceholder.typicode.com/albums/1
//https://jsonplaceholder.typicode.com/albums/1/photos

//Dica: Poderão ser usados os card do bootstrap para facilitar a visualização das imagens. 

//seleção da div main

const main = document.querySelector('main')

async function buscarAlbuns() {
    try {
        const resposta = await fetch(
            'https://jsonplaceholder.typicode.com/albums'
        )

        const albuns = await resposta.json()

        albuns.forEach((album) => {
            criarCardAlbum(album)
        })

    } catch (error) {
        console.log(error)
    }
}

function criarCardAlbum(album) {
    const divCol = document.createElement('div')
    divCol.className = 'col-md-4 mb-3'

    const divCard = document.createElement('div')
    divCard.className = 'card h-100'

    const divCardBody = document.createElement('div')
    divCardBody.className = 'card-body'

    const titulo = document.createElement('h5')
    titulo.className = 'card-title'
    titulo.innerHTML = `Álbum ${album.id}`

    const descricao = document.createElement('p')
    descricao.className = 'card-text'
    descricao.innerHTML = album.title

    divCardBody.appendChild(titulo)
    divCardBody.appendChild(descricao)

    divCard.appendChild(divCardBody)
    divCol.appendChild(divCard)

    main.appendChild(divCol)

    divCard.addEventListener('click', () => {
        buscarFotos(album.id)
    })
}

async function buscarFotos(idAlbum) {
    try {
        const resposta = await fetch(
            `https://jsonplaceholder.typicode.com/albums/${idAlbum}/photos`
        )

        const fotos = await resposta.json()

        mostrarFotos(fotos)

    } catch (error) {
        console.log(error)
    }
}

function mostrarFotos(fotos) {
    main.innerHTML = ''

    fotos.forEach((foto) => {
        const divCol = document.createElement('div')
        divCol.className = 'col-md-3 mb-4'

        const divCard = document.createElement('div')
        divCard.className = 'card h-100'

        const img = document.createElement('img')
        img.src = foto.thumbnailUrl
        img.alt = foto.title
        img.className = 'card-img-top'

        const divBody = document.createElement('div')
        divBody.className = 'card-body'

        const titulo = document.createElement('p')
        titulo.className = 'card-text'
        titulo.innerHTML = foto.title

        divBody.appendChild(titulo)

        divCard.appendChild(img)
        divCard.appendChild(divBody)

        divCol.appendChild(divCard)

        main.appendChild(divCol)
    })
}

buscarAlbuns()
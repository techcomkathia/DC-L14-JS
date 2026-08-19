//consuma a api https://jsonplaceholder.typicode.com/posts e exiba os 10 primeiros posts no document com o seguinte formato:
//div
//h1 - titulo
//p - conteudo
//div

//div
//h1 - titulo
//p - conteudo
//div


async function buscarPost(){
    try{
        let posts = await fetch('https://jsonplaceholder.typicode.com/posts') //get (padrão)
        let dados = await posts.json()
        
        //inserir o conteúdo no document
        const body = document.querySelector('body')
        for(let i = 0; i < 10; i++){
            const div = document.createElement('div')
            div.style.border = `1px solid black`
            div.style.padding = `10px`
            div.style.margin = `10px auto`
            div.style.width = `400px`
            const h1 = document.createElement('h1')
            const p = document.createElement('p')
            h1.innerHTML = dados[i].title
            p.innerHTML = dados[i].body
            div.appendChild(h1)
            div.appendChild(p)
            body.appendChild(div)
        }

    }
    catch(error){
        console.log(error)
    }
}

buscarPost()
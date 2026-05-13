
//seleção de elementos do DOM

/*
//---exemplo de erro: tentar manipular um elemento que nao existe---

const tituloNaoExiste = document.querySelector("#tituloNaoExiste") //undefined

const tituloTeste = document.querySelector("#tituloTeste") // elemento do DOM

//ao tentar manipular um elemento que não existe, o browser exibe um erro no console e impede a execução do programa a partir da linha do erro

//exemplo de erro: tentar manipular um elemento que nao existe
tituloNaoExiste.innerHTML = "exemplo de erro"

//alterar a cor do texto do h1
tituloTeste.style.color = "red"
console.log('Não cheguei até aqui pois o erro está na linha 11')*/


try {
   const tituloNaoExiste = document.querySelector("#tituloNaoExiste") //undefined

    const tituloTeste = document.querySelector("#tituloTeste") // elemento do DOM

    //ao tentar manipular um elemento que não existe, o browser exibe um erro no console e impede a execução do programa a partir da linha do erro
    console.log(tituloTeste)
    //exemplo de erro: tentar manipular um elemento que nao existe
    tituloNaoExiste.innerHTML = "exemplo de erro"
    //alterar a cor do texto do h1   
    
} catch (error) {
    console.log(error)
}

//erro tratado no bloco catch e o programa continua a execução
tituloTeste.classList.add('text-danger')
console.log('Não cheguei até aqui pois o erro está na linha 29') 


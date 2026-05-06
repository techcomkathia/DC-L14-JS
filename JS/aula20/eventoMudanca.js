const inputMudanca = document.querySelector("#inputMudanca")
const exemplo3 = document.querySelector("#exemplo3")
const textoExemplo3 = document.querySelector("#textoExemplo3")

// remover o comportamento padrão do formulário
exemplo3.addEventListener("submit", (event) => {
    event.preventDefault() //não submeta o formulário

})

inputMudanca.addEventListener('change', () =>{
    //clicando fora do campo ou pressionando enter, ele muda o valor do campo e consolida o evento de mudança
    console.log(inputMudanca.value)
    textoExemplo3.innerHTML = inputMudanca.value
})
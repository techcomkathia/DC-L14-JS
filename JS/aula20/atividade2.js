//seleção da seção com classe oculta atividade2
const atividade2 = document.querySelector("#atividade2")
//remover a classe oculta da seção atividade2
atividade2.classList.remove("oculta")

//seleção de todos os elementos que serão manipulados
//formulario, campo de entrada, prato principal, bebidas, sobremesa, taxa de serviço, subtotal, total e botão limpar comanda

const formulario = document.querySelector("#atividade2")
const entrada = document.querySelector("#entrada")
const pratoPrincipal = document.querySelector("#pratoPrincipal")
const bebidas = document.querySelector("#bebidas")
const sobremesa = document.querySelector("#sobremesa")
const taxaServico = document.querySelector("#taxaServico")
const subTotal = document.querySelector("#subTotal")
const total = document.querySelector("#total")
const limparComanda = document.querySelector("#atividade2 button")

//calcular taxa de serviço
//calcular subtotal
//calcular total

//o valor de cada um dos campos é iniciado com 0 até que tenha o seu value alterado
let valorTaxaServico = 0
let valorSubTotal = 0
let valorTotal = 0

let valorEntrada = 0
let valorPratoPrincipal = 0
let valorBebidas = 0
let valorSobremesa = 0

function calcularSubTotal(){
    valorSubTotal = valorBebidas + valorEntrada + valorPratoPrincipal + valorSobremesa
}

function calcularTotal(){
    valorTotal = valorBebidas + valorEntrada + valorPratoPrincipal + valorSobremesa + valorTaxaServico
}

function calcularTaxaServico(porcentagem){
    valorTaxaServico = (valorSubTotal * porcentagem) / 100
}

//a cada alteração de campo uma mesma função será executada
//ela atualiza o valor do campo atual e calcula todos os outros campos que não são permitidos serem alterados ou preenchidos

//TODO: Verificar erro de atualização dos valores dos campos de valorTaxaServico, valorSubTotal e valorTotal na tela
function atualizarValor(variavel, objetoCampo){
    variavel = Number(objetoCampo.value)
    //atualiza as variaveis globais
    calcularSubTotal()
    calcularTaxaServico(10)
    calcularTotal()

    //atualizar os campos do formulario (interface)
    subTotal.value = valorSubTotal
    taxaServico.value = valorTaxaServico
    total.value = valorTotal


}

//adicionar um escutador de eventos para cada um dos campos do formulário (evento de mudança de valor)

entrada.addEventListener("change", () => {
    valorEntrada = Number(entrada.value)
    calcularConta()  
    
}

)
pratoPrincipal.addEventListener("change", () => {
    valorPratoPrincipal = Number(pratoPrincipal.value)

    calcularConta()
}

)
bebidas.addEventListener("change", () => {
    valorBebidas = Number(bebidas.value)

    calcularConta()
    
})
sobremesa.addEventListener("change", () => {
    valorSobremesa = Number(sobremesa.value)

    calcularConta()
    
})


function calcularConta(){

    calcularSubTotal()
    calcularTaxaServico(10)
    calcularTotal()

    //atualizar os campos do formulario (interface)
    subTotal.value = valorSubTotal
    taxaServico.value = valorTaxaServico
    total.value =  valorTotal
}




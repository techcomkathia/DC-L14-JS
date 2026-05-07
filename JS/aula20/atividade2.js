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
const btnlimparComanda = document.querySelector("#atividade2 button")

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
//correção
function atualizarValor(nomeCampo){
    switch (nomeCampo) {
        case "entrada":
            valorEntrada = Number(entrada.value)
            break;
        case "pratoPrincipal":
            valorPratoPrincipal = Number(pratoPrincipal.value)
            break;
        case "bebidas":
            valorBebidas = Number(bebidas.value)
            break;
        case "sobremesa":
            valorSobremesa = Number(sobremesa.value)
            break;
    }

}

function atualizarInterface(){
    subTotal.value = valorSubTotal
    taxaServico.value = valorTaxaServico
    total.value =  valorTotal
}

function limparComanda(){
    entrada.value = 0
    pratoPrincipal.value = 0
    bebidas.value = 0
    sobremesa.value = 0
    subTotal.value = 0
    taxaServico.value = 0
    total.value = 0

}

function calcularConta(campo){
    atualizarValor(campo)

    calcularSubTotal()
    calcularTaxaServico(10)
    calcularTotal()  

    atualizarInterface()

}





entrada.addEventListener("change", () => calcularConta('entrada'))
pratoPrincipal.addEventListener("change", () => calcularConta('pratoPrincipal'))
bebidas.addEventListener("change", () => calcularConta('bebidas'))
sobremesa.addEventListener("change", () => calcularConta('sobremesa'))






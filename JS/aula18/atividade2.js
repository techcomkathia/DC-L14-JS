//para uma ul já existente no html, com id de 'atividades', faça a adição de 5 atividades solicitadas ao usuário e captadas por prompt. Serão feitas 2 perguntas para o usuário: qual atividade ele deseja adicionar e se essa atividade é prioritaria ou não.
//Se a atividade for prioritária, ela deve ser adicionada na lista com a cor vermelha. Caso contrário, ela deve ser adicionada na lista com a cor de todos os outros lis de atividades.

//Exemplo:

// Responder E-mails (cor vermelha pois é prioritária)
// Comprar comida (cor de todos os outros lis de atividades)
// Fazer exercícios (cor de todos os outros lis de atividades)
// Declarar IR (cor vermelha pois é prioritária)


//DICA: use o innerHTML para adicionar as atividades na lista da ul que possui id de 'atividades'.
//Após isso você pode usar classes ou formatar as propriedades de styles de cada atividade.


//solicitação das informações ao usuário
//teremos um array de objetos cada um com 2 atributos: texto e prioridade

//criação do array de objetos
let atividades = []

for(let i=1; i<=5; i++){
    let texto = prompt(`Digite a atividade ${i}`)
    let prioridade = confirm(`A atividade ${i} é prioritária?`) //boolean: true ou false
    //adciona o objeto ao array de atividades
    atividades.push({texto, prioridade})
}

//selecionar o elemento da ul
const ul = document.getElementById('atividades')
let li = ``
//inserir conteúdo na ul
atividades.forEach((atividade)=>{
   if(atividade.prioridade){
    li+= `<li class='prioridade'>${atividade.texto}</li>`
   }
   else{
    li+= `<li >${atividade.texto}</li>`
   }
})
ul.innerHTML += li

//fazer as alterações do css para as atividades com prioridade
//com o conteúdo já adicionado ao html faremos a estilização
const atividadesPrioritarias = document.getElementsByClassName('prioridade')

console.log(atividadesPrioritarias)

for(let i =0; i<atividadesPrioritarias.length; i++){
    atividadesPrioritarias[i].style.color = 'red'
}
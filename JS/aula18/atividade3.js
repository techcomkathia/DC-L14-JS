//seleção do elemento pai : que vai receber os lis
const ul = document.getElementById('atividades')

//criação do array de atividades
let atividades = []

for(let i=1; i<=5; i++){
    let texto = prompt(`Digite a atividade ${i}`)
    let prioridade = confirm(`A atividade ${i} é prioritária?`) //boolean: true ou false
    //adciona o objeto ao array de atividades
    atividades.push({texto, prioridade})
}

//criação dos lis
atividades.forEach((atividade)=>{
    //criar o elemento li
    const li = document.createElement('li')
    li.innerHTML = atividade.texto
    
    if(atividade.prioridade){
        li.classList.add('prioridade')
        li.style.color = 'red'
    }

    //inserir o filho ao pai que já existe no documento
    ul.appendChild(li)
})

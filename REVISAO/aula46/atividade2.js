// existe uma lista de funcionários que ainda não estão participando de nenhum projeto. Porém existem funcionários que estão em 2 projetos ou mais. A ideia da gestão é redesenhar o trabalho dos funcionários para que eles trabalhem em 1 ou 2 projetos.

// Crie uma função que recebe um array de funcionários e retorna um array com os funcionários e retorna os ids e nomes dos funcionários que não estão em nenhum projeto.

function filtrarFuncionariosSemProjeto(arrayFuncionarios) {
    let funcionariosSemProjeto = arrayFuncionarios.filter(funcionario => funcionario.projeto.length === 0)
    return funcionariosSemProjeto.map(funcionario => ({id: funcionario.id, nome: funcionario.nome}))
    
}

//crie uma função que recebe um array de funcionários, avalia a existencia de funcionarios com mais de 1 projeto e caso tenha, faz a remoção desse projeto e adição a um array de projetos pendentes. Ao final a função deve retornar o array de funcionários modificado ( com apenas 1 projeto ou nenhum ) e o array de projetos pendentes, para que seja redestribuído posteriormente.

function avaliarFuncionarios(arrayFuncionarios) {
    let projetosPendentes = []
    arrayFuncionarios.forEach((funcionario) => {
        if(funcionario.projeto.length > 1){
            let projetosRemovidos = funcionario.projeto.splice(1) //remove todos os projetos exceto o primeiro, retorna um array
            projetosPendentes.push(...projetosRemovidos) //desestrutura o array e adiciona os projetos ao array de projetos pendentes
        }
    });

    return [arrayFuncionarios, projetosPendentes]
}
  


// crie uma função que recebe um array de atividades pendentes e um array de objetos (funcionários) essa função deve redestribuir as atividades para os funcionários que ainda nao estao trabalhando em nenhum projeto.

function distribuirAtividades(atividadesPendentes, arrayFuncionarios) {
    arrayFuncionarios.forEach((funcionario) => {
        //fazer a verificação se o funcionario ainda nao trabalha em nenhum projeto
        if(funcionario.projeto.length == 0){
            //se o funcionario nao trabalha em nenhum projeto, ele recebe as atividades pendentes
            atividadesPendentes.length>0 ? funcionario.projeto.push(atividadesPendentes.shift()) : null
        }

    })
    
}


const funcionarios = [
    {id: 1,
        nome: "João",
        projeto:[]
    },
    {id: 2,
        nome: "Maria",
        projeto: ["Projeto A", "Projeto B"]
    },
    {id: 3,
        nome: "Pedro",
        projeto: []
    },
    {id: 4,
        nome: "Ana",
        projeto: ["Projeto C"]
    },
    {id: 5,
        nome: "Cleitinho",
        projeto: ["Projeto D", "Projeto E"]
    },

]


//verificar os nomes id dos funcionários sem projetos
const funcionariosSemProjeto = filtrarFuncionariosSemProjeto(funcionarios)
console.log(funcionariosSemProjeto)

//verificar os projetos pendentes
const [funcionariosComProjeto, projetosPendentes] = avaliarFuncionarios(funcionarios)
console.log(projetosPendentes)

//distribuir as atividades pendentes
distribuirAtividades(projetosPendentes, funcionariosComProjeto)
console.log(funcionariosComProjeto)

const Categorias = require('../1.Modelo/categoriaModel')

async function criarCtegoria(dados) {

    const novaCategoria = {
        name: dados.name,
        slug: dados.slug,
        use_in_menu: dados.use_in_menu
    }

    
    try{
        const categoriaCriada = await Categorias.create(novaCategoria)
        return {dados: {
            id: categoriaCriada.dataValues.id,
            name: categoriaCriada.dataValues.name,
        },
        messagem: 'sucesso ao criar categoria'}
    }
    catch(error){
        return {erro: error.message}
    }
    
}

async function atualizarCategoria(dados, id) {

    try{

        const categoriaEncontrada = await Categorias.findByPk(id)
        if(!categoriaEncontrada){
            return {erro: 'categoria nao encontrada'}
        }

        let atualizadaCategoria={}

        if(dados.use_in_menu){
            atualizadaCategoria.use_in_menu = dados.use_in_menu
        }
        if(dados.name){
            atualizadaCategoria.name = dados.name
        }
        if(dados.slug){
            atualizadaCategoria.slug = dados.slug
        }
        

        const categoriaAtualizada = await Categorias.update(atualizadaCategoria, {where: {id:id}})
        return {dados: Object.keys(atualizadaCategoria),
        messagem: 'sucesso ao atualizar categoria'}
    }
    catch(error){
        return {erro: error.message}
    }
    
}

async function buscarCategorias() {

    try{

        const categoriasEncontradas = await Categorias.findAll()

        const listaCategorias = categoriasEncontradas.map((categoria) => {
            const dadosCategoria = {
                id: categoria.dataValues.id,
                name: categoria.dataValues.name,
                slug: categoria.dataValues.slug,
                use_in_menu: categoria.dataValues.use_in_menu
            }
            return dadosCategoria
        })

        return {dados: listaCategorias, messagem: 'sucesso ao buscar categorias'}

    }
    catch(error){
        return {erro: error.message}
    }


}

async function deletarCategoria(id) {

    try{    
        //verificar se a categoria existe
        const categoriaEncontrada = await Categorias.findByPk(id)
        if(!categoriaEncontrada){
            return {erro: 'categoria nao encontrada'}
        }

        await Categorias.destroy({where: {id:id}})
        return {messagem: 'sucesso ao deletar categoria'}    
    }
    catch(error){
        return {erro: error.message}
    }
    
}

async function buscarUmaCategoria(id) {

    try {
        const categoriaEncontrada = await Categorias.findByPk(id)
        if(!categoriaEncontrada){
            return {erro: 'categoria nao encontrada'}
        }
        return {dados: {
            id: categoriaEncontrada.dataValues.id,
            name: categoriaEncontrada.dataValues.name,
            slug: categoriaEncontrada.dataValues.slug,
            use_in_menu: categoriaEncontrada.dataValues.use_in_menu
        }, messagem: 'sucesso ao buscar uma categoria'}
        
    } catch (error) {
        return {erro: error.message}        
    }


}

module.exports = {criarCtegoria, atualizarCategoria, buscarCategorias, buscarUmaCategoria, deletarCategoria}


async function teste(){

    criarCtegoria({
        name: 'Teste',
        slug: 'teste',
        use_in_menu: true
    })

    const resposta = await atualizarCategoria({
        name: 'Teste 2'
       
    },1)
    console.log(resposta)
}




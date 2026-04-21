let objetoObjeto1 = {
    chave:'valor',
    atributo:'valor',
    propriedade:'valor',
    metodo: function(){
        console.log('Sou um metodo do objeto1')
    }
}

let objetoObjeto2 = {
    "chave":"valor",
    "atributo":"valor",
    "propriedade" :"valor",
    "metodo": function(){
        console.log('Sou um metodo do objeto2')
    }
}

console.log(objetoObjeto1)
console.log(objetoObjeto2)
//executar um metodo de um objeto
//objetoObjeto1.metodo()
//objetoObjeto2.metodo()

let objetoJson = JSON.stringify(objetoObjeto1)
//não tem suporte para funções, metodos presentes dentro de um objeto serão excluidos/perdidos na conversão
console.log(objetoJson)


let objetoJson2 = '{"chave":"teste","atributo":"teste","propriedade":1}'
console.log(objetoJson2.chave)

let objetoObjeto3 = JSON.parse(objetoJson2)
console.log(objetoObjeto3)
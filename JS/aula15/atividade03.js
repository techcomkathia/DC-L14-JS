//padronização de informações dentro de um array de objetos

let usuarios = [

    {nome:'Joao', email:'joao@email', senha: '1235'},
    {nome:'Maria', email:'maria@email'},
    {nome:'Pedro', email:'pedro@email', senha: '1235'},
    {nome:'Ana', email:'ana@email', senha: '1235'},
    {nome:'Cleitinho', email:'cleitinho@email'},
]

//percorra o array de objetos ( use o laço for para isso ) e verifique se existe a propriedade senha para cada um dos usuarios.
//Caso exista, não modifique a senha. Caso não exista, crie essa propriedade e atribua o valor '123Mudar'
//para isso use o condicional if/else

    for(let usuario of usuarios){
    let chaves = Object.keys(usuario)
    if (chaves.includes('senha')){
        console.log(`O usuario ${usuario.nome} possui todos os campos completos.`)
    }else{
        usuario.senha = "123Mudar"
    }
    console.log(usuario)
}
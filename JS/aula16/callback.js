function saudarRecife(nome) {
    return `${nome} eeeeeei boy`;
}
function saudarFortaleza(nome) {
    return `${nome} eeeeeei mahhhhhhhh`;
}
function saudarSalvador(nome) {
    return `${nome} eeeeeei pivete`;
}

function falarEmUmaCidade(nome, funcaoSaudacao) {
    let retorno = funcaoSaudacao(nome);
    console.log(retorno)
}

falarEmUmaCidade('Cleitinho', saudarRecife);
falarEmUmaCidade('Sandoval', saudarFortaleza);
falarEmUmaCidade('Maria', saudarSalvador);
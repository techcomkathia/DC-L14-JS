function mostroOresultado(numero,funcaoDeCallback){ 
    let resultado = funcaoDeCallback(numero);
    console.log(resultado);
}

//chame a função mostroOresultado passando um número e uma função de callback que realize uma verificação sobre a paridade do número. Caso o número seja negativo exiba esse número e a mensagem "Número negativo"
//caso seja par exiba o número, o valor dele multiplicado por ele mesmo e a mensagem "Número par"
//caso seja ímpar exiba o número e a mensagem "Número ímpar".
//importante TODOS OS CASOS devem conter retorno.

//Dica o uso das chaves {} é obrigatório para o retorno de mais de uma linha, e o uso do return é obrigatório para retornar um valor. Os parametros também devem ser informados na função do tipo seta (arrow function) para que seja possível passar o número para a função de callback.
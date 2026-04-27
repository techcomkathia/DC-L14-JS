//percorre todo o array, captando cada um dos elementos e utilizando esse elemento como paramétodo de uma função callback, ou seja, a função que é passada como argumento para o método forEach().
let numeros = [1, 2, 3, 4, 5];

//mostrar no console todos os numeros ao quadrado 
numeros.forEach((item)=>console.log(item**2))


function dobrar(numero){
    console.log(numero*2)
}

numeros.forEach(dobrar)
numeros.forEach((numero)=> console.log(numero**3))









//forEach - percorre o array mas não retorna nenhum valor ou altera o array original ( a menos que seja uma modificação em um objeto do array')
//map - percorre o array e retorna um novo array com os resultados da função aplicada a cada elemento do array original ou seja teremos 2 arrays, o original e o novo array com as modificações. O array original permanece inalterado.
//filter - percorre o array e retorna um novo array contendo apenas os elementos que satisfazem uma condição específica definida na função de callback. O array original permanece inalterado. O método filter é útil para criar um subconjunto de um array com base em critérios específicos.
//reduce - percorre o array e retorna um valor resultante da execução de uma função reducer sobre ele. O array original permanece inalterado.
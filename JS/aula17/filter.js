let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let pares = numeros.filter((num)=> {
    if(num % 2 === 0){
        return num
    }
    else{
        return false
    }
}
)

console.log(pares, numeros)
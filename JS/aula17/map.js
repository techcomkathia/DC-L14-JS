let numeros = [1, 2, 3, 4, 5];
//usando o método map para criar um novo array com o dobro dos valores do array original
let dobrado = numeros.map((numero) =>  {return numero * 2});
// [2, 4, 6, 8, 10]

console.log(dobrado, numeros);

let pets = [
    {nome: "Rex", tipo: "Cachorro"},
    {nome: "Miau", tipo: "Gato"},
    {nome: "Piu", tipo: "Pássaro"}
]

console.log(pets);

let petsVacinas =  pets.map((animal) => {
    // acaba moficando o array original pois é uma manipulação direta do objeto, para evitar isso devemos criar um novo objeto usando o operador spread
    animal.vacinado = true;
    return animal;})
console.log(petsVacinas, pets);

//corrigindo a modificação do array original usando o map para criar um novo array de objetos
let frutas = [
    {nome: "Maçã", cor: "Vermelha"},
    {nome: "Banana", cor: "Amarela"},
    {nome: "Laranja", cor: "Laranja"}
]

let frutasComPreco = frutas.map((fruta) => {
    //destruturando o objeto e criando uma nova propriedade preco sem modificar o objeto original
    return {...fruta, preco: 5.00};
})



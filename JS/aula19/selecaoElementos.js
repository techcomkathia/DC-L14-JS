//métodos do querySelector- retornam um NodeList
//NodeList - uma coleção de elementos que possuem a 'mesma característica' e essa caracterisca é definida pelos seletores CSS:
// tag (proprio nome da tag)
// class .
// id #
//seletores avançados como por exemplo uma tag li que possui a class item: li.item

//querySelectorAll() - trazer todos os elementos que possuem a mesma característica

//querySelector()- trazer o primeiro elemento que possui a mesma característica


//selecionando TODOS os h1
let h1 = document.querySelectorAll('h1')
console.log(h1)
//mostrar o segundo h1
console.log(h1[1])

//selecionando apenas o primeiro h2
let h2 = document.querySelector('h2')
console.log(h2)

//combinando seletores : uma tag com uma classes
let li = document.querySelectorAll('li.item')
console.log(li)

// seletor de tag com mais de uma classe
let li2 = document.querySelectorAll('li.item.grupo')
console.log(li2)

//trabalho com os métodos dos arrays para NodeList é necessária a conversão para um array
const listaLis = Array.from(li)

listaLis.forEach(function(item){
    item.style.color = 'red'
})

//htmlCollection não aceita os métodos para array( é necessária a conversão para um array com o Array.from())
//NodeList aceita os métodos para array (forEach, map, filter, reduce)
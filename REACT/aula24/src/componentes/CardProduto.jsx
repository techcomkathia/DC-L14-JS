/*//Usando props ( propriedades ) crie um terceiro componente chamado CardProduto.jsx
//Esse card deve receber a seguinte estrutura:
//imagem (https://placehold.co/400)
//nome
//preço
//descricao


//opcionalmente esse card pode receber 2 props chamada:
// promocao que deve receber um booleano 
// uma propriedade chamada desconto que deve receber um valor numérico que indica a porcentagem de desconto 
//caso o valor da props promocao seja false, o card deve exibir o preço sem desconto e uma borda azul
//caso o valor da props promocao seja o booleano true e a props desconto seja um número, o card deve exibir 2 preços, o preço com desconto.  Além disso uma borda vermelha deve ser exibida ao redor do card caso a props promocao seja true
//Dica: use o objeto props para acessar as propriedades do componente pai ou faça a desestruturação das propriedades {propriedade1, propriedade2, ...}
//use o componente 2x com diferentes valores para as propriedades no arquivo App.jsx*/


export default function CardProduto({imagem, nome, preco, descricao, promocao, desconto}){
    return(
        <div>
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
            {/* caso promocao seja true e desconto seja maior que 0, exibir o com o desconto  */}
            {promocao && desconto>0 && <p> {preco - (preco*desconto/100)} </p>}
            {/* caso promocao seja false, exibir o preco sem desconto */}
            {!promocao && <p>{preco}</p>}
            {/* resolução com operador ternário */}
            {promocao && desconto>0 ? <p> {preco - (preco*desconto/100)} </p> : <p>{preco}</p>} 

            <p>{descricao}</p>
        </div>
    )
    
}

//para renderização condicional podemos usar operador ternário ou os operadores lógicos && e ||
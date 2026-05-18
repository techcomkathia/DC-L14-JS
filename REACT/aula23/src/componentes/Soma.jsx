export default function Soma(){
    let num1= 10
    let num2= 20
    // mostra o calculo realizado a partir dos dois numeros. É sempre necessário usar as { } para incluir JS puro dentro do JSX. Por isso podemos realizar chamadas de funções, operações matemáticas, uso de valores de variáveis e acesso as propriedades do objeto.

    function soma(x,y){
        return x + y
    }
    return(
        <div>
            <h1>Soma: {soma(num1,num2)}</h1>
        </div>
    )

}
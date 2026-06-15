
import { TesteSyled } from "../componentes/TesteStyled";
import { ExemploStyled } from "../componentes/ExemploStyled";

export default function Home() {
   


    return (
        <div>
            <h1>Pagina Principal</h1>
            {/* <TesteSyled texto='Olá mundo!'/> */}
            <ExemploStyled titulo='Exemplo 1' texto1='Estamos em intervalo' texto2='Voltaremos de 20:25'/>
            
        </div>
    );
}
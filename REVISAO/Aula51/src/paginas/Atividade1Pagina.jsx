import Atividade1 from "../componentes/Atividade1";
import dados from '../componentes/dados'
import { useContext } from "react";
import { ContextoExemplo } from "../contexto/contextoExemplo";
export default function Atividade1Pagina() {

    const {info, setInfo} = useContext(ContextoExemplo);



    return (
        <div>
            <h1>Atividade 1</h1>
            {info.map((item) => (<p>{item}</p>))}
            <Atividade1 listaLivros={dados} />
        </div>
    )
}
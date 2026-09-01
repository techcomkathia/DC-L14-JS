import Atividade2 from '../componentes/Atividade2'
import dados from '../componentes/dados'


export default function Atividade2Pagina() {
    return (
        <div>
            <h1>Atividade 2</h1>
            <Atividade2 listLivros={dados} />
        </div>
    )
}
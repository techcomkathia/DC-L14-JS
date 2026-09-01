import {Routes, Route} from 'react-router-dom'
import Home from '../paginas/Home'
import Atividade2Pagina from '../paginas/Atividade2Pagina'
import Atividade1Pagina from '../paginas/Atividade1Pagina'
import PaginaNaoEncontrada from '../paginas/paginaNaoEncontrada'

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atividade1" element={<Atividade1Pagina />} />
            <Route path="/atividade2" element={<Atividade2Pagina />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
    )
}
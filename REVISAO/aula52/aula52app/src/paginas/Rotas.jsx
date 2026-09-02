import {Route, Routes} from 'react-router-dom'

import Home from './Home'
import Carrinho from './Carrinho'
import Produtos from './Produtos'
import PaginaNaoEncontrada from './PaginaNaoEncontrada'


export default function Rotas (){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
    )
}
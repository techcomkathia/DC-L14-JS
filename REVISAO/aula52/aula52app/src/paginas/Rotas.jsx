import {Route, Routes} from 'react-router-dom'

import Home from './Home'
import CarrinhoPage from './CarrinhoPage'
import Produtos from './Produtos'
import PaginaNaoEncontrada from './PaginaNaoEncontrada'


export default function Rotas (){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<CarrinhoPage />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
    )
}
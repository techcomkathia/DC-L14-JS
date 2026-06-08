import Home from "../paginas/Home";
import ListaProdutos from "../paginas/ListaProdutos";
import PaginaNaoEncontrada from "../paginas/PaginaNaoEncontrada";

//componentes do react-router-dom
import { Route, Routes } from "react-router-dom";

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
    );
}
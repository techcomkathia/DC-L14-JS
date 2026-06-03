// importar os recursos Route e Routes do react-router-dom. Eles serão usados para configurar as rotas passando as propriedades path e element.
import { Route, Routes } from "react-router-dom";

//importar todas as paginas da aplicação
import Home from "../paginas/Home";
import Produtos from "../paginas/Produtos"; 
import PaginaNaoEncontrada from "../paginas/PaginaNaoEncontrada";
import DetalheProduto from "../paginas/DetalheProduto";



export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produtos/:id" element={<DetalheProduto />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
    );
}
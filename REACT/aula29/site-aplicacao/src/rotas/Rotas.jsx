import {Route, Routes} from "react-router-dom";

import Home from "../paginas/Home";
import CadastroUsuario from "../paginas/CadastroUsuario";
import DetalheLivro from "../paginas/DetalheLivro";
import PaginaNaoEncontrada from "../paginas/PaginaNaoEncontrada";

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
            <Route path="/livros/:id" element={<DetalheLivro />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
    );
}
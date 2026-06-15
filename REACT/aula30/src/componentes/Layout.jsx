// cria um padrão de componentes que serão renderizados em todas as outras paginas
import Navegacao from "./Navegacao";
import Rodape from "./Rodape";

export default function Layout({children}) {
    return (
        <>
            <Navegacao />
                {children}
            <Rodape />

        </>
    )
}
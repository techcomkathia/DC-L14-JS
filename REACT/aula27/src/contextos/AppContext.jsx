//importar todos os contextos da aplicação que serão utilizados
import { ProdutosProvider } from "./ProdutosContext";

//criar o componente que receberá os valores iniciais para o contexto e fornece o contexto para partes do app
export function AppProvider({children}) {
    return (
        <ProdutosProvider>
            {children}
        </ProdutosProvider>
    )
}
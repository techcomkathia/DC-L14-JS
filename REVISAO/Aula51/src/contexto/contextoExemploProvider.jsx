//o provedor de contexto deve ser criado objeto de contexto deve ser exportado para ser utilizado em outros componentes
import { ContextoExemplo } from "./contextoExemplo";
import { useState } from "react";

//o provedor de contexto deve ser utilizado para fornecer o contexto a todos os componentes que o utilizarem. Ele recebe o valor do contexto como propriedade.
//nos componentes filhos: todos os compontes que estiverem dentro do provedor podem utilizar o contexto com o hook useContext

export function ContextoExemploProvider({ children }) {
    const [info, setInfo] = useState([1,2,3]);
    //o value deve obrigarmente ser um objeto, neste caso recebe uma variavel de estado controlado e uma funcao de atualizacao
    return <ContextoExemplo.Provider value={{info, setInfo}}>
        {children}
    </ContextoExemplo.Provider>;
}

//esse componente pode ser utilizado diretamente no arquivo main.jsx
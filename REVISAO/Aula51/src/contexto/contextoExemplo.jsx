// criar o contexto a partir do react com o hook createContext
import { createContext } from "react";

export const ContextoExemplo = createContext();
//esse objeto de contexto deve ser exportado para ser utilizado em outros componentes

//no componente provedor: o provider deve ser utilizado para fornecer o contexto a todos os componentes que o utilizarem. Ele recebe o valor do contexto como propriedade.

//nos componentes filhos: todos os compontes que estiverem dentro do provedor podem utilizar o contexto com o hook useContext
//Esse componente permite que o usuário digite um texto e ele seja exibido na tela mediante a digitação

import { useState } from "react";

export default function InputTeste() {
    const [texto, setTexto] = useState("");
    return (
        <div>
            <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} />
            <p>{texto}</p>
        </div>
    )
}


import { useState } from "react";

export default function Atividade2({senhaCorreta}) {

    const [senha, setSenha] = useState('')
    const [acerto, setAcerto] = useState(false)

    return(
        <div>
            <input type="password" placeholder="Digite a senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            <button onClick={() => setAcerto(senha === senhaCorreta)}>Conferir resultado</button>

            {acerto && <h1>Senha correta, você passou no teste</h1>}
            {!acerto && senha.length > 0 && <h1>Senha incorreta, tente novamente</h1>}
        </div>
    )
   

}
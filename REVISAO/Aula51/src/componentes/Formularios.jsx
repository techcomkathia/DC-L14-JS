import { useState } from "react"

function CampoPesquisa(){
    const [pesquisa, setPesquisa] = useState("")
    const [termoPesquisa, setTermoPesquisa] = useState("")
    return(
        <>
        <input type="text" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} />
        <button onClick={() => setTermoPesquisa(pesquisa)}>Pesquisar</button>
        <p>{pesquisa}</p>
        <p>{termoPesquisa}</p>
        </>
    )
}

export {CampoPesquisa}
//importação das imagens
import acesa from '../assets/acesa.png'
import apagada from '../assets/apagada.png'

//importação do useState
import { useState } from 'react'

export default function Atividade1() {

    //criando o estado para a lâmpada
    const [lampada, setLampada] = useState(apagada)

    const bgApagada = 'bg-dark text-light min-vh-100'
    const bgAcesa = 'bg-light text-dark min-vh-100'


    return(
        <div className={lampada===apagada? bgApagada:bgAcesa} >
            <img src={lampada} alt={lampada=== apagada ? 'apagada' : 'acesa'} width={200}/>
            <div>
                <button className='bg-success text-light'
                onClick={() => setLampada(acesa)}
                >Acender Lâmpada</button>
                <button className='bg-danger text-light' 
                onClick={() => setLampada(apagada)}>Apagar Lâmpada</button>
            </div>

        </div>
    )

}
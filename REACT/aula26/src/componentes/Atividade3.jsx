/* Atividade: Crie um formulário para cadastro do produto: nome, preço, cor e descrição. A cor e o nome serão usados para compor a imagem com a seguinte regra : https://placehold.co/200x200/corProduto/ffffff?text=nomeProduto.
        Exemplo: https://placehold.co/200x200/ff0000/ffffff?text=camisa. Após o cadastro do produto, renderize-o na tela usando o card do react bootstrap. Importante: crie o componente CardProduto.jsx que receba as props : url, nome, descricao, preco e exiba essas informações após o cadastro, no componente CadastroPorduto OU Atividade3.</p>
        {/* https://react-bootstrap.netlify.app/docs/components/cards 
*/

import { useState } from 'react'
import CardProduto from './CardProduto'

const estilo ={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    backgroundColor: 'black',
    color: 'white',
    pading: '20px',
    borderRadius: '20px',
    border: '2px solid white'
}

const estilo2 ={
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        backgroundColor: 'black',
        color: 'white',
        pading: '20px',
        borderRadius: '20px',
        border: '2px solid white'
    },
    botao: {
        backgroundColor: 'white',
        color: 'black',
        border: 'none',
    }
}
export default function Atividade3() {

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState(0)
    const [cor, setCor] = useState('')
    const [descricao, setDescricao] = useState('')
    // variavel extra para armazenar o produto cadastrado
    const [produto, setProduto] = useState({})

    function cadastrarProduto(e) {
        e.preventDefault() //evento de submissão do formulário
        const codigoCor = cor.replace('#', '') //remoção do # da cor para compor a url da imagem
        const url = `https://placehold.co/200x200/${codigoCor}/ffffff?text=${nome}`
        if(nome.length === 0 || preco <= 0 || cor.length === 0 || descricao.length === 0){
            alert('preencha todos os campos')
            return
        }

        setProduto({
            url: url, 
            nome: nome,
            preco: Number(preco).toFixed(2),
            descricao: descricao
        })

        console.log(url)

        //limpar os campos do formulário
        setNome('')
        setPreco(0)
        setCor('')
        setDescricao('')
    }

    return(
        <div >
            <form onSubmit={(e)=>cadastrarProduto(e)} style={estilo2.card}>
                <input 
                    type="text" 
                    placeholder='nome do produto' 
                    onChange={(e)=> setNome(e.target.value)} 
                    value={nome}
                />
                <input 
                    type="number" 
                    placeholder='preço do produto' 
                    onChange={(e)=> setPreco(e.target.value)} 
                    value={preco}
                />
                <input 
                    type="color" 
                    placeholder='cor do produto' 
                    onChange={(e)=> setCor(e.target.value)} 
                    value={cor}
                />
                
                <textarea 
                    placeholder='descrição do produto' 
                    onChange={(e)=> setDescricao(e.target.value)} 
                    value={descricao}
                    cols='30'
                    rows='10'
                />
                <input 
                    type="submit" 
                    value="cadastrar produto" style={estilo2.botao}/>
            </form>

            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                {produto.nome && <CardProduto url={produto.url} nome={produto.nome} descricao={produto.descricao} preco={produto.preco}/>}
            </div>

            


        </div>

    )

}
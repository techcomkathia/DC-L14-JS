import { useState } from "react";


export default function CadastrarUsuario() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    async function cadastroUsuario(usuario) {
        try{
            const resposta = await fetch("https://fakestoreapi.com/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario)
            })

            console.log(resposta)

            if(resposta.status === 201){
                const dados = await resposta.json()
                console.log(dados)
                //LIMPAR FORMULÁRIO
                setNome("")
                setEmail("")
                setSenha("")
                setConfirmarSenha("")
            }
                    
        }
        catch(erro){
            console.log(erro)
            alert('Cadastro falhou')
        }
      
        
    }

    return (
        <div>
            <h1>Cadastrar Usuário</h1>

            <form action="" onSubmit={(e)=>{
                e.preventDefault()

                if(!senha || !confirmarSenha || !email || !nome){
                    alert("Preencha todos os campos")
                    return
                }

                if(senha !== confirmarSenha){
                    alert("Senhas diferentes")
                    return
                }

                cadastroUsuario({
                    username: nome,
                    email: email,
                    password: senha,
                    id: Date.now()
                })

            }}>
                <input type="text" value={nome} placeholder=" nome de usuario" onChange={(e)=>setNome(e.target.value)} />
                <input type="email" value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" value={senha}  placeholder="senha" onChange={(e)=> setSenha(e.target.value)}/>
                <input type="password" value={confirmarSenha} placeholder="confirmar senha"  onChange={(e)=> setConfirmarSenha(e.target.value)}/>
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    );
}
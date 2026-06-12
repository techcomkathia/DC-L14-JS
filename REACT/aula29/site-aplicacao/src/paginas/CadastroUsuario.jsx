import { useContext, useState } from "react";
import {UsuariosContexto} from '../contexto/UsuariosContexto.jsx'




export default function CadastroUsuario() {

    const {postUsuario} = useContext(UsuariosContexto)


    // crie um formulário com os campos de nome, email e senha, endereço com : logradouro, numero, complemento, bairro, cidade, estado e cep
    //ao fazer o submit do formulário, valide os campos e caso estiverem corretos, faça a execução da função postUsuario que deve ser compartilhada/consumida pelo contexto.
    // ao enviar o formulário, adicione o usuário ao array de usuários

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [cep, setCep] = useState('')
    const [usuario, setUsuario] = useState()

    function cadastrarUsuario(){
        if(senha !== confirmarSenha){
            alert('As senhas devem ser iguais')
            return
        }

        postUsuario(nome, email, senha, {logradouro, numero, complemento, bairro, cidade, estado, cep})
        setUsuario({nome: nome, email:  email, senha: senha, endereco: {logradouro: logradouro, numero: numero, complemento: complemento, bairro: bairro, cidade: cidade, estado: estado, cep: cep}})
        console.log('Usuário cadastrado com sucesso')

        setNome('')
        setEmail('')
        setSenha('')
        setConfirmarSenha('')
        setLogradouro('')
        setNumero('')
        setComplemento('')
        setBairro('')
        setCidade('')
        setEstado('')
        setCep('')

    }

    return (
        <div>
            <h1>Cadastro de Usuário</h1>
            {/* <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.nome}</li>
                ))}
            </ul> */}

            <form action="" onSubmit={(e) => {
                e.preventDefault();
                 cadastrarUsuario();
                }
            } >
                <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <input type="password" placeholder="Confirme sua senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
                <input type="text" placeholder="Digite seu logradouro" value={logradouro} onChange={(e) => setLogradouro(e.target.value)} />
                <input type="text" placeholder="Digite seu numero" value={numero} onChange={(e) => setNumero(e.target.value)} />
                <input type="text" placeholder="Digite seu complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                <input type="text" placeholder="Digite seu bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                <input type="text" placeholder="Digite sua cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                <input type="text" placeholder="Digite seu estado" value={estado} onChange={(e) => setEstado(e.target.value)} />
                <input type="text" placeholder="Digite seu cep" value={cep} onChange={(e) => setCep(e.target.value)} />
                
                <button type="submit" >Cadastrar</button>

            </form>

            {usuario && (
                <div>
                    <h3>Usuário cadastrado com sucesso</h3>
                    <p>Nome: {usuario.nome}</p>
                    <p>Email: {usuario.email}</p>
                </div>
            )}
        </div>
    );
}
/* ------------ATIVIDADE 1 -------------------
//Crie um projeto em react com o vite (npm create vite@latest) siga todas as etapas no terminal 
//crie uma pasta chamada componentes, dentro da pasta SRC.
//na pasta de componentes crie seu primeiro componente: InfoUsuario.jsx
//Esse componente deve retornar a seguinte estrutura:
// Nome: João
// Idade: 30
// Profissão: Engenheiro de Software
// Email: 5KXfH@example.com
// Dica: use um fragmento <> </> ou uma div <div></div> para agrupar os elementos filhos com as informações do usuário*/

export default function InfoUsuario() {
    return (
        <div>
            <h1>Nome: João</h1>
            <h2>Idade: 30</h2>
            <h3>Profissão: Engenheiro de Software</h3>
            <h4>Email: 5KXfH@example.com</h4>
        </div>
    );
}

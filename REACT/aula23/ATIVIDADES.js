// ------------ATIVIDADE 1 -------------------
//Crie um projeto em react com o vite (npm create vite@latest) siga todas as etapas no terminal 
//crie uma pasta chamada componentes, dentro da pasta SRC.
//na pasta de componentes crie seu primeiro componente: InfoUsuario.jsx
//Esse componente deve retornar a seguinte estrutura:
// Nome: João
// Idade: 30
// Profissão: Engenheiro de Software
// Email: 5KXfH@example.com
// Dica: use um fragmento <> </> ou uma div <div></div> para agrupar os elementos filhos com as informações do usuário


//----------------ATIVIDADE 2 ------------
//Usando o conceito da atividade 1 crie um segundo componente chamado InfoUsuarioProps.jsx
//Esse componente deve retornar a seguinte estrutura:
// Nome: propriedade nome
// Idade: propriedade idade
// Profissão: propriedade profissão
// Email: propriedade email
//Dica: use o objeto props para acessar as propriedades do componente pai ou faça a desestruturação das propriedades {propriedade1, propriedade2, ...}
//use o componente 3x com diferentes valores para as propriedades no arquivo App.jsx


//-----------------ATIVIDADE 3 ------------------
//Usando props ( propriedades ) crie um terceiro componente chamado CardProduto.jsx
//Esse card deve receber a seguinte estrutura:
//imagem (https://placehold.co/400)
//nome
//preço
//descricao


//opcionalmente esse card pode receber 2 props chamada:
// promocao que deve receber um booleano 
// uma propriedade chamada desconto que deve receber um valor numérico que indica a porcentagem de desconto 
//caso o valor da props promocao seja false, o card deve exibir o preço sem desconto e uma borda azul
//caso o valor da props promocao seja o booleano true e a props desconto seja um número, o card deve exibir 2 preços, o preço com desconto.  Além disso uma borda vermelha deve ser exibida ao redor do card caso a props promocao seja true
//Dica: use o objeto props para acessar as propriedades do componente pai ou faça a desestruturação das propriedades {propriedade1, propriedade2, ...}
//use o componente 2x com diferentes valores para as propriedades no arquivo App.jsx
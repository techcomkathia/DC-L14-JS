/* --------------------- ATIVIDADE 1 ---------------------

1. Crie um componente que receba props : url, nome, descricao, preco e exiba essas informações em um card do react bootstrap. https://react-bootstrap.netlify.app/docs/components/cards e renderize esse componente usando o primeiro produto do array products */

/* DICAS: crie o projeto usando Vite, instale o react-bootstrap e o bootstrap, importe o css do bootstrap no index.html ( via arquivo ou com o cdn) ou no App.jsx (import '../node_modules/bootstrap/dist/css/bootstrap.min.css'), crie um componente chamado CardProduto para exibir as props usando os componentes do react-bootstrap. */

const products = [
  {
    id: 1,
    name: "Notebook Gamer",
    price: 4500,
    image: "https://placehold.co/300x200?text=Notebook",
    description: "Notebook potente para jogos e tarefas exigentes."
  },
  {
    id: 2,
    name: "Mouse RGB",
    price: 150,
    image: "https://placehold.co/300x200?text=Mouse",
    description: "Mouse de qualidade para jogos e tarefas exigentes."
  },
  {
    id: 3,
    name: "Teclado Mecânico",
    price: 350,
    image: "https://placehold.co/300x200?text=Teclado",
    description: "Teclado de qualidade para jogos e tarefas exigentes."
  },
  {
    id: 4,
    name: "Monitor Ultrawide",
    price: 1800,
    image: "https://placehold.co/300x200?text=Monitor",
    description: "Monitor ultrawide para imersão total em jogos e produtividade."
  }
]


/* ------------------- ATIVIDADE 2 ---------------------
Crie um componente chamado ListagemProdutos que receba 2 props : título e listaProdutos. O componente deve exibir o título e  através do metodo map, renderizar um card (CardProduto) para cada produto usando criado na atividade 1. Renderize o componente ListagemProdutos no App.jsx passando como props o título "Produtos em Destaque" e a lista de produtos do array products. 
Importante: não esqueça da chave unica (key) ao renderizar a lista de produtos usando o map. */


/* ------------------- ATIVIDADE 3 ---------------------

Faça a alteração do componente ListagemProdutos para que ele exiba uma mensagem "Nenhum produto encontrado" caso a lista de produtos seja vazia. A propriedade promomocao é um booleano (true ou false) que indica que a borda do card deve ser vermelha (caso seja true) ou azul (caso seja false). 

Faça a alteração do componente CardProduto para receber também essa nova props e exibir a borda de acordo com o valor da propriedade promocao. Renderize o componente ListagemProdutos no App.jsx passando uma lista vazia para a props listaProdutos e uma outras lista de produtos para a props listaProdutos e um booleano para a props promocao.
Dica: o valor padrao da propriedade promocao deve ser false
*/

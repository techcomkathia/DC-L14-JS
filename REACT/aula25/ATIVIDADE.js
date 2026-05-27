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


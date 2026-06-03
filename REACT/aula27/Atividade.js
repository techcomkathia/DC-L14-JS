/* -------------------- Atividade 1 ---------------------
Crie uma aplicação em react com vite e faça a instalação do react router dom. (npm i react-router-dom)
Crie os diretórios componentes, paginas e rotas.
Crie os arquivos Home.jsx, Produtos.jsx, PaginaNaoEncontrada.jsx no diretório paginas.
Crie os arquivos Rotas.jsx no diretório rotas.

Faça a configuração do roteamento no componente App.jsx utilizando o componente BrowserRouter. Utilize o componente Rotas para renderizar as rotas da aplicação.

Faça um componente Header.jsx para renderizar o cabeçalho da aplicação e usando o componente Link para navegar entre as páginas. Use esse componente dentro do BrowserRouter no componente App.jsx.

*/



/* -------------------- Atividade 2 ---------------------
 Para um array de produtos, crie uma renderização por lista na página produtos, onde ao clicar sob o nome do produto deverá ser feita a navegação para a pagina de detalhes do produto mostrando o restante das informações do produto.
 ex.:

 Página produtos (rota /produtos)
 
 Produto 1
 Produto 2
 Produto 3

 Clicando em produto 1 : acessar a rota /produtos/1

 Página detalhe do produto 1

 Nome: produto 1
 Preço: 10.00
 Descricao: descricao do produto 1

 DICAS: use o hook useParams para conseguir utilizar os parâmetros da rota, faça a configuração da rota /produtos/:id para renderizar a página de DetalheProduto.
 Utilize o componente Link para navegar entre as páginas.

*/

const products = [
  {
    id: 1,
    name: "Notebook Gamer",
    price: 4500,
    image: "https://placehold.co/300x200?text=Notebook"
  },
  {
    id: 2,
    name: "Mouse RGB",
    price: 150,
    image: "https://placehold.co/300x200?text=Mouse"
  },
  {
    id: 3,
    name: "Teclado Mecânico",
    price: 350,
    image: "https://placehold.co/300x200?text=Teclado"
  },
  {
    id: 4,
    name: "Monitor Ultrawide",
    price: 1800,
    image: "https://placehold.co/300x200?text=Monitor"
  }
]
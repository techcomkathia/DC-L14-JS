# 🛍️ Atividade — Shoply: do HTML para React

## Contexto

Você recebeu a interface de uma loja virtual fictícia chamada **Shoply**.

A aplicação inicial foi construída com **HTML, CSS e JavaScript** e já possui uma parte da interface e dos comportamentos necessários.

Sua missão é **transformar essa aplicação em uma aplicação React**, aproveitando o HTML e o CSS fornecidos como ponto de partida.

Ao final, a aplicação deverá estar preparada para ser testada com **Cypress**.

---

## 🎯 Objetivos

Durante a atividade, você deverá praticar:

- componentes React;
- JSX;
- `useState`;
- `useEffect`;
- `createContext`e`useContext`;
- React Router DOM;
- renderização de listas com `.map()`;
- renderização condicional;
- eventos;
- consumo de API com `fetch`;
- organização de componentes.

---

# 1. Estrutura final

A aplicação deverá possuir, no mínimo, três páginas:

| Rota | Página | Responsabilidade |
|---|---|---|
| `/` | Home | Apresentação da loja |
| `/produtos` | Produtos | Listagem, busca, filtro, ordenação e adição ao carrinho |
| `/carrinho` | Carrinho | Visualização, remoção e total dos produtos |

Uma sugestão de organização:

```text
src/
├── componentes/
│   ├── Cabecalho.jsx
│   ├── CartaoProduto.jsx
│   ├── ListaProdutos.jsx
│   ├── FiltrosProdutos.jsx
│   ├── Carregando.jsx
│   └── MensagemVazia.jsx
│
├── paginas/
│   ├── Home.jsx
│   ├── Produtos.jsx
│   └── Carrinho.jsx
│   └── PaginaNaoEncontrada.jsx
│
├── contexto/
│   └── CarrinhoContexto.jsx
│
├── servicos/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
```

A estrutura é apenas uma sugestão. Você pode organizar os arquivos de outra maneira, desde que o projeto fique organizado e funcional.

---

# 2. Bloco 2 - Criação do roteamento, estrutura inicial das páginas e contextos
Para facilitar a estruturação da aplicação, comece criando a estrutura de roteamento e as páginas a aplicação.

Crie as três páginas principais:

```text
Home
Produtos
Carrinho
```

Por enquanto, não se preocupe em colocar toda a lógica dentro delas.O objetivo é separar a aplicação em páginas.

Crie também o contexto do Carrinho, dê acesso a atoda a aplicação e teste para verificar se todas as páginas conseguem acessar o contexto.



# 3. Bloco 3 — Transformando o HTML em componentes

Comece analisando o arquivo HTML fornecido.

Identifique as principais partes da interface e transforme-as em componentes React.

Algumas partes que podem virar componentes:

- cabeçalho;
- destaque inicial;
- controles de busca;
- seletor de categoria;
- seletor de ordenação;
- cartão de produto;
- lista de produtos;
- mensagem de carregamento;
- mensagem de lista vazia;
- carrinho.

### Requisitos

- A interface deve ser construída com JSX.
- Evite deixar toda a aplicação dentro de um único componente.
- Crie componentes reutilizáveis.
- Aproveite o CSS fornecido.

### 💡 Pergunta para pensar

> Quais partes da interface possuem uma responsabilidade própria e poderiam ser reutilizadas?

---

# 3. Bloco 2 — Criando as páginas

### Home

A página inicial deve apresentar:

- o nome da loja;
- o texto de apresentação;
- uma chamada para conhecer os produtos;
- um botão para acessar `/produtos`.

### Produtos

Deve conter:

- busca;
- filtro por categoria;
- ordenação;
- lista de produtos.

### Carrinho

Deve conter:

- produtos adicionados;
- botão para remover produtos;
- total da compra.

---


### Requisitos

- A navegação deve acontecer sem recarregar a página.
- Utilize os recursos do React Router DOM.
- O cabeçalho deve aparecer nas três páginas.
- O botão da Home deve levar o usuário para `/produtos`.
- O usuário deve conseguir acessar o carrinho pela navegação.

---

# 5. Bloco 4 — Consumindo a API

A aplicação original utiliza a seguinte API:

```text
https://fakestoreapi.com/products
```

Na página de produtos, faça a requisição para buscar os produtos.

### Requisitos

Utilize:

- `useState`;
- `useEffect`;
- `fetch`.

Você deverá controlar pelo menos três situações:

```text
Carregando
Sucesso
Erro
```

### Durante o carregamento

Exiba:

```text
Carregando produtos...
```

### Se ocorrer um erro

Exiba uma mensagem informando que não foi possível carregar os produtos.

### Se a requisição funcionar

Exiba os produtos recebidos da API.

### 💡 Pergunta para pensar

> Por que a requisição deve acontecer dentro de um `useEffect`?

---

# 6. Bloco 5 — Renderizando os produtos

Crie um componente responsável pelo cartão de produto.

Cada produto deve apresentar:

- imagem;
- categoria;
- título;
- preço;
- botão "Adicionar ao carrinho".

Os dados devem vir da API.

### Regra

Não cadastre manualmente todos os produtos no JSX.

Utilize a renderização de listas:

```jsx
produtos.map(...)
```

### Estrutura esperada

```text
ListaProdutos
    ↓
CartaoProduto
```

A lista deve passar as informações necessárias para cada cartão através de `props`.

---

# 7. Bloco 6 — Eventos e busca

Agora vamos adicionar interatividade à página de produtos.

O usuário deverá conseguir pesquisar produtos pelo nome.

### Requisitos

O campo de busca deve:

1. receber o texto digitado;
2. atualizar um estado;
3. filtrar os produtos;
4. atualizar a lista exibida.

Utilize um evento de formulário/input do React.

### Exemplo do fluxo

```text
Usuário digita
      ↓
evento
      ↓
setEstado(...)
      ↓
filtro
      ↓
lista atualizada
```

---

# 8. Bloco 7 — Filtro por categoria

O segundo controle deve permitir filtrar os produtos por categoria.

As categorias devem ser obtidas a partir dos produtos retornados pela API.

### Requisitos

- Criar as opções de categoria dinamicamente.
- Possuir a opção "Todas as categorias".
- Atualizar o estado quando o usuário alterar a categoria.
- Exibir somente os produtos correspondentes ao filtro.

### 💡 Desafio

Evite duplicar manualmente as categorias no JSX.

---

# 9. Bloco 8 — Ordenação

Implemente as opções de ordenação:

```text
Ordenar
Menor preço
Maior preço
Nome A-Z
```

O usuário deve conseguir alterar a ordenação através do `<select>`.

### Requisitos

- Utilize estado para controlar a opção escolhida.
- A lista deve ser atualizada de acordo com a opção.
- Não altere desnecessariamente o array original recebido da API.

---

# 10. Bloco 9 — Renderização condicional

Agora vamos tratar os diferentes estados da interface.

A página de produtos deverá apresentar conteúdos diferentes dependendo da situação.

### Situação 1 — Carregando

```text
Carregando produtos...
```

### Situação 2 — Erro

```text
Não foi possível carregar os produtos.
```

### Situação 3 — Nenhum resultado

```text
Nenhum produto encontrado 😕
```

### Situação 4 — Produtos encontrados

Renderize a lista normalmente.

### Regra

Utilize **renderização condicional do React** para controlar essas situações.

---

# 11. Bloco 10 — Criando o contexto do carrinho

Agora surge um problema:

> O produto é adicionado na página `/produtos`, mas o contador do carrinho está no cabeçalho.

Precisamos compartilhar esse estado entre diferentes componentes.

Crie um contexto para o carrinho utilizando:

```text
useContext
```

O contexto deverá disponibilizar, no mínimo:

```text
carrinho
adicionarAoCarrinho
removerDoCarrinho
```

Você pode criar outras funções se achar necessário.

### O estado do carrinho deve ser compartilhado entre:

```text
Cabeçalho
Produtos
Carrinho
```

---

# 12. Bloco 11 — Adicionando produtos ao carrinho

No cartão de produto, o botão:

```text
Adicionar ao carrinho
```

deve adicionar o produto ao carrinho.

### Requisitos

Ao clicar:

1. identificar o produto;
2. adicionar o produto ao contexto;
3. atualizar a quantidade exibida no cabeçalho;
4. manter o carrinho mesmo quando o usuário navegar entre as páginas.

O contador deve representar a quantidade de itens adicionados.

---

# 13. Bloco 12 — Construindo a página Carrinho

Agora implemente `/carrinho`.

## Carrinho vazio

Quando não houver produtos, mostre:

```text
Seu carrinho está vazio.
```

## Carrinho com produtos

Quando houver produtos, renderize uma lista contendo:

- imagem;
- nome;
- preço;
- botão "Remover".

O botão deve remover o item do carrinho.

---

# 14. Bloco 13 — Calculando o total

Na página do carrinho, exiba o valor total da compra.

Exemplo:

```text
Total: R$ 150,00
```

O total deve ser calculado a partir dos produtos que estão no carrinho.

### Requisito

O valor deve ser atualizado automaticamente quando:

- um produto for adicionado;
- um produto for removido.

---

# 15. Bloco 14 — DESAFIO 1

A interface inicial possui uma mensagem de confirmação quando um produto é adicionado.

Implemente esse comportamento em React.

Ao adicionar um produto:

```text
Produto adicionado ao carrinho!
```

A mensagem deve aparecer temporariamente e desaparecer depois de alguns segundos.

### Conceitos

Esse desafio combina:

- `useState`;
- eventos;
- renderização condicional;
- `setTimeout`.

---

# 16. DESAFIO 2 ⭐

Se terminar antes dos outros grupos, implemente uma melhoria.

Escolha uma:

- botão para limpar o carrinho;
- quantidade de cada produto;
- impedir produtos duplicados;
- botão "Continuar comprando";
- mensagem diferente quando o carrinho estiver vazio;
- página de detalhes do produto;
- indicador visual da página atual no menu.

---

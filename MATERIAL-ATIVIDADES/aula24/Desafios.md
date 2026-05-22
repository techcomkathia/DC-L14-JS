# React — Atividades Práticas
## Componentização, Props, useState, Renderização Condicional e Listas

---

# Atividade 1 — Fácil
# Card de Perfil de Usuário

## Objetivo

Nesta atividade você irá praticar:

- Criação de componentes
- Uso de props
- Renderização condicional
- Renderização de listas com `.map()`

---

## Enunciado

Crie uma aplicação React que exiba cards de usuários.

Cada usuário deverá possuir:
- nome
- profissão
- imagem
- status online (`true` ou `false`)

Sua aplicação deverá:
1. Criar um componente chamado `UserCard`
2. Passar os dados utilizando `props`
3. Exibir:
   - imagem
   - nome
   - profissão
4. Mostrar:
   - `"Online"` se o usuário estiver online
   - `"Offline"` caso contrário

---

## Estrutura sugerida

```bash
src/
 ├── components/
 │    └── UserCard.jsx
 ├── App.jsx
 └── main.jsx
```

---

## Dados iniciais

```js
const users = [
  {
    id: 1,
    name: "Carlos Henrique",
    profession: "Desenvolvedor Front-end",
    image: "https://placehold.co/200x200?text=Carlos",
    online: true
  },
  {
    id: 2,
    name: "Marina Silva",
    profession: "UI Designer",
    image: "https://placehold.co/200x200?text=Marina",
    online: false
  },
  {
    id: 3,
    name: "Lucas Almeida",
    profession: "Back-end Developer",
    image: "https://placehold.co/200x200?text=Lucas",
    online: true
  }
]
```

---

## Dicas

### Renderização condicional

```jsx
{online ? "Online" : "Offline"}
```

---

### Renderização de listas

```jsx
{
  users.map((user) => (
    <UserCard
      key={user.id}
      name={user.name}
      profession={user.profession}
      image={user.image}
      online={user.online}
    />
  ))
}
```

---

# Atividade 2 — Intermediária
# Loja Virtual com Carrinho

---

## Objetivo

Nesta atividade você irá praticar:

- `useState`
- Componentização
- Renderização de listas
- Renderização condicional
- Manipulação de eventos

---

## Enunciado

Crie uma pequena loja virtual.

A aplicação deverá:
1. Exibir uma lista de produtos
2. Possuir botão:
   - `"Adicionar ao carrinho"`
3. Mostrar:
   - quantidade de itens no carrinho
4. Caso o carrinho esteja vazio:
   - exibir a mensagem `"Carrinho vazio"`

---

## Componentes sugeridos

- `Header`
- `ProductCard`
- `Cart`

---

## Dados iniciais

```js
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
```

---

## Requisitos

- Utilize `useState` para controlar os itens do carrinho
- Cada clique no botão deverá adicionar um item ao carrinho
- Mostrar no topo da aplicação:

```txt
Itens no carrinho: X
```

---

## Dicas

### Criando estado

```jsx
const [cart, setCart] = useState([])
```

---

### Adicionando item ao carrinho

```jsx
setCart([...cart, product])
```

---

### Renderização condicional

```jsx
{
  cart.length === 0
    ? <p>Carrinho vazio</p>
    : <p>Você possui itens no carrinho</p>
}
```

---

### Renderização dos produtos

```jsx
{
  products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))
}
```

---

# Atividade 3 — Avançada
# Catálogo de Filmes com Favoritos

---

## Objetivo

Nesta atividade você irá praticar:

- Componentização
- `useState`
- Props
- Renderização condicional
- Renderização de listas
- Filtros
- Atualização dinâmica da interface

---

## Enunciado

Crie uma aplicação React de catálogo de filmes.

A aplicação deverá:
1. Exibir uma lista de filmes
2. Possuir:
   - título
   - categoria
   - nota
   - imagem
3. Permitir:
   - favoritar filmes
4. Criar filtros:
   - mostrar todos
   - mostrar apenas favoritos
5. Exibir mensagem caso:
   - não existam favoritos

---

## Componentes sugeridos

- `Header`
- `MovieCard`
- `FilterButtons`
- `FavoriteList`

---

## Dados iniciais

```js
const movies = [
  {
    id: 1,
    title: "Interestelar",
    category: "Ficção Científica",
    rating: 9.2,
    image: "https://placehold.co/300x400?text=Interestelar",
    favorite: false
  },
  {
    id: 2,
    title: "Batman Begins",
    category: "Ação",
    rating: 8.4,
    image: "https://placehold.co/300x400?text=Batman",
    favorite: false
  },
  {
    id: 3,
    title: "Toy Story",
    category: "Animação",
    rating: 8.0,
    image: "https://placehold.co/300x400?text=Toy+Story",
    favorite: false
  },
  {
    id: 4,
    title: "Vingadores",
    category: "Aventura",
    rating: 8.5,
    image: "https://placehold.co/300x400?text=Vingadores",
    favorite: false
  }
]
```

---

## Funcionalidades obrigatórias

### Favoritar filme

Cada card deverá possuir botão:

```txt
Favoritar
```

ou

```txt
Remover Favorito
```

---

### Filtros

Criar dois botões:

```txt
Todos
Favoritos
```

---

### Renderização condicional

Caso não existam favoritos:

```txt
Nenhum filme favoritado
```

---

## Dicas

### Criando estado

```jsx
const [movieList, setMovieList] = useState(movies)
```

---

### Atualizando favorito

```jsx
const toggleFavorite = (id) => {
  const updatedMovies = movieList.map((movie) => {

    if(movie.id === id){
      return {
        ...movie,
        favorite: !movie.favorite
      }
    }

    return movie
  })

  setMovieList(updatedMovies)
}
```

---

### Filtrando favoritos

```jsx
const favoriteMovies = movieList.filter(
  (movie) => movie.favorite
)
```

---

### Renderização da lista

```jsx
{
  movieList.map((movie) => (
    <MovieCard
      key={movie.id}
      movie={movie}
    />
  ))
}
```

---

# Desafio Extra

Após finalizar as atividades, tente adicionar:

- Busca por nome
- Contador de favoritos
- Tema Dark/Light
- Modal de detalhes
- Categorias dinâmicas
- Persistência usando `localStorage`

---

# Entrega

O projeto deverá:
- funcionar corretamente
- possuir componentes separados
- utilizar props
- utilizar `useState`
- utilizar renderização condicional
- utilizar renderização de listas

---

# Organização Recomendada

```bash
src/
 ├── components/
 ├── pages/
 ├── App.jsx
 ├── main.jsx
 └── assets/
```

---

# Observações

- Utilize nomes claros para componentes e variáveis.
- Organize os componentes em pastas.
- Faça commits frequentes no GitHub.
- Utilize boas práticas de identação e organização do código.
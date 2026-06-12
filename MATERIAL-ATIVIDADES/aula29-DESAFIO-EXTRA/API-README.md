# Oscar API

API Fake desenvolvida com JSON Server para consumo por aplicações React.

---

# Inicialização

Instalar as dependências:

```bash
npm install
```

Executar a API:

```bash
npm run server
```

Servidor disponível em:

```text
http://localhost:3001
```

# Arquivos de Configuração 

## json-server.json

```json
{
"port": 3001,
"watch": true,
"host": "localhost",
}
```
## package.json

```json
{
    "name": "oscar-api",
    "version": "1.0.0",
    "description": "API Fake para o projeto Oscar Archive utilizando JSON Server",
    "main": "db.json",
    "scripts": {
    "server": "json-server --watch db.json --port 3001",
    "server": "json-server --watch db.json --routes routes.json --port 3001"
    },
    "keywords": [
        "json-server",
        "api",
        "react",
        "oscar"
    ],
    "author": "seu nome aqui",
    "license": "MIT",
    "dependencies": {
        "json-server": "^1.0.0-beta.3"
    }
}

```

---

# Recursos Disponíveis

## Filmes

Coleção contendo os filmes indicados ao Oscar.

### Estrutura

```json
{
  "id": 1,
  "titulo": "O Discurso do Rei",
  "tituloOriginal": "The King's Speech",
  "ano": 2010,
  "diretor": "Tom Hooper",
  "categoria": "Melhor Filme",
  "genero": "Drama",
  "duracao": 118,
  "vencedor": true,
  "poster": "https://...",
  "sinopse": "..."
}
```

---

## Usuários

Coleção contendo os usuários da aplicação.

### Estrutura

```json
{
  "id": 1,
  "nome": "Maria Oliveira",
  "email": "maria@email.com",
  "senha": "123456",
  "favoritos": [1, 5, 9]
}
```

---

# Rotas

## Filmes

### Listar todos os filmes

```http
GET /filmes
```

Exemplo:

```http
GET http://localhost:3001/filmes
```

---

### Buscar filme por ID

```http
GET /filmes/:id
```

Exemplo:

```http
GET http://localhost:3001/filmes/1
```

---

### Cadastrar filme

```http
POST /filmes
```

Body:

```json
{
  "titulo": "Oppenheimer",
  "ano": 2023,
  "diretor": "...",
  "categoria": "...",
  "genero": "...",
  "duracao": 118,
  "vencedor": true,
  "poster": "https://...",
  "sinopse": "..."
}
```

---

### Atualizar filme

```http
PUT /filmes/:id
```

Exemplo:

```http
PUT /filmes/1
```

---

### Excluir filme

```http
DELETE /filmes/:id
```

Exemplo:

```http
DELETE /filmes/1
```

---

# Usuários

### Listar usuários

```http
GET /usuarios
```

---

### Buscar usuário por ID

```http
GET /usuarios/:id
```

---

### Cadastrar usuário

```http
POST /usuarios
```

---

### Atualizar usuário

```http
PUT /usuarios/:id
```

---

### Excluir usuário

```http
DELETE /usuarios/:id
```

---

# Consultas e Filtros

O JSON Server possui diversos filtros automáticos.

---

## Buscar por ano

Retorna apenas filmes de um determinado ano.

```http
GET /filmes?ano=2010
```

---

## Buscar por vencedor

Retorna apenas filmes vencedores.

```http
GET /filmes?vencedor=true
```

Ou:

```http
GET /filmes?vencedor=false
```

---

## Buscar por gênero

```http
GET /filmes?genero=Drama
```

---

## Buscar por diretor

```http
GET /filmes?diretor=Christopher%20Nolan
```

---

## Buscar por categoria

```http
GET /filmes?categoria=Melhor%20Filme
```

---

# Busca Textual

Pesquisa em todos os campos da coleção.

```http
GET /filmes?q=oppenheimer
```

Exemplos:

```http
GET /filmes?q=nolan
```

```http
GET /filmes?q=drama
```

```http
GET /filmes?q=parasita
```

---

# Ordenação

## Ordenar por ano

```http
GET /filmes?_sort=ano
```

---

## Ordenar por ano decrescente

```http
GET /filmes?_sort=ano&_order=desc
```

---

## Ordenar por duração

```http
GET /filmes?_sort=duracao
```

---

# Limitação de Resultados

Retorna apenas uma quantidade específica de registros.

```http
GET /filmes?_limit=10
```

---

# Paginação

## Primeira página

```http
GET /filmes?_page=1&_limit=10
```

---

## Segunda página

```http
GET /filmes?_page=2&_limit=10
```

---

# Combinação de Filtros

O JSON Server permite combinar filtros.

Exemplo:

Filmes de drama lançados em 2023:

```http
GET /filmes?ano=2023&genero=Drama
```

---

Filmes vencedores ordenados por ano:

```http
GET /filmes?vencedor=true&_sort=ano
```

---

Filmes vencedores de 2023:

```http
GET /filmes?ano=2023&vencedor=true
```

---

# Favoritos

Os favoritos são armazenados no usuário.

Exemplo:

```json
{
  "id": 1,
  "nome": "Maria Oliveira",
  "favoritos": [1, 5, 9]
}
```

Os valores do array representam os IDs dos filmes favoritados.

Para exibir os favoritos:

1. Buscar o usuário.
2. Ler o array favoritos.
3. Buscar os filmes correspondentes.

---

# URL Base

```text
http://localhost:3001
```

Exemplos:

```text
http://localhost:3001/filmes
```

```text
http://localhost:3001/usuarios
```

```text
http://localhost:3001/filmes/1
```

```text
http://localhost:3001/usuarios/1
```

# Revisão da Aula 44

Esta revisão deve orientar a construção de uma aplicação do zero usando Node.js, Express, MySQL, autenticação JWT e criptografia de senhas.

## Objetivo

O objetivo é que você entenda por que cada camada existe e como cada tecnologia ajuda a tornar a aplicação estruturada, segura e organizada.

---

## 1. Tecnologias e recursos a instalar

Você vai precisar instalar estas dependências:

- `express` - servidor web para criar rotas e responder requisições.
- `dotenv` - para ler variáveis de ambiente a partir de um arquivo `.env`.
- `mysql2` - para conectar e executar comandos no MySQL.
- `bcryptjs` - para criptografar senhas e comparar com segurança.
- `jsonwebtoken` - para criar e verificar tokens JWT.

Dependências de desenvolvimento opcionais:

- `nodemon` - reinicia o servidor automaticamente quando o código muda.

> Por que essas tecnologias?
> - `Express` organiza as rotas e o servidor.
> - `dotenv` mantém senhas e configurações fora do código.
> - `mysql2` permite conversar com o banco de dados MySQL.
> - `bcryptjs` protege a senha do usuário.
> - `jsonwebtoken` cria a autenticação baseada em token.

---

## 2. Arquitetura obrigatória

A aplicação deve ter estas camadas, cada uma com responsabilidade clara:

- `config` ou `infra`: configurações de ambiente e conexão com o banco.
- `models`: definição das tabelas e funções de acesso ao banco.
- `services`: regras de negócio, operações e transformações de dados.
- `controllers`: recebe a requisição e envia a resposta HTTP.
- `middlewares`: validações, autenticação e tratamento antes do controlador.
- `routes`: define os endpoints que o cliente pode chamar.

> A ideia é que você construa entendendo o porquê de cada camada.
> - o `model` fala com o banco;
> - o `service` decide o que a aplicação faz;
> - o `controller` sabe falar com o cliente;
> - o `middleware` protege, valida e organiza o fluxo.

---

## 3. Configuração do MySQL

Crie um banco de dados MySQL para a aplicação, por exemplo `aula44`.

Exemplo de comandos SQL:

```sql
CREATE DATABASE aula44;
USE aula44;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE livros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(200) NOT NULL,
  autor VARCHAR(150) NOT NULL,
  ano_publicacao INT,
  disponivel BOOLEAN DEFAULT TRUE,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  updade_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

No arquivo `.env`, coloque:

```
PORT=3000
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=aula44
JWT_SECRET=uma_chave_secreta
JWT_EXPIRES_IN=1h
```

> O `.env` permite mudar o banco de dados ou a porta sem alterar o código.

---

## 4. Sequelize e conexão ao banco

Nesta aula vamos usar o `Sequelize` como ferramenta de ORM (Object-Relational Mapping).
Ele facilita a comunicação com o MySQL e transforma consultas SQL em comandos JavaScript.

O papel desta camada é configurar a conexão com o banco e deixar o acesso aos dados mais seguro e organizado.

### O que fazer nesta etapa

- Instale `sequelize` e `sequelize-cli` além de `mysql2`.
- Crie um arquivo de configuração que leia as variáveis do `.env`.
- Crie uma instância do Sequelize com:
  - `DB_HOST`
  - `DB_USER`
  - `DB_PASSWORD`
  - `DB_NAME`
- Exporte essa instância para ser usada pelos modelos.

### Por que usar Sequelize?

- Ele evita que você escreva SQL manualmente em toda parte.
- Ele permite definir tabelas como modelos JavaScript.
- Ele torna mais fácil migrar a estrutura do banco no futuro.
- Ele já cuida de detalhes de conexão e segurança.

### Exemplo de conexão

A conexão deve ser algo como:

```js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

module.exports = sequelize;
```

### Testando a conexão

- Crie um pequeno script ou use o servidor para fazer `sequelize.authenticate()`.
- Se a conexão falhar, ajuste as variáveis do `.env`.

> Esta etapa garante que o banco de dados está conectado antes de criar os modelos.

---

## 5.Modelo de dados: usuários e livros
### Modelo de usuário

O modelo de usuário deve conter:

- `id`
- `nome`
- `email`
- `senha`

Este modelo é responsável apenas por acessar o banco de dados e retornar resultados.

### Modelo de livro

O modelo de livro deve conter:

- `id`
- `titulo`
- `autor`
- `ano_publicacao`
- `disponivel`

O modelo de livro faz consultas como:

- listar livros
- buscar livro por `id`
- criar novo livro
- atualizar livro
- excluir livro

> A camada `models` não deve fazer validações complexas de regras, apenas operações com o banco através dos métodos do sequelize.


---

## 6. Regras e funções em `services`

Os serviços devem conter a lógica de negócio, por exemplo:

- `registerUser(data)`
  - valida se o email já existe
  - criptografa a senha com `bcryptjs`
  - salva no banco via modelo
- `loginUser(email, senha)`
  - busca o usuário pelo email
  - compara a senha recebida com a senha criptografada
  - cria um token JWT se a senha estiver correta
- `listBooks()`
- `getBookById(id)`
- `createBook(data)`
- `updateBook(id, data)`
- `deleteBook(id)`

> O `service` responde perguntas como: "o que a aplicação deve fazer?"

---

## 7. Controladores e respostas HTTP

Os controladores recebem o pedido do cliente e devolvem o resultado.

Funções obrigatórias:

- `registerController(req, res)`
- `loginController(req, res)`
- `listBooksController(req, res)`
- `getBookController(req, res)`
- `createBookController(req, res)`
- `updateBookController(req, res)`
- `deleteBookController(req, res)`

Cada controlador deve:

- chamar o serviço certo
- enviar `res.status(...).json(...)`
- tratar erros básicos com `try/catch`

> O controlador não deve acessar o banco diretamente.

---

## 8. Middlewares e regras de proteção

### Validação de dados

Crie um middleware que verifique o corpo da requisição para:

- `nome`, `email` e `senha` no cadastro de usuário
- `titulo` e `autor` no cadastro de livro

Se os campos estiverem ausentes, retorne `400` com uma mensagem clara.

### Autenticação JWT

Crie um middleware de autenticação que:

- leia o token do header `Authorization` no formato `Bearer <token>`
- valide o token com `jsonwebtoken` usando `JWT_SECRET`
- defina `req.user` com os dados do token quando válido
- retorne `401` se o token estiver faltando ou inválido

### Rotas públicas x protegidas

Rotas públicas:

- `POST /register` - cria nova conta
- `POST /login` - faz login e retorna o token
- `GET /livros` - lista livros disponíveis
- `GET /livros/:id` - mostra detalhes de um livro

Rotas protegidas:

- `POST /livros` - cria livro novo
- `PUT /livros/:id` - atualiza livro
- `DELETE /livros/:id` - exclui livro
- `GET /perfil` - mostra dados do usuário logado

> Rotas públicas podem ser usadas sem token; rotas protegidas exigem token válido.

---

## 9. Autenticação JWT e senha criptografada

### Criptografia de senha

Ao cadastrar um usuário:

- use `bcryptjs.hash(senha, 10)` para criar uma senha segura
- salve apenas o hash no banco

Ao fazer login:

- use `bcryptjs.compare(senhaRecebida, hashSalvo)`
- só gere o token se a comparação for verdadeira

### Token JWT

Ao autenticar com sucesso:

- gere um token com `jwt.sign({ id: usuario.id, email: usuario.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })`
- devolva o token no JSON de resposta

No middleware protegido:

- verifique o token com `jwt.verify(token, JWT_SECRET)`
- se válido, permita o acesso

> Esse é o padrão básico de autenticação para APIs modernas.

---

## 10. Passo a passo de construção

1. Inicialize o projeto com `npm init -y`.
2. Instale as dependências: `npm install express dotenv sequelize mysql2 bcryptjs jsonwebtoken`.
3. Crie o `.env` com as variáveis de ambiente do MySQL e do JWT.
4. Crie a conexão com o banco em um arquivo de `config`.
5. Crie os modelos de `usuario` e `livro` para utilizar os métodos do Sequelize ORM.
6. Crie os serviços com as regras de negócio e uso de `bcryptjs`/`jsonwebtoken`.
7. Crie os controladores que chamam os serviços e retornam JSON.
8. Crie middlewares de validação e autenticação.
9. Crie as rotas públicas e protegidas.
10. Crie o servidor Express e use as rotas.
11. Execute com `node server.js` ou `npm nodemon server.js`.

---

## 11. O que deve ficar claro para você

- `config` ou `infra` deve ser apenas a conexão e leitura de `.env`.
- `model` deve falar com o banco de dados.
- `service` deve conter as regras de negócio.
- `controller` deve receber a requisição e enviar a resposta.
- `middleware` deve validar e proteger antes de chegar ao controlador.
- `route` deve definir quais URLs a API oferece.

> Se o aluno entender essa separação, ele terá construído um projeto organizado.

---

## 12. Regras obrigatórias

- Use MySQL para salvar usuários e livros.
- Crie um modelo de usuário e um modelo de livro.
- Use JWT para autenticação de rotas protegidas.
- Use `bcryptjs` para criptografar senhas.
- Separe claramente `models`, `services`, `controllers`, `middlewares`, `routes`.
- Tenha rotas públicas e rotas protegidas.
- Valide os dados de entrada no middleware.
- Não faça consulta ao banco diretamente dentro do controlador.

---

## 13. Perguntas para reforçar o aprendizado

Explique em poucas frases:

1. Por que não devemos guardar senhas em texto plano?
2. Qual a diferença entre a função de um middleware e a de um controller?
3. Por que um token JWT é melhor para rotas protegidas do que apenas usar usuário e senha em cada chamada?
4. Qual é a vantagem de ter um modelo de dados para livros separado do modelo de usuários?

Boa construção!

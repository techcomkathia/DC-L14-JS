# Projeto Prático - Livraria Online com React e JSON Server

## Objetivo

Nesta atividade, você irá desenvolver uma aplicação React que simula uma livraria online.

Os dados da aplicação serão fornecidos por uma API Fake criada com JSON Server. A aplicação deverá consumir esses dados e exibi-los em diferentes páginas.

Ao final da atividade, a aplicação deverá possuir:

* Página inicial com listagem de livros;
* Página de detalhes de um livro;
* Página de cadastro de usuário;
* Componentes reutilizáveis;
* Compartilhamento de informações através de Context API;
* Consumo de dados da API.

---

# Parte 1 - Criando a API Fake

Crie uma pasta chamada:

```text
api-livraria
```

Acesse a pasta e inicialize o projeto:

```bash
npm init -y
```

Instale o JSON Server:

```bash
npm install json-server
```

---

## Arquivo db.json

Crie um arquivo chamado:

```text
db.json
```

Cole o conteúdo fornecido pelo professor.

O arquivo conterá duas coleções:

* livros
* usuarios

---

## Arquivo json-server.json

Crie o arquivo:

```text
json-server.json
```

Conteúdo:

```json
{
  "host": "localhost",
  "port": 3001,
  "watch": true,
  "delay": 500
}
```

---

## Configurando o package.json

Adicione o script:

```json
{
  "scripts": {
    "server": "json-server db.json"
  }
}
```

## Arquivo db.json

crie o arquivo db.json e insira o conteúdo abaixo:

``` json
{
  "livros": [
    {
      "id": 1,
      "nome": "JavaScript Moderno",
      "preco": 89.9,
      "imagem": "https://placehold.co/600x400/orange/white?text=JavaScript+Moderno",
      "compras": 1250,
      "nota": 4.8,
      "resumo": "Um guia completo sobre JavaScript moderno, abordando ES6+, programação assíncrona, módulos e boas práticas.",
      "qtdPaginas": 420,
      "autor": "Carlos Mendes",
      "ano": 2023,
      "desconto": 15,
      "categoria": "Programação",
      "editora": "Tech Books",
      "comentarios": [
        {
          "texto": "Excelente conteúdo para quem deseja evoluir em JavaScript.",
          "nota": 5,
          "nomeUsuario": "Ana Souza",
          "data": "2025-01-15"
        },
        {
          "texto": "Didático e atualizado.",
          "nota": 4,
          "nomeUsuario": "Pedro Lima",
          "data": "2025-02-10"
        }
      ]
    },
    {
      "id": 2,
      "nome": "React na Prática",
      "preco": 99.9,
      "imagem": "https://placehold.co/600x400/blue/white?text=React+na+Pratica",
      "compras": 980,
      "nota": 4.7,
      "resumo": "Aprenda React criando aplicações modernas utilizando hooks, context API e roteamento.",
      "qtdPaginas": 380,
      "autor": "Juliana Rocha",
      "ano": 2024,
      "desconto": 10,
      "categoria": "Programação",
      "editora": "Dev House",
      "comentarios": [
        {
          "texto": "Ótimos exemplos práticos.",
          "nota": 5,
          "nomeUsuario": "Lucas Oliveira",
          "data": "2025-03-05"
        }
      ]
    },
    {
      "id": 3,
      "nome": "Node.js para APIs",
      "preco": 79.9,
      "imagem": "https://placehold.co/600x400/green/white?text=Node.js+para+APIs",
      "compras": 850,
      "nota": 4.6,
      "resumo": "Desenvolvimento de APIs REST com Node.js, Express e integração com bancos de dados.",
      "qtdPaginas": 350,
      "autor": "Rafael Costa",
      "ano": 2022,
      "desconto": 20,
      "categoria": "Backend",
      "editora": "Code Press",
      "comentarios": [
        {
          "texto": "Muito útil para projetos reais.",
          "nota": 5,
          "nomeUsuario": "Mariana Alves",
          "data": "2025-01-22"
        }
      ]
    },
    {
      "id": 4,
      "nome": "Python para Dados",
      "preco": 109.9,
      "imagem": "https://placehold.co/600x400/purple/white?text=Python+para+Dados",
      "compras": 1430,
      "nota": 4.9,
      "resumo": "Introdução à análise de dados com Python, Pandas, NumPy e visualização de dados.",
      "qtdPaginas": 500,
      "autor": "Fernanda Ribeiro",
      "ano": 2024,
      "desconto": 12,
      "categoria": "Data Science",
      "editora": "Data Books",
      "comentarios": [
        {
          "texto": "Livro indispensável para iniciantes.",
          "nota": 5,
          "nomeUsuario": "João Pedro",
          "data": "2025-04-01"
        }
      ]
    },
    {
      "id": 5,
      "nome": "Power BI Essencial",
      "preco": 69.9,
      "imagem": "https://placehold.co/600x400/gold/white?text=Power+BI+Essencial",
      "compras": 670,
      "nota": 4.5,
      "resumo": "Aprenda a criar dashboards, relatórios e análises de negócios com Power BI.",
      "qtdPaginas": 290,
      "autor": "Ricardo Nunes",
      "ano": 2023,
      "desconto": 8,
      "categoria": "Business Intelligence",
      "editora": "Analytics Press",
      "comentarios": [
        {
          "texto": "Conteúdo objetivo e direto.",
          "nota": 4,
          "nomeUsuario": "Carla Silva",
          "data": "2025-02-18"
        }
      ]
    },
    {
      "id": 6,
      "nome": "Arquitetura de Software",
      "preco": 119.9,
      "imagem": "https://placehold.co/600x400/red/white?text=Arquitetura+de+Software",
      "compras": 540,
      "nota": 4.8,
      "resumo": "Princípios e padrões para construção de sistemas escaláveis e de alta qualidade.",
      "qtdPaginas": 610,
      "autor": "Eduardo Martins",
      "ano": 2021,
      "desconto": 25,
      "categoria": "Arquitetura",
      "editora": "Software House",
      "comentarios": [
        {
          "texto": "Livro avançado e muito completo.",
          "nota": 5,
          "nomeUsuario": "André Santos",
          "data": "2025-01-30"
        }
      ]
    }
  ],
  "usuarios": [
    {
      "id": 1,
      "nome": "Maria Silva",
      "email": "maria@email.com",
      "senha": "123456",
      "endereco": {
        "logradouro": "Rua das Flores",
        "numero": "120",
        "complemento": "Apto 201",
        "bairro": "Centro",
        "cidade": "Fortaleza",
        "estado": "CE",
        "cep": "60000-000"
      }
    },
    {
      "id": 2,
      "nome": "João Pereira",
      "email": "joao@email.com",
      "senha": "123456",
      "endereco": {
        "logradouro": "Av. Beira Mar",
        "numero": "450",
        "complemento": "",
        "bairro": "Meireles",
        "cidade": "Fortaleza",
        "estado": "CE",
        "cep": "60165-000"
      }
    },
    {
      "id": 3,
      "nome": "Ana Costa",
      "email": "ana@email.com",
      "senha": "123456",
      "endereco": {
        "logradouro": "Rua São José",
        "numero": "78",
        "complemento": "Casa",
        "bairro": "Centro",
        "cidade": "Natal",
        "estado": "RN",
        "cep": "59000-000"
      }
    }
  ]
}

```

---

## Executando a API

Execute:

```bash
npm run server
```

A API estará disponível em:

```text
http://localhost:3001/livros
http://localhost:3001/usuarios
```

Teste as rotas diretamente no navegador.

---

# Parte 2 - Criando o Projeto React

Crie uma nova pasta para a aplicação.

```bash
npm create vite@latest
```

Nome sugerido:

```text
livraria-react
```

Escolha:

```text
React
JavaScript
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

---

# Estrutura do Projeto

Organize os arquivos conforme a estrutura abaixo:

```text
src/
│
├── contexto/
│   ├── LivroContexto.jsx
│
├── paginas/
│   ├── Home.jsx
│   ├── LivroDetalhe.jsx
│   ├── Cadastro.jsx
│
├── componentes/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── LivroCard.jsx
├── rotas/
│   ├── rotasApp.js
│
├── servicos/
│   ├── api.js
│
├── App.jsx
└── main.jsx
```

---

# Página Inicial

A página Home deverá:

* Exibir o cabeçalho;
* Exibir a lista de livros;
* Mostrar imagem, nome, preço e nota;
* Utilizar o componente LivroCard para cada item.

---

# Página de Detalhes

A página LivroDetalhe deverá exibir:

* Imagem do livro;
* Nome;
* Autor;
* Categoria;
* Editora;
* Quantidade de páginas;
* Resumo;
* Nota;
* Comentários dos usuários.

---

# Página de Cadastro

A página Cadastro deverá possuir um formulário contendo:

* Nome;
* Email;
* Senha;
* Endereço.

Ao enviar o formulário, os dados deverão ser cadastrados na API.

---

# Componentes

## Header

Exibir:

* Nome da loja;
* Navegação principal.

---

## Footer

Exibir:

* Nome da aplicação;
* Informações de rodapé.

---

## LivroCard

Responsável por exibir:

* Imagem;
* Nome;
* Preço;
* Nota.

---

# Contexto

Crie um contexto para compartilhar os dados dos livros entre as páginas da aplicação.

O contexto deverá disponibilizar as informações necessárias para que os componentes possam acessar os livros sem necessidade de carregá-los individualmente.

---

# Serviço da API

Crie um arquivo responsável pela comunicação com a API.

Todas as operações de consulta e cadastro deverão ser realizadas por meio desse arquivo.

---

# Desafio Extra

Implementar:

* Busca de livros por nome;
* Filtro por categoria;
* Ordenação por nota;
* Ordenação por quantidade de compras;
* Exibição dos livros em promoção.

---

# Entrega

O projeto deverá conter:

* API Fake funcionando com JSON Server;
* Aplicação React funcionando;
* Estrutura de pastas organizada;
* Componentes reutilizáveis;
* Consumo da API;
* Compartilhamento de dados através do contexto.

Organize o código e mantenha nomes claros para componentes, arquivos e funções.

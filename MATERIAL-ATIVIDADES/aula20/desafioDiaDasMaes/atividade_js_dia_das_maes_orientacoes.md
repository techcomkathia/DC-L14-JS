# 🌸 Atividade JavaScript — Especial Dia das Mães

## 🎯 Objetivo da atividade

Desenvolver uma aplicação interativa utilizando:

- HTML
- CSS
- JavaScript puro
- Manipulação do DOM

A proposta é criar uma página chamada **Galeria de Memórias**, contendo homenagens para o Dia das Mães com fotos, mensagens e interações através de botões.

---

# 💡 Proposta

A aplicação deverá exibir cards de homenagem.

Cada card representará uma homenagem especial contendo:

- foto principal;
- nome da mãe;
- mensagem especial;
- contador de curtidas;
- botões de interação;
- troca de imagens.

A ideia é criar uma interface agradável e temática para o Dia das Mães.

---

# 📚 Conceitos que serão trabalhados

Durante a atividade, vocês irão praticar:

- Seleção de elementos com JavaScript;
- Manipulação do DOM;
- Eventos de clique;
- Arrays e objetos;
- Alteração dinâmica de textos e imagens;
- Manipulação de classes CSS;
- Estruturação visual com CSS.

---

# 📂 Estrutura sugerida do projeto

```bash
projeto/
│
├── index.html
├── style.css
└── script.js
```

---

# 🧩 Estrutura da aplicação

## Cabeçalho

A página deve possuir um cabeçalho contendo:

- título da galeria;
- frase temática sobre mães;
- decoração visual relacionada ao tema.

Exemplo:

```text
🌸 Galeria de Memórias — Especial Dia das Mães
```

---

# 🖼️ Cards de homenagem

Cada card deverá conter:

## ✅ Imagem principal

Uma foto relacionada à homenagem.

---

## ✅ Nome

Nome da mãe homenageada.

Exemplo:

```text
Maria Oliveira
```

---

## ✅ Mensagem

Uma mensagem especial que poderá ser exibida ou ocultada

Exemplo:

```text
Obrigado por todo carinho e dedicação ❤️
```

---

## ✅ Curtidas ❤️

O card deve possuir um contador de curtidas.

Exemplo:

```text
❤️ 5 curtidas
```

Ao clicar no botão de curtir, o valor deve aumentar.

---

## ✅ Botão de curtir

Exemplo:

```text
Curtir ❤️
```

---

## ✅ Troca de imagens

Cada homenagem deverá possuir mais de uma imagem.

Criar botões para:

```text
⬅ Anterior
➡ Próxima
```

Ao clicar nos botões, a imagem principal deve mudar.

---

## ✅ Mostrar/Ocultar mensagem

Criar um botão para exibir ou esconder a mensagem da homenagem.

Exemplo:

```text
Mostrar mensagem
Ocultar mensagem
```

---

# 📦 Dados da aplicação

As homenagens devem ser armazenadas em arrays de objetos.

Exemplo:

```js
const homenagens = [
  {
    nome: "Maria",
    mensagem: "Obrigado por tudo ❤️",
    fotos: [
      "img1.jpg",
      "img2.jpg",
      "img3.jpg",
      "img4.jpg"
    ]
  }
]
```

---

# ⚙️ Manipulação do DOM

Os elementos da página deverão ser criados ou manipulados utilizando JavaScript.

Vocês podem utilizar:

```js
createElement()
appendChild()
innerHTML
querySelector()
classList
```

---

# 🧠 Eventos

Os botões devem funcionar utilizando:

```js
addEventListener()
```

---

# 🎨 Estilização

A página deve possuir:

- cores em tons de rosa;
- cards organizados;
- espaçamentos;
- bordas arredondadas;
- efeitos visuais simples;
- layout agradável.

---

# 🌸 Sugestão de paleta de cores

| Elemento       | Cor     |
| -------------- | ------- |
| Fundo          | #fff5f7 |
| Rosa principal | #ff4d8d |
| Rosa claro     | #ffc2d1 |
| Texto          | #4a4a4a |
| Branco         | #ffffff |

---

# 🔤 Sugestão de tipografia

- Títulos → Poppins
- Texto → Arial

---

# 🧱 Organização visual sugerida

```text
 ------------------------------------------------
|              🌸 Galeria das Mães               |
 ------------------------------------------------

  ------------------------------------------
 |                                          |
 | [⬅ Foto]  [ imagem atual ]    [Foto ➡] |
 |                                          |
 |  Maria                                   |
 |  [Texto mensagem]                        |
 |                                          |
 |  ❤️ 12 curtidas                          |
 |                                          |
 | [Curtir ❤️] [Btn Mostrar mensagem]       |
 |                                          |
 | [Foto1] [Foto2] [Foto3] [Foto4]          |
  ------------------------------------------
```

---

# ⭐ Desafios extras

Caso desejem incrementar o projeto, vocês podem adicionar:

- miniaturas das imagens;
- botão favorito ⭐;
- efeitos hover;
- animações ao curtir;
- troca de cores;
- tema escuro/claro.

---


💐 Caprichem no visual e nas interações da aplicação!


# Atividade 1 — Manipulação do DOM com Lâmpadas (HTML, CSS e JavaScript)

## Objetivo da atividade

Nesta atividade, vocês irão praticar:

- Seleção de elementos do DOM utilizando:
  - `getElementById`
  - `getElementsByClassName`
  - `getElementsByTagName`
  - `querySelector`
  - `querySelectorAll`

- Manipulação de propriedades:
  - `src`
  - `alt`

- Manipulação de:
  - classes CSS
  - textos
  - estilos da página
  - eventos de clique (`onclick`)

---

# Regras da aplicação

A aplicação deve possuir:

## Uma imagem de lâmpada

A lâmpada poderá ter 3 estados:

- Acesa
- Apagada
- Quebrada

---

# Botões obrigatórios

A aplicação deve possuir os seguintes botões:

1. Acender lâmpada
2. Apagar lâmpada
3. Quebrar lâmpada
4. Trocar lâmpada

---

# Comportamentos esperados

## Lâmpada acesa

Quando a lâmpada estiver acesa:

- O fundo da aplicação deve ficar claro
- Os textos devem ficar pretos
- Os botões devem ficar cinza claro
- A imagem da lâmpada deve mudar para a versão acesa

---

## Lâmpada apagada

Quando a lâmpada estiver apagada:

- O fundo da aplicação deve ficar preto
- Os textos devem ficar brancos
- Os botões devem ficar cinza escuro
- A imagem deve mostrar a lâmpada apagada

---

## Lâmpada quebrada

Quando a lâmpada estiver quebrada:

- O fundo da aplicação deve permanecer preto
- Os textos devem ficar brancos
- Os botões devem ficar cinza escuro
- A imagem deve mostrar a lâmpada quebrada

---

# Regra importante

## Uma lâmpada quebrada NÃO pode ser acesa

Se o usuário clicar no botão “Acender Lâmpada” enquanto a lâmpada estiver quebrada:

- Mostrar uma mensagem de erro na tela

Exemplo:

```txt
Erro: a lâmpada está quebrada!
```

---

# Regra extra

## A lâmpada acesa ou apagada pode ser quebrada normalmente.

---

# Desafios sugeridos

## Nível 1
- Alterar apenas a imagem da lâmpada

## Nível 2
- Alterar também o tema da aplicação

## Nível 3
- Exibir mensagens dinâmicas na tela

## Nível 4
- Utilizar diferentes métodos de seleção do DOM

---

# Estrutura sugerida

## HTML
- título
- imagem da lâmpada
- mensagem de status
- área dos botões

---

# Métodos que devem ser utilizados

## Sugestão de uso

| Método | Sugestão |
|---|---|
| `getElementById` | selecionar imagem |
| `querySelector` | selecionar mensagem |
| `querySelectorAll` | selecionar botões |
| `getElementsByClassName` | selecionar áreas da aplicação |
| `getElementsByTagName` | selecionar títulos |

---


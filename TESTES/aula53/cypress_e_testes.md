# Guia Prático de Cypress: Conceptos Essenciais e Automação de Testes

O **Cypress** é um framework moderno de automação de testes *end-to-end* (E2E), construído do zero para a web moderna. Diferente de ferramentas legadas (como Selenium), o Cypress executa no mesmo loop de evento do navegador, proporcionando testes mais rápidos, consistentes e confiáveis.

---

## 1. O que é o Cypress e por que utilizá-lo?

O Cypress permite escrever todos os tipos de testes para a interface e APIs de uma aplicação web:
* **Testes End-to-End (E2E):** Simulam a jornada completa do usuário no navegador (ex: fluxo de login, compra, cadastro).
* **Testes de Componente:** Testam componentes isolados (React, Vue, Angular) sem a necessidade de rodar toda a aplicação.
* **Testes de API:** Permitem validar respostas HTTP, endpoints e rotas diretamente na suíte de testes.

### Principais Diferenciais
1. **Time Travel:** Tira *snapshots* de cada ação realizada para que você possa inspecionar o estado da aplicação passo a passo no Runner.
2. **Auto-waiting:** O Cypress aguarda automaticamente elementos ficarem visíveis e requisições serem concluídas antes de falhar o teste (evitando o uso de `sleep` ou `wait` fixos).
3. **Debug Facilitado:** Mensagens de erro claras e integração direta com o *DevTools* do navegador.
4. **Execução Nativa:** Roda diretamente dentro do navegador com acesso direto à DOM e ao objeto `window`.

---

## 2. Conceitos Fundamentais de Testes de Software no Cypress

Para construir testes robustos, é fundamental alinhar os conceitos clássicos de testes de software à sintaxe do Cypress:

### 2.1. Anatomia de um Teste (Padrão AAA)
Um bom teste automatizado segue a estrutura **AAA (Arrange, Act, Assert)**:

* **Arrange (Preparar):** Configurar o ambiente, navegar até a página ou definir a massa de dados.
* **Act (Agir):** Simular interações do usuário (cliques, preenchimento de formulários).
* **Assert (Validar):** Verificar se o resultado esperado foi atingido.

```javascript
describe('Fluxo de Autenticação', () => {
  it('Deve realizar login com sucesso', () => {
    // Arrange: Visita a página inicial
    cy.visit('/login');

    // Act: Interage com os elementos da tela
    cy.get('#email').type('usuario@exemplo.com');
    cy.get('#password').type('senha123');
    cy.get('button[type="submit"]').click();

    // Assert: Valida a mudança de estado/URL
    cy.url().should('include', '/dashboard');
    cy.get('.welcome-message').should('contain', 'Bem-vindo');
  });
});
```

---

## 3. Principais Comandos e Seletores

### Seletores Recomendados
Para garantir testes resilientes a mudanças no layout/CSS, utilize seletores dedicados a testes:
* **Ideal:** `data-cy`, `data-test`, `data-testid` (ex: `cy.get('[data-cy="btn-salvar"]')`)
* **Evite:** Classes CSS genéricas ou XPaths complexos baseados em estrutura visual.

### Comandos Essenciais
* `cy.visit(url)` — Navega até a URL especificada.
* `cy.get(selector)` — Localiza um ou mais elementos na DOM.
* `cy.contains(text)` — Localiza elementos que contêm o texto informado.
* `cy.type(text)` — Digita em um campo de texto.
* `cy.click()` — Clica em um elemento.
* `cy.intercept(method, url)` — Intercepta e simula requisições HTTP (Mocks/Stubs).

---

## 4. Asserções (Assertions)

Asserções são as checagens que garantem que algo deu certo na tela. O Cypress faz isso de duas formas:

Implícita (Direta no elemento): É a forma mais simples. Você pega um elemento e diz o que espera dele usando .should() ou .and().

Explícita (Manual): Usada quando você precisa fazer validações mais avançadas usando expect() dentro do código.

```javascript
// Asserção Implícita (com .should ou .and)
cy.get('.status-badge')
  .should('be.visible')
  .and('have.class', 'active');

// Asserção Explícita (usando expect dentro de um callback)
cy.get('ul.lista-items').then(($list) => {
  expect($list.find('li')).to.have.length(5);
});
```

---


## 5. Exemplo Prático com Interceptação de API (Mock)

```javascript
describe('Gestão de Produtos', () => {
  it('Deve exibir a lista de produtos retornada pela API', () => {
    // Intercepta a chamada GET para /api/produtos e retorna uma fixture mockada
    cy.intercept('GET', '/api/produtos', { fixture: 'produtos.json' }).as('getProdutos');

    cy.visit('/produtos');
    
    // Aguarda a requisição ser concluída
    cy.wait('@getProdutos');

    // Valida a renderização na UI
    cy.get('.card-produto').should('have.length', 3);
  });
});
```

## 6. Captura de Tela (Screenshots e Vídeos)

O Cypress possui suporte nativo para capturar imagens (*screenshots*) e gravar vídeos da execução dos testes sem a necessidade de instalar bibliotecas extras.

### 6.1 Captura Manual (`cy.screenshot()`)
Você pode tirar um *screenshot* de toda a tela ou de um elemento específico a qualquer momento do teste:

```javascript
// Tira print de toda a tela
cy.screenshot('pagina-de-login');

// Tira print apenas de um elemento específico
cy.get('.card-produto').screenshot('card-produto-destaque');
```

### 6.2. Captura Automática em Caso de Falha
Ao rodar os testes via linha de comando no modo headless (cypress run), o Cypress tira um print automaticamente no exato momento em que qualquer teste falhar.

### 6.3. Gravação de Vídeo
Durante a execução em CI/CD ou via terminal (cypress run), a gravação do teste inteiro em vídeo fica habilitada por padrão e é salva na pasta cypress/videos.

Para ajustar essa comportamento, você pode editar o arquivo

```javascript
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    video: true, // Define se deve gravar vídeo da execução (true/false)
    screenshotOnRunFailure: true, // Garante captura automática se o teste falhar
  },
});

```

## 7 Testes com Inteligência Artificial no Cypress

A integração de Inteligência Artificial na automação de testes acelera a escrita de cenários, melhora a manutenção e ajuda a criar testes mais resilientes.

### 7.1 Geração de Testes com IA (Prompt-to-Test)
Ferramentas de IA (como ChatGPT, GitHub Copilot ou Gemini) conseguem traduzir requisitos ou histórias de usuário diretamente em código Cypress pronto para executar.

* **Exemplo de Prompt:**
  > "Crie um teste E2E em Cypress para a tela de login. O teste deve preencher o email, a senha, clicar em entrar e validar a mensagem de sucesso usando o padrão AAA."

### 7.2 Auto-Cura de Seletores (Self-Healing)
Um dos maiores problemas em automação é a quebra de testes quando classes CSS ou IDs mudam no front-end. 

Plugins e ferramentas de IA integrados ao Cypress analisam a estrutura do DOM e **corrigem os seletores automaticamente** em tempo de execução, evitando falhas por pequenas mudanças visuais.

### 7.3 Principais Ferramentas e Plugins com IA para Cypress

* **Cypress Accessibility (A11y) + IA:** Identifica problemas de acessibilidade no HTML e sugere correções no código.
* **Applitools Eyes:** Adiciona testes visuais com IA (Visual AI) ao Cypress. Em vez de validar texto por texto, a IA compara o layout visual da tela e ignora falsos positivos (como pequenas variações de renderização).
* **Curiosity / Testim / Healenium:** Ferramentas que ajudam na auto-cura de elementos e geração automática de massa de dados (*fixtures*) inteligentes.

### 7.4 Análise de Falhas e Logs
Você pode enviar os logs de erros do Cypress para uma IA para obter diagnósticos instantâneos:
* Explicação do motivo exato da falha em linguagem simples.
* Sugestão de correção do código do teste ou identificação de um bug real na aplicação.

### 7.5 O recurso `cy.prompt()` no Cypress

O **`cy.prompt()`** traz automação por **linguagem natural** (*Prompt-to-Test*) usando IA. Em vez de escrever seletores e comandos imperativos, você descreve a intenção do teste em inglês.

---

## Requisitos de Acesso
* **Conta e Login:** Requer cadastro e projeto vinculado ao **Cypress Cloud**.
* **Não roda 100% offline:** Depende das APIs de IA em nuvem da Cypress.io.
* **Plano/Cotas:** O uso é atrelado aos limites do plano contratado no Cypress Cloud.

---

## Como Funciona (Bastidores)
1. **Leitura do DOM:** O Cypress captura e simplifica o HTML da página no momento do passo.
2. **Envio para a Nuvem:** A instrução em texto + a estrutura do DOM vão para o Cypress Cloud.
3. **Tradução por IA:** A IA identifica os elementos e devolve os comandos executáveis.
4. **Execução:** O teste roda a ação diretamente no navegador local.

---

## Segurança e "Eject"
* **Privacidade:** Filtra e remove dados sensíveis (senhas, tokens) antes de enviar a estrutura ao modelo de IA.
* **Recurso *Eject*:** Permite converter o bloco `cy.prompt()` em código Cypress tradicional (`cy.get().click()`) com um clique no Runner, eliminando a dependência da nuvem nas execuções futuras do CI/CD.

---

## Exemplo de Código

```javascript
describe('Login com cy.prompt()', () => {
  it('Realiza autenticação via linguagem natural', () => {
    cy.visit('/login');

    cy.prompt([
      'type "user@email.com" in the email input',
      'type "pass123" in the password input',
      'click the "Sign In" button',
      'verify the URL contains "/dashboard"'
    ]);
  });
});
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/TESTES/aula53/baseTeste.html') //vistar a página

    //verificar se em qualquer parte da aplicação existe o texto Shoply
    cy.contains('Shoply')//buscar o elemento com esse texto
    .should('be.visible')//verificar se ele esta visivel
  })
})
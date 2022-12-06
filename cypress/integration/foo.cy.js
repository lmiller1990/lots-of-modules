it('runs', () => {
  cy.visit('/')
  cy.get('div').contains('Hello')
})

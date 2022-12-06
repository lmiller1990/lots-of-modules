it('runs', { defaultCommandTimeout: 20000 }, () => {
  cy.visit('/')
  cy.get('div').contains('Hello')
})

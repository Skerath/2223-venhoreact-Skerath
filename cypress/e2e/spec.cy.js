describe('mijn eerste test', () => {
  it('draait de applicatie', () => {
    cy.visit('http://localhost:3000');
    cy.get("a").should("exist");
  })
})
describe('homepage', () => {
    it('has buttons', () => {
        cy.visit('http://localhost:3000');
        cy.get("[data-cy=menu-item]").should("exist");
        cy.get("[data-cy=authenticationbutton").should("exist");
    })
})
describe('edit item from other author', () => {

    beforeEach(() => {
        cy.login();
    });

    it('delete should have error toast', () => {
        cy.visit("http://localhost:3000/items");
        cy.get("[data-cy=filter_input").eq(0).type("Helmet w Accursed Effigy");
        cy.get("[data-cy=filter_input").eq(2).type("Skerath");
        cy.get("[data-cy=delete_button]", {timeout: 6000}).eq(0).click();
        cy.get("[data-cy=error_toast]", {timeout: 6000}).should('be.visible');
    });

    it('edit should have error toast', () => {
        cy.visit('http://localhost:3000/items/');
        cy.get("[data-cy=filter_input").eq(0).type("Helmet w Accursed Effigy");
        cy.get("[data-cy=filter_input").eq(2).type("Skerath");
        cy.get("[data-cy=edit_button]", {timeout: 6000}).eq(0).click();
        cy.get("[data-cy=error_toast]", {timeout: 6000}).should('be.visible');
    });

});
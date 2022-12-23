describe('new item form and deletion', () => {

    beforeEach(() => {
        cy.login();
    });

    it('should have been added', () => {
        cy.visit('http://localhost:3000/items/create');
        cy.get("[data-cy=name_input]").type("Item name test");
        cy.get("[data-cy=type_select]").select("Helmet");
        cy.get("[data-cy=ingredient_input]").type("Accursed Effigy");
        cy.get("[data-cy=submit_button]", {timeout: 6000}).click();
        cy.get("[data-cy=success_toast]").should('be.visible');
        cy.get("[data-cy=error_toast]").should('not.exist');
    });

    it('should have error toast because of unknown ingredient', () => {
        cy.visit('http://localhost:3000/items/create');
        cy.get("[data-cy=name_input]").type("Item name test");
        cy.get("[data-cy=type_select]").select("Helmet");
        cy.get("[data-cy=ingredient_input]").type("Accursedaa Effigy");
        cy.get("[data-cy=submit_button]", {timeout: 6000}).click();
        cy.get("[data-cy=success_toast]").should('not.exist');
        cy.get("[data-cy=error_toast]").should('be.visible');
    });

    it('should have error toast because of mismatching ingredient and type', () => {
        cy.visit('http://localhost:3000/items/create');
        cy.get("[data-cy=name_input]").type("Item name test");
        cy.get("[data-cy=type_select]").select("Scroll");
        cy.get("[data-cy=ingredient_input]").type("Accursed Effigy");
        cy.get("[data-cy=submit_button]", {timeout: 6000}).click();
        cy.get("[data-cy=success_toast]").should('not.exist');
        cy.get("[data-cy=error_toast]").should('be.visible');
    });

    it('should have been deleted again', () => {
        cy.visit("http://localhost:3000/items");
        cy.get("[data-cy=filter_input").eq(0).type("Item name test");
        cy.get("[data-cy=filter_input").eq(2).type("e2e@test-hogent.be");
        cy.get("[data-cy=delete_button", {timeout: 6000}).eq(0).click();
        cy.get("[data-cy=success_toast]").should('be.visible');
    });
});
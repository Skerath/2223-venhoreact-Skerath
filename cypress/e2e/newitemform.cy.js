describe('newitemform', () => {

    beforeEach(() => {
        cy.login();
    });

    it('should add item', () => {
        cy.visit('http://localhost:3000/items/create');
        cy.get("[data-cy=name_input]").type("Item name test");
        cy.get("[data-cy=type_select]").select("Helmet");
        cy.get("[data-cy=ingredient_input]").type("Accursed Effigy");
        cy.get("[data-cy=submit_button]").click();
    });

    it('should have success toast', () => {
        cy.visit('http://localhost:3000/items/create');
        cy.get("[data-cy=name_input]").type("Item name test");
        cy.get("[data-cy=type_select]").select("Helmet");
        cy.get("[data-cy=ingredient_input]").type("Accursed Effigy");
        cy.get("[data-cy=submit_button]").click();
        cy.get("[data-cy=success_toast]").should('be.visible');
        cy.get("[data-cy=error_toast]").should('not.exist');
    });

    it('should have error toast', () => {
        cy.visit('http://localhost:3000/items/create');
        cy.get("[data-cy=name_input]").type("Item name test");
        cy.get("[data-cy=type_select]").select("Helmet");
        cy.get("[data-cy=ingredient_input]").type("Accursedaa Effigy");
        cy.get("[data-cy=submit_button]").click();
        cy.get("[data-cy=success_toast]").should('not.exist');
        cy.get("[data-cy=error_toast]").should('be.visible');
    });


});
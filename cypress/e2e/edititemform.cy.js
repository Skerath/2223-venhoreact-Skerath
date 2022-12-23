describe('new item with edit and deletion', () => {

    beforeEach(() => {
        cy.login();
    });

    it('should have been added', () => {
        cy.visit('http://localhost:3000/items/create');
        cy.get("[data-cy=name_input]").type("Item name test");
        cy.get("[data-cy=type_select]").select("Helmet");
        cy.get("[data-cy=ingredient_input]").type("Accursed Effigy");
        cy.get("[data-cy=submit_button]").click();
        cy.get("[data-cy=success_toast]").should('be.visible');
        cy.get("[data-cy=error_toast]").should('not.exist');
    });

    it('should have had a failed update', () => {
        cy.visit("http://localhost:3000/items");
        cy.get("[data-cy=filter_input").eq(0).type("Item name test");
        cy.get("[data-cy=filter_input").eq(2).type("e2e@test-hogent.be");
        cy.get("[data-cy=edit_button").eq(0).click();
        cy.get("[data-cy=edit_ingredient_input").type("aaa");
        cy.get("[data-cy=edit_submit_button]").click();
        cy.get("[data-cy=edit_error_toast]").should("be.visible");
    });

    it('should have had its name editted', () => {
        cy.visit("http://localhost:3000/items");
        cy.get("[data-cy=filter_input").eq(0).type("Item name test");
        cy.get("[data-cy=filter_input").eq(2).type("e2e@test-hogent.be");
        cy.get("[data-cy=edit_button").eq(0).click();
        cy.get("[data-cy=edit_name_input]").type("Item name edit test");
        cy.get("[data-cy=edit_submit_button]").click();
        cy.get("[data-cy=edit_success_toast]").should('be.visible');
    });

    it('should have been deleted again', () => {
        cy.visit("http://localhost:3000/items");
        cy.get("[data-cy=filter_input").eq(0).type("Item name edit test");
        cy.get("[data-cy=filter_input").eq(2).type("e2e@test-hogent.be");
        cy.get("[data-cy=delete_button").eq(0).click();
        cy.get("[data-cy=edit_success_toast]").should('be.visible');
    });
});
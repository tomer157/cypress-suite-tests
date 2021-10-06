beforeEach(() => {
    cy.visit('/');
});

describe('jquery page tests', () => {
    it('hover dropdown element and download excel called menu.xls',() => {
        cy.get(':nth-child(28) > a').click();
        cy.get('#ui-id-2').trigger('mouseover');
        cy.get('#ui-id-4').click({force: true});       
        

   

          cy.get('#ui-id-8').parent().invoke('show').trigger('mouseover').click({force: true});
    });
});
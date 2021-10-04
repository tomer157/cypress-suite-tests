import CheckBox from '../../support/pages/CheckBoxesPage';


beforeEach(() =>{
    cy.log('test checkbox page');
    cy.visit('/');
    
});


describe('checkboxes page', () =>{
    it('toggle checkboxes tests', () => {
        
        const checkboxPage = new CheckBox();
        cy.log('check the two checkboxes and validate that the first is checked and the second is unchecked');
        checkboxPage.getCheckLink().click();
        checkboxPage.getFirstCheck().check();
        checkboxPage.getFirstCheck().should('be.checked');
        checkboxPage.getSecondCheck().uncheck().should('not.be.checked');
        

    });
});
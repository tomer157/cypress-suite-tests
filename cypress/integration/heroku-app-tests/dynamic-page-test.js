import 'cypress-wait-until';
import DynamicPage from '../../support/pages/DynamicPage';


beforeEach(() => {
    cy.visit('/');
});


describe('dynamic page tests',() => {
    it('start button test',() => {
        cy.log('enter the second link and click on the start button and wait for the "hello world " message!');
        const dynamicPage = new DynamicPage();

        dynamicPage.getDynamicLink().click();
        dynamicPage.getExampleTwoLink().click();

        cy.get('button').should('be.visible').click();
        
      
        cy.wait(2200);    
        const a  = dynamicPage.getHelloSuccessMsg();
       
    });
})
beforeEach(() => {
    cy.visit('/');
});

const authLink  = ':nth-child(3) > a';
const validMsg = 'p';

describe('basic auth page', () => {

    const username = Cypress.env('user');
    const unauthorizedUsername = 'thomas';
    const password = Cypress.env('password');
    const successMsg = 'Congratulations! You must have the proper credentials.';



    it('with authorization', () => {
        cy.log('clear session cookie and visit page with authorization credentials from cypress.json file expect 200');
        
        cy.clearCookie('rack.session')    

        cy.validVisitLogin();
        
        cy.get(validMsg).should('contain.text', successMsg);
      });


      it('without authorization gets 401', () => {
          cy.log('launch api with false auth expect 401');
        cy.request({
          url: '/basic_auth',
          failOnStatusCode: false,
        }).its('status').should('equal', 401)
      });
      
      


        });
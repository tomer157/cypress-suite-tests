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
        
        cy.clearCookie('rack.session')    

        cy.visit('/basic_auth', {
            auth: {
              username,
              password,
            },
          })
        
        cy.get(validMsg).should('contain.text', successMsg);
      });
        });
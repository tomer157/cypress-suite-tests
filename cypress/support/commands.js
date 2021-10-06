// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
const username = Cypress.env('user');
const pass = Cypress.env('password');   

Cypress.Commands.add('validVisitLogin', () => {
    cy.visit('/basic_auth', {
        auth: {
          username,
          pass,
        },
      })
    })


Cypress.Commands.add("parseXlsx", (inputFile) => {
  return cy.task('parseXlsx', { filePath: inputFile })
  });    
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

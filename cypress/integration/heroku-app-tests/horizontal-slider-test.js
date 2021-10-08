import horizontalPage from '../../support/pages/HorizontalPage';

beforeEach(() => {
    cy.visit('/');
});

describe('horizontal slider page',() => {
    it('move the slider 4 position and validate value of range element',() => {
        horizontalPage.getPageLink().click();
        horizontalPage.getInput().invoke("val", "4").trigger("change");
        horizontalPage.getRange().should('have.text', 4);
        horizontalPage.getInput().invoke("val", "3").trigger("change");
        horizontalPage.getRange().should('have.text', 3);
        // horizontalPage.getInput().debug().click();
    });
});
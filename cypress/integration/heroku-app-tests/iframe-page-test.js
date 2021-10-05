import FramesPage from "../../support/pages/FramesObjectPage";


beforeEach(() => {
    cy.visit('/');
});

const iframeTag = '#mce_0_ifr';
const testName = 'Tomer-test';

describe('iframe page tests',() => {
    it('type text within iframe',() => {
        cy.log('click the iframe link and in the iframe element type the text tomer-test and validate that its acctually exists');
        
        const frameObject = new FramesPage();

        frameObject.getFramesLink().click();
        frameObject.getIframeLink().click();
        const iframe = cy.get(iframeTag)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
        
        iframe.clear();
        iframe.type(testName);

        const iframeParag = cy.get(iframeTag)
        .its('0.contentDocument.body')
        .find('p')
        .should('be.visible')
        .then(cy.wrap);

        iframeParag.should('have.text', testName);
        
    });
});
class DynamicPage {
    getDynamicLink(){
        return cy.get(':nth-child(14) > a');
    }

    getExampleTwoLink(){
        return cy.get('[href="/dynamic_loading/2"]');
    }

    getHelloSuccessMsg(){
        cy.get('#finish > h4').should('be.visible');
    }
}

export default DynamicPage;
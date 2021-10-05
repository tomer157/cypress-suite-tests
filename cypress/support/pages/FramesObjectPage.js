class FramesPage {
       getFramesLink() {
           return cy.get(':nth-child(22) > a');
       }
       
       getIframeLink() {
           return cy.get('ul > :nth-child(2) > a');
       }
       getIframeParagraph(){
           return cy.get('#mce_0_ifr');
       }
}

export default FramesPage;
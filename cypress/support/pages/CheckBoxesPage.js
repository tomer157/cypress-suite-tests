class CheckBox {
    getCheckLink() {
       return cy.get(':nth-child(6) > a'); 
    }
    getFirstCheck(){
        return cy.get('#checkboxes > :nth-child(1)');
    }
    getSecondCheck() {
        return cy.get('#checkboxes > :nth-child(3)');
    }

   
    }

export default CheckBox;
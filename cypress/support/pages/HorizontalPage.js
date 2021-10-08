class HorizontalPage {
    constructor(){
        this.sliderPageLink = ':nth-child(24) > a';
        this.input = 'input';
        this.rangeElement  = '#range';
    }

    getPageLink() {
        return cy.get(this.sliderPageLink);
    }
    getInput() {
        return cy.get(this.input);
    }
    getRange() {
        return cy.get(this.rangeElement);
    }

}

const horizontalPage = new HorizontalPage();
export default horizontalPage; 
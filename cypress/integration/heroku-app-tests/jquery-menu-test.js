require('cypress-xpath')

// import { Workbook } from 'exceljs/excel'

beforeEach(() => {
    cy.visit('/');
});

describe('jquery page tests', () => {
    it('hover dropdown element and download the menu.csv',() => {
        cy.log('we click the dropdown enabled -> downloads -> CSV to download the menu.xls file and read  from it ');
        cy.get(':nth-child(28) > a').click();
        cy.get('#ui-id-2').trigger('mouseover');
        cy.get('#ui-id-4').click({force: true});
        cy.xpath('//*[@id="menu"]/li[2]/ul/li[1]/ul').invoke('css','display','flex');  
        cy.get('#ui-id-8').click();
   
    });
    
    it('read the downloaded csv file',() => {
        cy.wait(200);
        cy.parseXlsx("cypress/downloads/menu.xls").then(
            jsonData => {
              
                expect(jsonData[0].data[0]).to.exist;
                console.log(jsonData[0].data[1][2]);
            }
            );
    });
});
///<reference types = 'cypress'/>  

class ShoppingPage {
    elements_shopping ={
        craque_product :() => cy.get('[data-name="glplan12"]'),
    }

    ClickCraqueProduct() {
        this.elements_shopping.craque_product().click()
    }
}

export default new ShoppingPage()
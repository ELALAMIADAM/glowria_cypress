///<reference types = 'cypress'/>  

class CartPage {
    elements_cart ={
        check_accept :() => cy.get('[aria-describedby="label"]'),
        payer_button :() => cy.get('#submit-validation-form'),
    }

    CheckAccept() {
        this.elements_cart.check_accept().click()
    }
    ClickPayerButton() {
        this.elements_cart.payer_button().click()
    }
}

export default new CartPage()
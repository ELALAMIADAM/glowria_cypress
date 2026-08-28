///<reference types = 'cypress'/>  

class orderPage {
    elements_order ={
        adresse_order :() => cy.get('#user_input_autocomplete_address'),
        phone_order :() => cy.get('#subscription_deliveryContact_phoneNumber'),
        submit_order :() => cy.get('#submit-creation-form'),
    }

    adressOrder(adresse) {
        this.elements_order.adresse_order().type(adresse,{force:true})
        cy.contains(adresse).click({force:true});
    }

    AddPhone(phone) {
        this.elements_order.phone_order().type(phone,{force:true})
    }

    SubmitOrder() {
        this.elements_order.submit_order().click()
    }
    
}

export default new orderPage()
///<reference types = 'cypress'/>  

class HomePage {
    elements_homepage ={
        signuplink :() => cy.get('[aria-label="account"]'),
        EmailField :() => cy.get('#newEmail'),   
        InscriptionButton :() => cy.get('[value="Inscription"]'),             
    }

    SignUpLink() {
        this.elements_homepage.signuplink().click()
    }
    enterEmail(email) {
        this.elements_homepage.EmailField().type(email,{force:true})
    }
    clickInscriptionButton() {
        this.elements_homepage.InscriptionButton().click()
    }


}

export default new HomePage()
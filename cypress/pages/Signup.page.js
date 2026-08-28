///<reference types = 'cypress'/>  

class SignUpPage {
    elements_signup ={
        prenomField :() => cy.get('#customer_firstName'),
        nomField :() => cy.get('#customer_lastName'),
        emailconfirmField :() => cy.get('#customer_emailConfirm'),
        passwordField :() => cy.get('#customer_password'),
        birthdayField :() => cy.get('#customer_birthday'),
        legalcheckbox :() => cy.get('#legalmentions'),
        submitButton :() => cy.get('#submitBtn'),
    }

    enterPrenom(prenom) {
        this.elements_signup.prenomField().type(prenom,{force:true})
    }
    enterNom(nom) {
        this.elements_signup.nomField().type(nom,{force:true})
    }
    enterEmailConfirm(emailconfirm) {
        this.elements_signup.emailconfirmField().type(emailconfirm,{force:true})
    }
    enterPassword(password) {
        this.elements_signup.passwordField().type(password,{force:true})
    }
    enterBirthday(birthday) {
        this.elements_signup.birthdayField().type(birthday,{force:true})
    }
    clickLegalCheckbox() {
        this.elements_signup.legalcheckbox().click()
    }
    clickSubmitButton() {
        this.elements_signup.submitButton().click()
    }

}

export default new SignUpPage()
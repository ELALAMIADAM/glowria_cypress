///<reference types = 'cypress'/>  

class AccountPage {
    elements_account ={
        AcheterLink :() => cy.get('[href="https://glowria.com/personal/presentation/glowria"]'),
    }

    GotoAcheter() {
        this.elements_account.AcheterLink().click()
    }
}

export default new AccountPage()
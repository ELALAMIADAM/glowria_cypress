///<reference types = 'cypress'/>  
import SignUpPage from '../pages/Signup.page'
import HomePage from '../pages/Home.page'
import { faker } from '@faker-js/faker';
import AccountPage from '../pages/Account.page'
import ShoppingPage from '../pages/Shopping.page'
import orderPage from '../pages/order.page'
import CartPage from '../pages/Cart.page'

describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://glowria.com/', { timeout: 120000 });
    });
    it('sign up', () => {
        HomePage.SignUpLink();
        let email = faker.internet.email({allowSpecialCharacters: true});
        HomePage.enterEmail(email);
        HomePage.clickInscriptionButton();

        SignUpPage.enterPrenom(faker.person.firstName());
        SignUpPage.enterNom(faker.person.lastName());
        SignUpPage.enterEmailConfirm(email);
        SignUpPage.enterPassword('ICEcream123@');
        SignUpPage.enterBirthday('01011990');
        SignUpPage.clickLegalCheckbox();
        SignUpPage.clickSubmitButton();

        cy.url().should('not.include', '/signup');

        HomePage.SignUpLink(); // Click the Sign Up link again to open yoiur account page
        cy.url().should('include', '/account/dashboard'); 

        AccountPage.GotoAcheter(); 
        ShoppingPage.ClickCraqueProduct();
        cy.url().should('include', '/order/personal');

        orderPage.adressOrder('123');
        orderPage.AddPhone(faker.phone.number({ style: 'mobile' }));
        orderPage.SubmitOrder();

        CartPage.CheckAccept();
        CartPage.ClickPayerButton();

        cy.origin('https://secure.payzen.eu', () => {
            cy.url().should('include', '/vads-payment');
        })


        
    })



});
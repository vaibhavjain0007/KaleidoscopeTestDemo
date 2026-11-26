import { expect } from '@playwright/test';

export default class LoginOrSignupPage {

    constructor (page) {
        this.page = page;
        this.email = page.getByRole('textbox', { name: 'Email Address' });
        this.next = page.getByRole('button', { name: 'Next' });

        this.firstName = page.getByLabel('First Name');
        this.lastName = page.getByLabel('Last Name');
        this.mobile = page.locator(
            '#onboarding-screen form input[type="tel"]'
        );
        this.password = page.getByLabel('Create a Password');

        this.ageConfirmationCheckbox = page.getByRole('checkbox', 
            { name: 'I confirm that I am at least 13 years old' }
        );
        this.submit = page.getByRole('button', { name: 'Submit' });
    }

    async enterEmail(email) {
        await this.email.fill(email);
    }

    async clickNext() {
        await this.next.click();
    }

    async enterSignupDetails(details) {
        await this.firstName.fill(details.firstName);
        await this.lastName.fill(details.lastName);
        await this.mobile.fill(details.mobile);
        await this.password.fill(details.password);
        await this.ageConfirmationCheckbox.check();
    }

    async clickSubmit() {
        await this.submit.click();
    }
}
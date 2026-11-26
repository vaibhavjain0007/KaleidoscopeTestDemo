import { expect } from '@playwright/test';

export default class ScholarshipLandingPage {

    constructor (page) {
        this.page = page;
        this.signupLink = page.getByRole('link', { name: 'Sign up' });

    }

    async clickSignupLink() {
        await this.signupLink.click();
    }

    async goto() {
        await this.page.goto('/');
    }

}
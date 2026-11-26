import { test as base, expect } from '@playwright/test';

import ScholarshipLandingPage from '../pages/ScholarshipLandingPage';
import LoginOrSignupPage from '../pages/LoginOrSignupPage';


export const test = base.extend({


    scholarshipLandingPage:
        async ({ page }, use) => {
            const scholarshipLandingPage = new ScholarshipLandingPage(page);
            await use(scholarshipLandingPage);
        },

    loginOrSignupPage:
        async ({ page }, use) => {
            const loginOrSignupPage = new LoginOrSignupPage(page);
            await use(loginOrSignupPage);
        },

});

export { expect };
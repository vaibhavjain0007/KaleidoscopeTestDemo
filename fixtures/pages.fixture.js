import { test as base, expect } from '@playwright/test';

import ScholarshipLandingPage from '../pages/ScholarshipLandingPage';
import LoginOrSignupPage from '../pages/LoginOrSignupPage';
import ApplicationStartPage from '../pages/ApplicationStartPage';


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

    applicationStartPage:
        async ({ page }, use) => {
            const applicationStartPage = new ApplicationStartPage(page);
            await use(applicationStartPage);
        }
});

export { expect };
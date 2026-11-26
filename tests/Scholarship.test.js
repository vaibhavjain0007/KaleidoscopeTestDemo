import { test, expect } from '../fixtures/pages.fixture';
import signupDetails from '../test-data/signupDetails.json';


test ('register user', async ( { scholarshipLandingPage, loginOrSignupPage } ) => {

    await scholarshipLandingPage.goto();
    await scholarshipLandingPage.clickSignupLink();

    await loginOrSignupPage.enterEmail(signupDetails.email);
    await loginOrSignupPage.clickNext();
    await loginOrSignupPage.enterSignupDetails(signupDetails);
    await loginOrSignupPage.clickSubmit();



});
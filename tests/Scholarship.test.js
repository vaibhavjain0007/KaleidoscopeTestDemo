import { test, expect } from '../fixtures/pages.fixture';
import signupDetails from '../test-data/signupDetails.json';
import contributorDetails from '../test-data/contributorDetails.json';
import extraCurricularActivities from '../test-data/extraCurricularActivities.json';
import highSchoolInfo from '../test-data/highSchoolInfo.json';
import essayDetails from '../test-data/essayDetails.json';

test ('register user', async ( { page, scholarshipLandingPage, loginOrSignupPage, applicationStartPage } ) => {

    await scholarshipLandingPage.goto();
    console.log('Navigated to Scholarship Landing Page with URL: ' + page.url());
    await scholarshipLandingPage.clickSignupLink();

    await loginOrSignupPage.enterEmail(signupDetails.email);
    await loginOrSignupPage.clickNext();
    await loginOrSignupPage.enterSignupDetails(signupDetails);
    await loginOrSignupPage.clickSubmit();

    console.log('Current Page with URL: ' + page.url());

    await applicationStartPage.enterAddressDetails(signupDetails);
    await applicationStartPage.clickAddContributor();
    console.log('Contributor details: ' + JSON.stringify(contributorDetails), contributorDetails.contributors[0], contributorDetails.contributors[1]);
    await applicationStartPage.enterContributorDetails(contributorDetails.contributors[0]);
    await page.waitForTimeout(8000);
    await applicationStartPage.clickAddContributor();
    await applicationStartPage.enterContributorDetails(contributorDetails.contributors[1]);

    await applicationStartPage.clickNextPage();
    // 2 min entries input error message validation pending
    await applicationStartPage.addEntryForExtraCurricularActivities();

    for (const activity of extraCurricularActivities.activities) {
        await applicationStartPage.enterExtraCurricularActivityDetails(activity);
        await applicationStartPage.addEntryForExtraCurricularActivities();
    }

    await applicationStartPage.asyncclickCloseEntryModal();
    await applicationStartPage.clickNextPage();
    
    await applicationStartPage.enterHighSchoolInfo(highSchoolInfo);
    await page.waitForTimeout(2000);
    await applicationStartPage.clickNextPage();


    await applicationStartPage.selectTopicsAndWriteEssays(essayDetails);
    await applicationStartPage.clickNextPage();

    await applicationStartPage.submitApplication();

});
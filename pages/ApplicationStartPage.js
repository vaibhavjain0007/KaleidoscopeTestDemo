import { expect } from '@playwright/test';

export default class ApplicationStartPage {

    constructor(page) {
        this.page = page;
        this.address = page.getByPlaceholder('Enter your street address');
        this.state = page.getByPlaceholder('Enter your state');
        this.city = page.getByPlaceholder('Enter your city');
        this.zipCode = page.getByPlaceholder('Enter your zip code');
        this.country = page.getByPlaceholder('Enter your country');

        this.addContributorButton = page.getByRole('button', {
            name: 'Add Contributor',
            exact: true
        });

        this.contributor = {
            firstName: page.getByPlaceholder('First Name'),
            lastName: page.getByPlaceholder('Last Name'),
            email: page.locator('[name*="contributor-request-email"]:not([name$="_confirm"])'),
            confirmEmail: page.locator('[placeholder = "Email Address"][name$="confirm"]'),
            message: page.locator('[name*="contributor-request-message"]'),
            addContributorButton: page.getByRole('button', {
                name: 'Add',
                exact: true
            })
        }

        this.extraCurricularActivities = {
            addEntryButton: page.getByRole('button', { name: 'Add Entry', exact: true }),
            closeEntryModalButton: page.locator('[aria-label="Close Add Entry modal"]'),

            activityName: page.getByPlaceholder('Short Input'),
            yearsInvolved: page.getByLabel('Total Number of Years Involved'),
            leadershipRoles: page.getByLabel(
                'List any leadership roles, offices, honors and recognitions related to this activity'
            ),

            descriptionOfInvolvement: page.getByLabel(
                'Description of Involvement'
            ),
            addActivityButton: page.getByRole('button', {
                name: 'Add',
                exact: true
            })
        }

        this.nextPageButton = page.getByRole('button', { name: 'Next Page' });

        this.highSchoolInfo = {
            address: page.getByPlaceholder('Enter high school street address'),
            city: page.getByPlaceholder('Enter high school city'),
            state: page.getByPlaceholder('Enter high school state'),
            zipCode: page.getByLabel('High School Zip Code'),
            GPA: page.getByPlaceholder('Enter your current GPA'),
            yearOfGraduation: page.getByPlaceholder('Enter a date'),
            uploadTranscriptButton: page.locator('input[type="file"]')
        }

        this.essay = {
            cars: page.getByRole('checkbox', { name: 'Cars' }),
            school: page.getByRole('checkbox', { name: 'School' }),
            other: page.getByRole('checkbox', { name: 'Other' }),
            essayAboutCars: page.getByRole('textbox', { name: 'Essay about Cars' }),
            essayAboutSchool: page.getByRole('textbox', { name: 'Essay about School' }),
        }

        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async enterAddressDetails(details) {
        await this.address.fill(details.address);
        await this.state.fill(details.state);
        await this.page.locator('[value="Alaska"]').click();
        await this.city.fill(details.city);
        await this.zipCode.fill(details.zipCode);
        await this.country.fill(details.country);
        await this.page.locator('[value="India"]').click();
    }

    async clickAddContributor() {
        await this.addContributorButton.click();
    }

    async enterContributorDetails(contributorDetails) {
        // Implementation for entering contributor details
        await this.contributor.firstName.fill(contributorDetails.firstName);
        await this.contributor.lastName.fill(contributorDetails.lastName);
        await this.contributor.email.fill(contributorDetails.email);
        await this.contributor.confirmEmail.fill(contributorDetails.email);
        await this.contributor.message.fill(contributorDetails.message);
        await this.contributor.addContributorButton.click();
    }

    async addEntryForExtraCurricularActivities() {
        await this.extraCurricularActivities.addEntryButton.click();
    }


    async enterExtraCurricularActivityDetails(activityDetails) {
        await this.extraCurricularActivities.activityName.fill(activityDetails.activityName);
        await this.extraCurricularActivities.yearsInvolved.fill(activityDetails.yearsInvolved);
        await this.extraCurricularActivities.leadershipRoles.fill(activityDetails.leadershipRoles);
        await this.extraCurricularActivities.descriptionOfInvolvement.fill(activityDetails.descriptionOfInvolvement);
        await this.extraCurricularActivities.addActivityButton.click();
    }

    asyncclickCloseEntryModal() {
        this.extraCurricularActivities.closeEntryModalButton.click();
    }

    async clickNextPage() {
        await this.nextPageButton.click();
    }


    async enterHighSchoolInfo(highSchoolInfo) {
        await this.highSchoolInfo.address.fill(highSchoolInfo.address);
        await this.highSchoolInfo.city.fill(highSchoolInfo.city);
        await this.highSchoolInfo.state.fill(highSchoolInfo.state);
        await this.page.locator('[value="Alaska"]').click();
        await this.highSchoolInfo.zipCode.fill(highSchoolInfo.zipCode);
        await this.highSchoolInfo.GPA.fill(highSchoolInfo.GPA);
        await this.highSchoolInfo.yearOfGraduation.fill(highSchoolInfo.yearOfGraduation);
        await this.highSchoolInfo.uploadTranscriptButton.setInputFiles(highSchoolInfo.transcriptFilePath);
    }

    async selectTopicsAndWriteEssays(essayDetails) {
        for (const topic of essayDetails.topics) {
            switch (topic) {
                case 'Cars':
                    await this.essay.cars.check();
                    await this.essay.essayAboutCars.fill(essayDetails.essayAboutCars);
                    break;
                case 'School':
                    await this.essay.school.check();
                    await this.essay.essayAboutSchool.fill(essayDetails.essayAboutSchool);
                    break;
                case 'Other':
                    await this.essay.other.check();
                    // Handle other topic if needed
                    break;
            }
        }
    }

    async submitApplication() {
        await this.submitButton.click();
    }
}
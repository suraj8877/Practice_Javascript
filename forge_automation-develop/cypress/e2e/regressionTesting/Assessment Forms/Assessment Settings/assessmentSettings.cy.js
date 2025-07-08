import AssessmentLocator from "../../../../locator/assessment/assessmentLocator";
import RegressionUtils from "../../../../utils/regressionUtills";
import { v4 } from 'uuid';

describe("Assessment Forms-settings Test Suite", () => {
    const assessmentLocator = new AssessmentLocator();
    const regressionUtills = new RegressionUtils();

    before(() => {
        cy.wait(2000);
        cy.adminLogin();
    });

    afterEach(() => {
        cy.wait(2000);
    });

    // Test Case: User can able to update form name in settings page.
    // Expected Result: Assessment form name will be updated in list.
    // Testrail ID: <C639>
    it("C639: User can able to update form name in settings page.", () => {
        console.log("User can able to update form name in settings page.");
        const formName = "T-" + v4();
        const updateFormName = "Test" + Math.round(Date.now() / 1000);
        assessmentLocator.homePageHeader.contains("Home").should("be.exist");
        regressionUtills.createAssessmentForm(formName);
        cy.wait(2000);
        assessmentLocator.settingsIconInAssessmentDetailsPage.click();
        cy.wait(2000);
        assessmentLocator.nameFieldInSettingsPage.click().clear().type(updateFormName);
        assessmentLocator.saveButtonInSettingsPage.contains("Save").click();
        cy.contains("Form updated successfully!", { timeout: 20000 });
        cy.wait(200);
        assessmentLocator.goBackButtonInSettingsPage.click();
        assessmentLocator.goBackButton.click();
        cy.wait(1000);
        assessmentLocator.assessmentFormPage.invoke("text").should("include", updateFormName);
    });
});
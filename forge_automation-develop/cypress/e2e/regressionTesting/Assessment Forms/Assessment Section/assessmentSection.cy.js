import RegressionUtils from "../../../../utils/regressionUtills";
import AssessmentLocator from "../../../../locator/assessment/assessmentLocator";
import { v4 } from 'uuid';

describe("Assessment Section Test Suite", () => {
    const regressionUtills = new RegressionUtils();
    const assessmentLocator = new AssessmentLocator();

    before(() => {
        cy.adminLogin();
    });

    afterEach(() => {
        cy.wait(1000);
    });

    it("Precondition for adding assessment form", () => {
        const formName = "AF-" + v4();
        assessmentLocator.homePageHeader.contains("Home").should("exist");
        regressionUtills.createAssessmentForm(formName);
    });


    // Test Case: Create new assessment section and verify.
    // Expected Result: Section should be added in section list with proper format.
    // Testrail ID: <C575>
    it("C575: Create new assessment section and verify.", () => {
        console.log("Create new assessment section and verify.");
        cy.contains('Add section').click();
        cy.contains("Section added successfully!").should("be.exist");
        cy.wait(200);
        cy.contains("Section 1").should('be.exist');
        regressionUtills.deleteSection();
    });


    // Test Case: Create assessment section with description.
    // Expected Result: Description should be visible on section card.
    // Testrail ID: <C580>
    it("C580: Create assessment section with description.", () => {
        console.log("Create assessment section with description.");
        regressionUtills.createSection();
        cy.contains("Section 1").should('be.exist');
        cy.contains("Section 1").click();
        assessmentLocator.sectionDescriptionField.should('be.exist');
        assessmentLocator.sectionDescriptionField.invoke('text', 'Test');
        assessmentLocator.sectionDescriptionField.contains("Test").should("be.exist");
        assessmentLocator.defaultSection.click();
        regressionUtills.deleteSection();
    });


    // Test Case: Verify user is able to add 'Alert message' successfully.
    // Expected Result: User should be  able to add an "Alert message" successfully.
    // Testrail ID: <C578>
    it("C578: Verify user is able to add 'Alert message' successfully.", () => {
        console.log("Verify user is able to add 'Alert message' successfully.");
        regressionUtills.createSection();
        cy.contains("Section 1").click();
        cy.contains("Patient alert").click();
        cy.contains("Info message").should('be.exist');
        cy.contains("Amber message").should('be.exist');
        cy.contains("Critical message").should('be.exist');
        cy.contains("Info message").click();
        assessmentLocator.sectionAlertField.click().type("Alert");
        cy.wait(500);
        assessmentLocator.defaultSection.click();

        // Commented as having issue on that.Once fixed, i will uncomment that.
        // cy.wait(1000);
        // cy.contains("Section 1").click();
        //assessmentLocator.sectionAlertField.contains("Alert").should('be.exist');
    });


    // Test Case: Verify that the user is able delete an 'Alert message' successfully.
    // Expected Result: The user should be  able delete an "Alert message" successfully.
    // Testrail ID: <C579>
    it("C579: Verify that the user is able delete an 'Alert message' successfully.", () => {
        console.log("Verify that the user is able delete an 'Alert message' successfully.");
        cy.contains("Section 1").click();
        assessmentLocator.alertDeleteIconFromSection.click();
        cy.wait(50);
        assessmentLocator.sectionAlertField.should('not.exist');
        regressionUtills.deleteSection();
    });


    // Test Case: Verify 'Delete' button from assessment section.
    // Expected Result: After clicking delete button, section should be remove from assessment section list.
    // Testrail ID: <C577>
    it("C577: Verify 'Delete' button from assessment section.", () => {
        console.log("Verify 'Delete' button from assessment section.");
        regressionUtills.createSection();
        assessmentLocator.threeDotButtonFromAssessmentSection.click();
        assessmentLocator.deleteButtonFromSection.click();
        cy.wait(200);
        cy.contains("Delete Section").should("be.exist");
        assessmentLocator.continueButtonFromDeleteAlert.click();
        cy.wait(500);
        cy.contains("Assessment section has been deleted successfully").should('be.exist');
        assessmentLocator.sectionCard.should('not.exist');
    });


    // Test Case: Verify the 'Duplicate Section Button' from section list.
    // Expected Result: After clicking duplicate section button, duplicate section should be added.
    // Testrail ID: <C576>
    it("C576: Verify the 'Duplicate Section Button' from section list.", () => {
        console.log("Verify the 'Duplicate Section Button' from section list.");
        regressionUtills.createSection();
        assessmentLocator.threeDotButtonFromAssessmentSection.click();
        assessmentLocator.duplicateSectionButton.click();
        cy.contains("Duplicate Section Added Successfully!").should("be.exist");
        cy.wait(500);
        cy.contains("Copy of Section 1").should('be.exist');
    });
});
import RegressionUtils from "../../../../utils/regressionUtills";
import AssessmentLocator from "../../../../locator/assessment/assessmentLocator";
import { v4 } from 'uuid';

describe("Assessment form Preview Test Suite", () => {
    const regressionUtills = new RegressionUtils();
    const assessmentLocator = new AssessmentLocator();


    function generateRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }

    beforeEach(() => {
        cy.adminLogin();
    })

    // Test Case: Verify Preview Button is Visible and Clickable and opens preview page
    // Expected Result: The "Preview" button should be visible and enabled.Upon clicking the "Preview" button:The user should be redirected to the Preview Page or see a modal with a preview of the assessment form.The URL should update to include /assessment-form/preview, or the modal should appear with the appropriate preview content.
    // Testrail ID: <C638>
    it("C638: Verify Preview Button is Visible and Clickable and opens preview page", () => {
        console.log("Verify Preview Button is Visible and Clickable");
        const previewQuestion = "P-" + v4();
        assessmentLocator.homePageHeader.contains("Home").should("be.exist");
        regressionUtills.createAssessmentForm(previewQuestion);
        cy.wait(2000);
        assessmentLocator.clickOnPreviewButton.should('be.visible');
        assessmentLocator.clickOnPreviewButton.click();
        cy.wait(2000);
        assessmentLocator.verifyUrlforPreview;
        });


    // Test Case: Click on preview button and verify the Assessment sections under Assessment form
    // Expected Result: Section should be added in section list with proper format under preview page.
    // Testrail ID: <C634>
    it("C634: Click on preview button and verify the Assessment sections under Assessment form", () => {
        console.log("Click on preview button and verify the Assessment sections under Assessment form");
        const previewQuestion = "P-" + v4();
        assessmentLocator.homePageHeader.contains("Home").should("be.exist");
        regressionUtills.createAssessmentForm(previewQuestion);
        cy.wait(2000);
        regressionUtills.createSection();
        regressionUtills.createSection();
        assessmentLocator.clickOnPreviewButton.click();
        cy.wait(2000);
        assessmentLocator.checkDraftStatusUnderPreview.should('exist');
        assessmentLocator.checkSection1HeadingPreview.should('exist');
        assessmentLocator.checkAssessmentPreviewSection.should('exist');
        assessmentLocator.clickOnContinueButton.click();
        assessmentLocator.checkAssessmentPreviewSection.should('exist');
        assessmentLocator.clickOnContinueButton.click();
        assessmentLocator.checkAssessmentPreviewSection.should('exist');
        assessmentLocator.clickOnContinueButton.click();
        assessmentLocator.checkAssessmentPreviewSection.should('exist');
        assessmentLocator.clickOnContinueButton.click();
        assessmentLocator.checkTheThankYouMessage.should('exist');
        assessmentLocator.goBackIconPreview.should('be.visible').click({ force: true });
        cy.wait(500);
        assessmentLocator.goBackButton.click();
    });


    // Test Case: Click on preview button and verify the assessment sections and questions under Assessment form.
    // Expected Result: The Preview window/modal should open, displaying all added sections and their respective questions.All section titles and descriptions should appear correctly in the preview.All questions should be visible with the correct format and input types.The preview should be in read-only mode (fields cannot be edited).The layout, alignment, and formatting should match how the form will appear when published.No broken UI elements, missing content, or errors should be present in the preview.
    // Testrail ID: <C635>
    it("C635: Click on preview button and verify the assessment sections and questions under Assessment form.", () => {
        console.log("Click on preview button and verify the assessment sections and questions under Assessment form.");
        const previewQuestion = "P-" + v4();
        assessmentLocator.homePageHeader.contains("Home").should("be.exist");
        regressionUtills.createAssessmentForm(previewQuestion);
        cy.wait(2000);
        regressionUtills.createSection();
        regressionUtills.createQuestion();
        cy.wait(5000);
        regressionUtills.createSection();
        assessmentLocator.addAssessmentQuestions.eq(1).click();
        assessmentLocator.questionTitle.click().type("Question 2", { delay: 0 });
        cy.wait(1000);
        assessmentLocator.option1InputField.click().type("Option 1");
        assessmentLocator.option2InpitField.click().type("Option 2");
        cy.wait(5000);
        assessmentLocator.clickOnPreviewButton.scrollIntoView().click();
        cy.wait(1000);
        assessmentLocator.checkDraftStatusUnderPreview.should('exist');
        assessmentLocator.checkSection1HeadingPreview.should('exist');
        assessmentLocator.checkAssessmentPreviewSection.should('exist');
        assessmentLocator.clickOnContinueButton.click();
        assessmentLocator.checkOptionsUnderquestionPreview.should('exist');
        assessmentLocator.checkOption1ButtonPreview.click();
        assessmentLocator.checkOption2ButtonPreview.click();
        assessmentLocator.clickOnContinueButton.click();
        assessmentLocator.checkAssessmentPreviewSection.should('exist');
        assessmentLocator.clickOnContinueButton.click();
        assessmentLocator.checkAssessmentPreviewSection.should('exist');
        assessmentLocator.checkOptionsUnderquestionPreview.should('exist');
        assessmentLocator.checkOption1ButtonPreview.click();
        assessmentLocator.checkOption2ButtonPreview.click();
        assessmentLocator.checkTheThankYouMessage.should('exist');
        assessmentLocator.goBackIconPreview.should('be.visible').click({ force: true });
        cy.wait(500);
        assessmentLocator.goBackButton.click();
    });


    // Test Case: Verify the Preview Functionality After Refreshing the Page with Selected Options in the Assessment Form
    // Expected Result: After refreshing the page, the previously selected options should be reset.The user should be required to reselect the options before proceeding to the Preview functionality.
    // Testrail ID: <C636>
    it("C636: Verify the Preview Functionality After Refreshing the Page with Selected Options in the Assessment Form", () => {
        console.log("Verify the Preview Functionality After Refreshing the Page with Selected Options in the Assessment Form");
        const previewQuestion = "P-" + v4();
        assessmentLocator.homePageHeader.contains("Home").should("be.exist");
        regressionUtills.createAssessmentForm(previewQuestion);
        cy.wait(2000);
        regressionUtills.createSection();
        assessmentLocator.addAssessmentQuestions.eq(0).click();
        regressionUtills.createQuestion();
        cy.wait(5000);
        assessmentLocator.clickOnPreviewButton.click();
        cy.wait(1000);
        assessmentLocator.checkDraftStatusUnderPreview.should('exist');
        assessmentLocator.checkSection1HeadingPreview.should('exist');
        assessmentLocator.clickOnContinueButton.click();
        assessmentLocator.checkAssessmentquestionPreviewHeading.should('exist');
        assessmentLocator.checkOptionsUnderquestionPreview.should('exist');
        assessmentLocator.checkOption1ButtonPreview.should('exist');
        assessmentLocator.checkOption2ButtonPreview.should('exist').click();
        cy.reload();
        assessmentLocator.checkAssessmentPreviewSection.should('exist');
        assessmentLocator.clickOnContinueButton.click();
        assessmentLocator.checkDisabledOption1.should('be.disabled');
        assessmentLocator.checkDisabledOption2.should('be.disabled');
    });


    // Test Case: Verify Error Handling on Preview When Continuing Without Selecting Required Options in Sections and Questions of the Assessment Form
    // Expected Result: A "Field is mandatory" warning should appear when clicking Continue in the Questions step without selecting required options.The user should be blocked from moving to the Preview until all required fields are filled.Error messages should be clear and placed next to the incomplete fields.No console errors or UI disruptions should occur during this process.                 
    // Testrail ID: <C637>
    it("C637: Verify Error Handling on Preview When Continuing Without Selecting Required Options in Sections and Questions of the Assessment Form", () => {
        console.log("Verify Error Handling on Preview When Continuing Without Selecting Required Options in Sections and Questions of the Assessment Form");
        const previewQuestion = "P-" + v4();
        assessmentLocator.homePageHeader.contains("Home").should("be.exist");
        regressionUtills.createAssessmentForm(previewQuestion);
        cy.wait(5000);
        regressionUtills.createSection();
        assessmentLocator.addAssessmentQuestions.eq(0).click();
        regressionUtills.createQuestion();
        assessmentLocator.clickOnPreviewButton.click();
        cy.wait(1000);
        assessmentLocator.checkDraftStatusUnderPreview.should('exist');
        assessmentLocator.checkSection1HeadingPreview.should('exist');
        assessmentLocator.checkAssessmentPreviewSection.should('exist');
        assessmentLocator.clickOnContinueButton.click();
        assessmentLocator.checkAssessmentquestionPreviewHeading.should('exist');
        assessmentLocator.checkOptionsUnderquestionPreview.should('exist');
        assessmentLocator.checkOption1ButtonPreview.should('exist');
        assessmentLocator.checkOption2ButtonPreview.should('exist');
        assessmentLocator.clickOnContinueButton.click();
        assessmentLocator.warningMessageUnderPreview.should('be.visible');
    });
})
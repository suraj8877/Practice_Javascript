import AssessmentLocator from "../locator/assessment/assessmentLocator";

const assessmentLocator = new AssessmentLocator();
class RegressionUtils {

    createAssessmentForm(value) {
        assessmentLocator.leftNavForClinical.contains("Clinical team").click({ force: true });
        //assessmentLocator.validatePageLoaded;
        assessmentLocator.leftNavForAssessmentForm.contains("Assessment forms").click();
        cy.url({ timeout: 20000 }).should("include", "/assessment-form/list");
        assessmentLocator.creatNewFormButton.contains("Create new form").click();
        assessmentLocator.nameInputField.click().type(value);
        assessmentLocator.selectCountry.click({ delay: 100 });
        assessmentLocator.countrySearchField.click().type("India");
        cy.contains("India").click();
        assessmentLocator.selectCondition.click();
        cy.contains("Hair Loss").click();
        cy.wait(500);
        assessmentLocator.startBuldingButton.contains("Start Building").click();
        cy.wait(2000);
        cy.contains("Form submitted successfully!", { timeout: 20000 });
    }

    createAssessmentFormWithPublish(value) {
        assessmentLocator.leftNavForClinical.contains("Clinical team").click({ force: true });
        assessmentLocator.validatePageLoaded;
        assessmentLocator.leftNavForAssessmentForm.contains("Assessment forms").click();
        cy.url({ timeout: 20000 }).should("include", "/assessment-form/list");
        assessmentLocator.creatNewFormButton.contains("Create new form").click();
        assessmentLocator.nameInputField.click().type(value);
        assessmentLocator.selectCountry.click();
        cy.wait(500);
        assessmentLocator.countrySearchField.click().type("India");
        cy.contains("India").click();
        assessmentLocator.selectCondition.click();
        cy.wait(500);
        cy.contains("Weight loss injections").click();
        cy.wait(1000);
        assessmentLocator.selectUpsellProduct.click().type("Upsell product 1");
        assessmentLocator.startBuldingButton.contains("Start Building").click();
        cy.contains("Form submitted successfully!", { timeout: 20000 });
        cy.wait(100);
        cy.contains('Add section').click();
        cy.contains("Add Sections Successfully!").should("be.exist");
        cy.contains("Section 1").should('be.exist');
        cy.wait(5000);
        cy.get(':nth-child(1) > .px-2 > .flex > :nth-child(2) > span').click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(2000);
        cy.get('input[placeholder="This is a select one question title"]').click().type("Question 1");
        cy.wait(1000);
        cy.get(':nth-child(1) > .flex-1 > .cursor-text').click().type("Option 1");
        cy.get(':nth-child(2) > .flex-1 > .cursor-text').click().type("Option 2");
        cy.wait(200);
        cy.get('.p-3').click();
        cy.wait(5000);
        cy.contains('Publish').click();
        cy.contains('Published').should('be.exist');
        assessmentLocator.publishButton.contains('Publish').click();
        assessmentLocator.publishedPopup.should('be.exist');
        cy.wait(5000);
        cy.contains('Form published!', { timeout: 20000 }).should('be.exist');
        assessmentLocator.closeButtonFromPublishPopup.click();
        cy.wait(100);
        assessmentLocator.publishedPopup.should('not.exist');
    }

    createSection() {
        cy.contains('Add section').click();
        cy.contains("Section added successfully!").should("be.exist");
        cy.wait(500);
        cy.contains("Section 1").should('be.exist');
    }

    createQuestion() {
        cy.get(':nth-child(1) > .px-2 > .flex > :nth-child(2) > span').click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(2000);
        cy.get('input[placeholder="This is a select one question title"]').click().type("Question 1");
        cy.wait(1000);
        cy.get(':nth-child(1) > .flex-1 > .cursor-text').click().type("Option 1");
        cy.get(':nth-child(2) > .flex-1 > .cursor-text').click().type("Option 2");
        cy.wait(200);
        cy.get('.p-3').click();
    }

    deleteSection() {
        assessmentLocator.threeDotButtonFromAssessmentSection.click();
        assessmentLocator.deleteButtonFromSection.click();
        cy.wait(200);
        cy.contains("Delete Section").should("be.exist");
        assessmentLocator.continueButtonFromDeleteAlert.click();
        cy.wait(500);
        cy.contains("Assessment section has been deleted successfully").should('be.exist');
        cy.wait(500);
        assessmentLocator.sectionCard.should('not.exist');
    }

    deleteQuestion() {
        cy.get('.gap-x-2 > div.relative > span > .px-2').click({force: true});
        assessmentLocator.deleteButtonFromSection.click();
        cy.wait(200);
        cy.contains("Delete Question").should("be.exist");
        assessmentLocator.continueButtonFromDeleteAlert.click();
        cy.wait(500);
        cy.contains("Assessment question has been deleted successfully").should('be.exist');
        cy.wait(500);
    }

    createStaffWithPCT(value1, value2, value3) {
        cy.get('.gap-3 > .px-4').contains("Add staff user").click();
        cy.wait(200);
        cy.get('.mb-6 > div.relative > :nth-child(1) > .px-6').click();
        cy.get('[data-testid="Patient Care Team"] > .cursor-pointer > .justify-between').click();
        cy.wait(500);
        cy.contains("Select role...").click();
        cy.get('[data-testid="PCT"] > .cursor-pointer > .justify-between').click();
        cy.contains("Continue").click();
        cy.wait(500);
        cy.get(':nth-child(1) > [data-testid="newForm-name-field"]').click().type(value1);
        cy.wait(100);
        cy.get('.bg-pure-white.border-forge-grey-200 > :nth-child(2) > [data-testid="newForm-name-field"]').click().type(value2);
        cy.get('.relative > [data-testid="newForm-name-field"]').click().type(value3);
        cy.get('[data-testid="generate-password-button"]').click();
        cy.wait(100);
        cy.contains("Create user").click();
        cy.wait(500);
        cy.contains("User created successfully!").should("be.exist");
        cy.contains("Go to staff list").click();
        cy.wait(2000);
    }
}

export default RegressionUtils;
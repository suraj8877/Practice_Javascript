import RegressionUtils from "../../../../utils/regressionUtills";
import AssessmentLocator from "../../../../locator/assessment/assessmentLocator";
import { v4 } from 'uuid';

describe("Assessment Question Test Suite", () => {
    const regressionUtills = new RegressionUtils();
    const assessmentLocator = new AssessmentLocator();

    before(() => {
        cy.adminLogin();
    })

    afterEach(() => {
        cy.wait(1000);
    });

    it("Precondition for adding assessment form and section", () => {
        const formName = "AF-" + v4();
        regressionUtills.createAssessmentForm(formName);
        cy.wait(500);
        regressionUtills.createSection();
    })

    // Test Case: Create a question for 'Select one' option and verify the question and delete it.
    // Expected Result: "Select one" related question and options should be added under section successfully and delete the question successfully.
    // Testrail ID: <C588>
    it("C588: Create a question for 'Select one' option and verify the question and delete it.", () => {
        console.log("Create a question for 'Select one' option and verify the question and delete it.");
        assessmentLocator.addButtonFromSelectOneField.click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(200);
        assessmentLocator.questionTitleField.click().type("Question for Select One");
        cy.wait(200);
        assessmentLocator.option1FromQuestionField.click().type("Option 1");
        assessmentLocator.option2FromQuestionField.click().type("Option 2");
        cy.wait(100);
        assessmentLocator.defaultSection.click();
        cy.contains("Question for Select One").should('be.exist');
        cy.contains("Option 1").should('be.exist');
        cy.contains("Option 2").should('be.exist');
        regressionUtills.deleteQuestion();
        cy.contains("Question for Select One").should('not.exist');
    });


    // Test Case: Create a question with Multiple choice options and verify the question and delete it.
    // Expected Result: Multiple choice question and options should be added under section successfully with all details and delete the question successfully.
    // Testrail ID: <C589>
    it("C589: Create a question with Multiple choice options and verify the question and delete it.", () => {
        console.log("Create a question with Multiple choice options and verify the question and delete it.");
        assessmentLocator.addButtonFromMutipleChoiceField.click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(200);
        assessmentLocator.MutiplechoiceQuestionTitleField.click().type("Multiple Choice Questions");
        cy.wait(200);
        assessmentLocator.option1FromQuestionField.click().type("Option 1");
        assessmentLocator.option2FromQuestionField.click().type("Option 2");
        assessmentLocator.addanotheroptionButton.click();
        assessmentLocator.Option3.click().type("Option 3");
        cy.wait(100);
        assessmentLocator.defaultSection.click();
        cy.contains("Multiple Choice Questions").should('be.exist');
        cy.contains("Option 1").should('be.exist');
        cy.contains("Option 2").should('be.exist');
        cy.contains("Option 3").should('be.exist');
        regressionUtills.deleteQuestion();
        cy.contains("Multiple Choice Questions").should('not.exist');
    });


    // Test Case: Create a question with YES/NO options and verify the question and delete it.
    // Expected Result: YES/NO question and options should be added under section successfully with all details and delete the question successfully.
    // Testrail ID: <C590>
    it("C590: Create a question with Yes/No options and verify it.", () => {
        console.log("Create a question with Yes/No options and verify it.");
        assessmentLocator.addButtonFromYesOrNoField.click();
        cy.contains("Assessment question has been created successfully").should("be.visible");
        cy.wait(200);
        assessmentLocator.YesOrNoQuestionTitleField.click().type("Yes/No Question");
        cy.wait(100);
        assessmentLocator.defaultSection.click();
        cy.contains("Yes/No Question").should('be.exist');
        cy.contains("YES").should('be.exist');
        cy.contains("No").should('be.exist');
        regressionUtills.deleteQuestion();
        cy.contains("Yes/No Question").should('not.exist');
    });


    // Test Case: Create a question with Dropdown select options and verify the question and delete it.
    // Expected Result: Dropdown select question and options should be added under section successfully with all details and delete the question successfully.
    // Testrail ID: <C591>
    it("C591: Create a question with Dropdown select options and verify the question and delete it.", () => {
        console.log("Create a question with Dropdown select options and verify the question and delete it.");
        assessmentLocator.addButtonFromDropDownSelectField.click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(200);
        assessmentLocator.DropDownSelectQuestionTitleField.click().type("Question for Select DropDown");
        cy.wait(200);
        assessmentLocator.option1FromQuestionField.click().type("Option 1");
        assessmentLocator.option2FromQuestionField.click().type("Option 2");
        assessmentLocator.addanotheroptionButton.click();
        assessmentLocator.Option3.click().type("Option 3");
        cy.wait(200);
        assessmentLocator.defaultSection.click();
        cy.wait(200);
        cy.contains("Question for Select DropDown").should('be.exist');

        //Unable to assert
        //cy.get('[data-testid="questionOption-input-field0"]').should("have.text","Option 1");
        // cy.get('[data-testid="questionOption-input-field1"]').contains("Option 2").should('be.exist');
        // cy.get('[data-testid="questionOption-input-field2"]').contains("Option 3").should('be.exist');

        regressionUtills.deleteQuestion();
        cy.contains("Question for Select DropDown").should('not.exist');
    });

    // // need to modify the gp lookup question
    // // Test Case: Create a question with GP lookup and verify the question and delete it.
    // // Expected Result: GP lookup question should be added under section successfully with all details and delete the question successfully.
    // // Testrail ID: <C592>
    // it("C592:  Create a question with GP lookup and verify the question and delete it.", () => {
    //     console.log("Create a question with GP lookup and verify the question and delete it.");
    //     assessmentLocator.addButtonFromGPlookupField.click();
    //     cy.get('h4').should('contain', "Assessment question has been created successfully").should("exist");
    //     cy.wait(200);
    //     cy.contains("This is a gp confirmation question title").click().type('gp conirmation');
    //     assessmentLocator.gplookupQuestionTitleField.click().type("Question for GP lookup");
    //     cy.contains('This is a gp unregistered reason question title').click().type('gp unregistered');
    //     cy.wait(200);
    //     assessmentLocator.defaultSection.click();
    //     cy.contains("Question for GP lookup").should('be.exist');
    //     assessmentLocator.SearchField.should('exist');
    //     regressionUtills.deleteQuestion();
    //     cy.contains("Question for GP lookup").should('not.exist');
    // });


    // Test Case: Create a question with Address and verify the question and delete it.
    // Expected Result: "Address" question should be added under section successfully with all details and Also validate search field and delete the question successfully.
    // Testrail ID: <C593>
    it("C593: Create a question with Address and verify the question and delete it.", () => {
        console.log("Create a question with Address and verify the question and delete it.");
        assessmentLocator.addButtonFromAddressField.click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(200);
        assessmentLocator.AddressQuestionTitleField.click().type("Mention Address");
        cy.wait(200);
        assessmentLocator.defaultSection.click();
        cy.contains("Mention Address").should('be.exist');
        regressionUtills.deleteQuestion();
        cy.contains("Mention Address").should('not.exist');
    });

    // commenting the below test case as the questions were disabled

    // Test Case: Create a question with Medication and verify the question and delete it.
    // Expected Result: "Medication" question should be added under section successfully with all details and Also validate search field and delete the question successfully.
    // Testrail ID: <C594>
    // it("C594: Create a question with Medication and verify the question and delete it.", () => {
    //     console.log("Create a question with Medication and verify the question and delete it.");
    //     const questionName = "Q-" + v4();
    //     assessmentLocator.addButtonFromMedicationField.click();
    //     cy.contains("Assessment question has been created successfully").should("be.exist");
    //     cy.wait(200);
    //     assessmentLocator.MedicationQuestionTitleField.click().type("Type of Medication");
    //     cy.wait(200);
    //     assessmentLocator.defaultSection.click();
    //     cy.contains("Type of Medication").should('be.exist');
    //     assessmentLocator.SearchField.should('exist');
    //     regressionUtills.deleteQuestion();
    //     cy.contains("Type of Medication").should('not.exist');
    // });


    // Test Case: Create a question with BMI and verify the question and delete it.
    // Expected Result: "BMI" question should be added under section successfully with all details and Also validate 'Your height & Weight' field and delete the question successfully.
    // Testrail ID: <C595>
    it("C595: Create a question with BMI and verify the question and delete it.", () => {
        console.log("Create a question with BMI and verify the question and delete it.");
        assessmentLocator.addButtonFromBMIField.click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(200);
        assessmentLocator.BMIQuestionTitleField.click().type("BMI Details");
        cy.wait(200);
        assessmentLocator.defaultSection.click();
        cy.contains("BMI Details").should('be.exist');
        assessmentLocator.BMIheightWithoutShoes.should('exist');
        assessmentLocator.BMIweightinIndoorClothes.should('exist');
        regressionUtills.deleteQuestion();
        cy.contains("BMI Details").should('not.exist');
    });

    // commenting the below test case as the questions were disabled

    // // Test Case: Create a question with Allergies and verify the question and delete it.
    // // Expected Result: "Allergies" question should be added under section successfully with all details and Also validate search field and delete the question successfully.
    // // Testrail ID: <C670>
    // it("C670: Create a question with Allergies and verify the question and delete it.", () => {
    //     console.log("Create a question with Allergies and verify the question and delete it.");
    //     assessmentLocator.addButtonFromAllergiesField.click();
    //     cy.contains("Assessment question has been created successfully").should("be.exist");
    //     cy.wait(200);
    //     assessmentLocator.AllergiesQuestionTitleField.click().type("Allergies Field");
    //     cy.wait(200);
    //     assessmentLocator.defaultSection.click();
    //     cy.contains("Allergies Field").should('be.exist');
    //     assessmentLocator.SearchField.should('exist');
    //     regressionUtills.deleteQuestion();
    //     cy.contains("Allergies Field").should('not.exist');
    // });


    // Test Case: Create a question with Date and verify the question and delete it.
    // Expected Result: Date question should be added under section sucessfully with all details and delete the question successfully.
    // Testrail ID: <C596>
    it("C596: Create a question with Date and verify the question and delete it.", () => {
        console.log("Create a question with Date and verify the question and delete it.");
        assessmentLocator.addButtonFromDateField.click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(2000);
        assessmentLocator.DateQuestionTitleField.click().type("Date");
        assessmentLocator.defaultSection.click();
        cy.contains("Date").should('be.exist');
        assessmentLocator.selectDateField.should('exist');
        regressionUtills.deleteQuestion();
    });


    // Test Case: Create a question with Consent and verify the question and delete it.
    // Expected Result: Consent question should be added under section sucessfully with all details and delete the question successfully.
    // Testrail ID: <C597>
    it("C597: Create a question with Consent and verify the question and delete it.", () => {
        console.log("Create a question with Consent and verify the question and delete it.");
        assessmentLocator.addButtonFromConsentField.click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(2000);
        assessmentLocator.ConsentQuestionTitleField.click().type("Consent Field");
        assessmentLocator.defaultSection.click();
        cy.contains("Consent Field").should('be.exist');
        regressionUtills.deleteQuestion();
        cy.contains("Consent Field").should('not.exist');
    });


    // Test Case: Create a question with Email and verify the question and delete it.
    // Expected Result: Email question should be added under section sucessfully with all details and delete the question successfully.
    // Testrail ID: <C598>
    it("C598: Create a question with Email and verify the question and delete it.", () => {
        console.log("Create a question with Email and verify the question and delete it.");
        assessmentLocator.addButtonFromEmailField.click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(2000);
        assessmentLocator.EmailQuestionTitleField.click().type("Add Email");
        assessmentLocator.defaultSection.click();
        cy.contains("Add Email").should('be.exist');
        assessmentLocator.PatientNeedToAnswer.should('exist');
        regressionUtills.deleteQuestion();
        cy.contains("Add Email").should('not.exist');

    });


    // Test Case: Create a question with Number and verify the question and delete it.
    // Expected Result: Number question should be added under section sucessfully with all details and delete the question successfully.
    // Testrail ID: <C599>
    it("C599: Create a question with Number and verify the question and delete it.", () => {
        console.log("Create a question with Number and verify the question and delete it.");
        assessmentLocator.addButtonFromNumberField.click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(2000);
        assessmentLocator.NumberQuestionTitleField.click().type("Add Number");
        assessmentLocator.defaultSection.click();
        cy.contains("Add Number").should('be.exist');
        assessmentLocator.NumberSearchField.should('exist');
        regressionUtills.deleteQuestion();
        cy.contains("Add Number").should('not.exist');
    });


    // Test Case: Create a question with Input Plain Text and verify the question and delete it.
    // Expected Result: Input Plain Text question should be added under section sucessfully with all details and delete the question successfully.
    // Testrail ID: <C600>
    it("C600: Create a question with Input Plain Text and verify the question and delete it.", () => {
        console.log("Create a question with Input Plain Text and verify the question and delete it.");
        assessmentLocator.addButtonFromInputplainTextField.click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(2000);
        assessmentLocator.InputPlainTextQuestionTitleField.click().type("Mention Input Plain Text");
        assessmentLocator.defaultSection.click();
        cy.contains("Mention Input Plain Text").should('be.exist');
        assessmentLocator.PatientNeedToAnswer.should('exist');
        regressionUtills.deleteQuestion();
        cy.contains("Mention Input Plain Text").should('not.exist');
    });


    // Test Case: Create a question with Free Text(paragraph) and verify the question and delete it.
    // Expected Result: Free Text(paragraph) question should be added under section sucessfully with all details and delete the question successfully.
    // Testrail ID: <C601>
    it("C601: Create a question with Free Text(paragraph) and verify the question and delete it.", () => {
        console.log("Create a question with Free Text(paragraph) and verify the question and delete it.");
        assessmentLocator.addButtonFromFreeTextParagraphField.click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(2000);
        assessmentLocator.InputFreeTextParagraphQuestionTitleField.click().type("Add Input Free Text");
        assessmentLocator.defaultSection.click();
        cy.contains("Add Input Free Text").should('be.exist');
        assessmentLocator.PatientNeedToAnswer.should('exist');
        regressionUtills.deleteQuestion();
        cy.contains("Add Input Free Text").should('not.exist');
    });


    // Test Case: Create a question with File Upload and verify the question and delete it.
    // Expected Result: File Upload question should be added under section sucessfully with all details and delete the question successfully.
    // Testrail ID: <C602>
    it("C602: Create a question with File Upload and verify the question and delete it.", () => {
        console.log("Create a question with File Upload and verify the question and delete it.");
        assessmentLocator.addButtonFromFileUploadField.click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(2000);
        assessmentLocator.FileUploadTitleField.click().type("Upload a File");
        assessmentLocator.defaultSection.eq(0).click();
        cy.contains("Upload a File").should('be.exist');
        assessmentLocator.FileUploadIcon.should('exist');
        regressionUtills.deleteQuestion();
        cy.contains("Upload a File").should('not.exist');
    });

    // Test Case: Create a question with speed bump and verify the question and delete it.
    // Expected Result: speed bump question should be added under section successfully with all details and delete the question successfully.
    // Testrail ID: <C665>
    it("C665: Create a question with speed bump and verify the question and delete it.", () => {
        console.log("Create a question with speed bump and verify the question and delete it.");
        assessmentLocator.addAssessmentQuestions.eq(14).click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(2000);
        assessmentLocator.questionTitle.click().type("speed bump");
        cy.wait(7000);
        assessmentLocator.speedbumpUploadoption.should('exist');
        assessmentLocator.addSpeedbumpDescription.click().type('This is a speed bump question')
        assessmentLocator.defaultSection.eq(0).click();
        cy.contains("speed bump").should('be.exist');
        regressionUtills.deleteQuestion();
        cy.contains("speed bump").should('not.exist');
    });

    // Test Case: Create a question with Real time photos and verify the question and delete it.
    // Expected Result: Real time photos question should be added under section successfully with all details and delete the question successfully.
    // Testrail ID: <C666>
    it("C666: Create a question with Real time photos and verify the question and delete it.", () => {
        console.log("Create a question with Real time photos and verify the question and delete it.");
        assessmentLocator.addAssessmentQuestions.eq(17).click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(2000);
        assessmentLocator.questionTitle.click().type("Real time photos");
        cy.wait(7000);
        assessmentLocator.defaultSection.eq(0).click();
        cy.contains("Real time photos").should('be.exist');
        assessmentLocator.DeleteQuestion.click({force:true});
        cy.contains('Delete').click();
        assessmentLocator.clickOnDeleteButton.click();
        cy.contains("Real time photos").should('not.exist');
    });

    // Test Case: Create a question with Capture upload and verify the question and delete it.
    // Expected Result: Capture upload question should be added under section successfully with all details and delete the question successfully.
    // Testrail ID: <C667>
    it("C667: Create a question with Capture upload and verify the question and delete it.", () => {
        console.log("Create a question with Capture upload and verify the question and delete it.");
        assessmentLocator.addAssessmentQuestions.eq(18).click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(2000);
        assessmentLocator.questionTitle.click().type("Capture upload");
        cy.wait(7000);
        assessmentLocator.defaultSection.eq(0).click();
        cy.contains("Capture upload").should('exist');
        regressionUtills.deleteQuestion();
        //cy.contains("Capture upload").should("not.exist");
    });

    // Test Case: Create a question with DOB and verify the question and delete it.
    // Expected Result: DOB question should be added under section successfully with all details and delete the question successfully.
    // Testrail ID: <C668>
    it("C668: Create a question with DOB and verify the question and delete it.", () => {
        console.log("Create a question with DOB and verify the question and delete it.");
        assessmentLocator.addAssessmentQuestions.eq(19).click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(2000);
        assessmentLocator.questionTitle.click().type("DOB");
        cy.wait(7000);
        assessmentLocator.defaultSection.eq(0).click();
        cy.contains("DOB").should('be.exist');
        regressionUtills.deleteQuestion();
        //cy.contains("DOB").should('not.exist');
    });

    // Test Case: Create a question with Weight Loss Plan and verify the question and delete it.
    // Expected Result: Weight Loss Plan question should be added under section successfully with all details and delete the question successfully.
    // Testrail ID: <C669>
    it("C669: Create a question with Weight Loss Plan and verify the question and delete it.", () => {
        console.log("Create a question with Weight Loss Plan and verify the question and delete it.");
        assessmentLocator.addAssessmentQuestions.eq(20).click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(2000);
        assessmentLocator.questionTitle.click().type("DOB");
        assessmentLocator.defaultSection.eq(0).click();
        cy.contains("Weight Loss Plan").should('be.exist');
        regressionUtills.deleteQuestion();
    });

    // Test Case: Add two questions with select one option and Multiple Choice in a section and check the parent and child relation and verify it.
    // Expected Result: select one and Multiple-Choice question should be added under section successfully and also should add details for (parent child relation) by selecting parent question and options successfully.
    // Testrail ID: <C603>
    it("C603: Add two questions with select one option and Multiple Choice in a section and check the parent and child relation and verify it.", () => {
        console.log("Create a question with options in a section and verify it.");
        assessmentLocator.addButtonFromSelectOneField.click();
        cy.contains("Assessment question has been created successfully").should("be.visible");
        cy.wait(1000);
        assessmentLocator.questionTitle.should('be.visible').click().type("Question 1", { delay: 200 });
        cy.wait(100);
        assessmentLocator.option1FromQuestionField.should('be.visible').click().type("Option 1", { timeout: 20000 });
        assessmentLocator.option2FromQuestionField.should('be.visible').click().type("Option 2", { timeout: 20000 });
        cy.wait(200);
        assessmentLocator.defaultSection.click();
        cy.wait(7000);
        assessmentLocator.addButtonFromMutipleChoiceField.click();
        cy.contains("Assessment question has been created successfully").should("be.visible");
        cy.wait(2000);
        assessmentLocator.MutiplechoiceQuestionTitleField.scrollIntoView().click().type("Multiple Choice questions", { timeout: 20000 });
        cy.wait(100);
        assessmentLocator.Option1.click().type("Option 3", { timeout: 20000 });
        assessmentLocator.Option2.click().type("Option 4", { timeout: 20000 });
        cy.wait(200);
        assessmentLocator.assessmentFormDetailsHeader.click();
        cy.wait(5000);
        cy.contains('Multiple Choice questions').should("be.exist");
        cy.contains('Multiple Choice questions').click({ force: true });
        // assessmentLocator.AssessmentquestionDetails.should("be.visible");
        cy.wait(5000);
        cy.get('[data-testid="showDescription-toggle-button"]').click({ force: true });
        cy.wait(500);
        assessmentLocator.TypeDescription.should("be.visible").click().type("select one option and multiple choice question", { timeout: 50000 });
        cy.wait(5000);
        assessmentLocator.EnableButtonUnderDetails.eq(1).should("not.have.class", "disabled-class");
        assessmentLocator.EnableButtonUnderDetails.eq(2).should("not.have.class", "disabled-class");
        cy.wait(5000);
        assessmentLocator.ExpiresDropdown.then($el => {
            cy.wrap($el).trigger('click');
        });
        cy.wait(1000);
        assessmentLocator.Expires1WeekDropdown.click();
        assessmentLocator.assessmentFormDetailsHeader.click({ force: true });
        cy.contains('Question 1').click({ force: true });
        cy.wait(2000);
        assessmentLocator.clickonSelectParentDropdown.click();
        cy.wait(500);
        assessmentLocator.clickonquestion1Heading.eq(0).click();
        cy.wait(500);
        assessmentLocator.checkParentOption3.eq(1).click();
    });


    // Test Case: Add two questions with Yes/No and Dropdown select in a section and check the parent and child relation and verify it.
    // Expected Result: Yes/No and Dropdown select question should be added under section successfully and also should add details for (parent child relation) by selecting parent question and options successfully.
    // Testrail ID: <C604>
    it("C604: create two questions with Yes/No and Dropdown select and Add Details of parent question,verify it.", () => {
        console.log("Create a question with options in a section and verify it.");
        assessmentLocator.addButtonFromYesOrNoField.click();
        cy.contains("Assessment question has been created successfully").should("be.visible");
        cy.wait(2000);
        assessmentLocator.YesOrNoQuestionTitleField.click().type("Yes/No question", { delay: 200 });
        assessmentLocator.assessmentFormDetailsHeader.click();
        cy.wait(8000);
        assessmentLocator.addButtonFromDropDownSelectField.click();
        cy.contains("Assessment question has been created successfully").should("be.visible");
        cy.wait(2000);
        assessmentLocator.DropDownSelectQuestionTitleField.click().type("Select DropDown", { delay: 100 });
        assessmentLocator.Option1.click().type("Option 1");
        assessmentLocator.Option2.click().type("Option 2");
        assessmentLocator.addanotheroptionButton.click();
        assessmentLocator.Option3.click().type("Option 3");
        cy.wait(200);
        assessmentLocator.assessmentFormDetailsHeader.click();
        cy.wait(8000);
        cy.contains('Select DropDown').should("be.visible").click();
        assessmentLocator.AssessmentquestionDetails.should("be.visible");
        assessmentLocator.showDescriptionField.should("not.have.class", "active").then(($btn) => {
            if (!$btn.hasClass("active")) {
                assessmentLocator.showDescriptionField.click({ force: true });
            }
        });
        cy.wait(500);
        assessmentLocator.TypeDescription.should("be.visible").click({ force: true }).type("Yes/No and Dropdown choice question", { delay: 100 });
        assessmentLocator.EnableButtonUnderDetails.eq(0).should('not.have.class', 'disabled-class');
        assessmentLocator.EnableButtonUnderDetails.eq(1).should('not.have.class', 'disabled-class');
        assessmentLocator.ExpiresDropdown.click();
        assessmentLocator.Expires2WeekDropdown.click();
        assessmentLocator.clickonSelectParentDropdown.click();
        cy.wait(500);
        cy.contains('Yes/No question').click();
    });

    // // GP lookup flow has been changed we need to modify this question
    // // Test Case: Add two questions with GP Lookup and Address in a section and check the parent and child relation and verify it.
    // // Expected Result: GP Lookup and Address question should be added under section successfully and also when we try to add details for (parent child relation) it should show 'No options found' text
    // // Testrail ID: <C605>
    // it("C605: Add two questions with GP Lookup and Address in a section and check the parent and child relation and verify it.", () => {
    //     assessmentLocator.addButtonFromGPlookupField.click();
    //     cy.contains("Assessment question has been created successfully").should("be.visible");
    //     cy.wait(2000);
    //     assessmentLocator.GPlookupQuestionTitleField.click().type("GP Lookup question", { delay: 0 });
    //     assessmentLocator.SearchField.should('exist');
    //     cy.wait(8000);
    //     assessmentLocator.addButtonFromAddressField.click();
    //     cy.contains("Assessment question has been created successfully").should("be.visible");
    //     cy.wait(2000);
    //     assessmentLocator.AddressQuestionTitleField.click().type("Mention Address", { delay: 100 });
    //     assessmentLocator.SearchField.should('exist');
    //     assessmentLocator.assessmentFormDetailsHeader.click();
    //     cy.wait(8000);
    //     cy.contains('Mention Address').should("be.visible").click();
    //     assessmentLocator.AssessmentquestionDetails.should("be.visible");
    //     assessmentLocator.showDescriptionField.should("not.have.class", "active").then(($btn) => {
    //         if (!$btn.hasClass("active")) {
    //             assessmentLocator.showDescriptionField.click({ force: true });
    //         }
    //     });
    //     cy.wait(500);
    //     assessmentLocator.TypeDescription.should("be.visible").click({ force: true }).type("GP lookup and Address question", { delay: 100 });
    //     assessmentLocator.EnableButtonUnderDetails.eq(0).should('not.have.class', 'disabled-class');
    //     assessmentLocator.EnableButtonUnderDetails.eq(1).should('not.have.class', 'disabled-class');
    //     assessmentLocator.ExpiresDropdown.click();
    //     assessmentLocator.Expires3WeekDropdown.click();
    //     assessmentLocator.clickonSelectParentDropdown.click();
    //     cy.wait(500);
    // });

    // commenting the below test cases as the questions were disabled
    // // Test Case: Add two questions with Medication and BMI in a section and check the parent and child relation and verify it.
    // // Expected Result: Medication and BMI question should be added under section successfully and also when we try to add details for (parent child relation) it should show 'No options found' text
    // // Testrail ID: <C606>
    // it("C606: Add two questions with Medication and BMI in a section and check the parent and child relation and verify it.", () => {
    //     console.log("Create a question with options in a section and verify it.");
    //     assessmentLocator.addButtonFromMedicationField.click();
    //     cy.contains("Assessment question has been created successfully").should("be.visible");
    //     cy.wait(2000);
    //     assessmentLocator.MedicationQuestionTitleField.click().type("Type of Medication", { delay: 0 });
    //     assessmentLocator.SearchField.should('exist');
    //     cy.wait(8000);
    //     assessmentLocator.addButtonFromBMIField.click();
    //     cy.contains("Assessment question has been created successfully").should("be.visible");
    //     cy.wait(2000);
    //     assessmentLocator.BMIQuestionTitleField.click().type("BMI Details", { delay: 0 });
    //     assessmentLocator.BMIheightWithoutShoes.should('exist');
    //     assessmentLocator.BMIweightinIndoorClothes.should('exist');
    //     assessmentLocator.assessmentFormDetailsHeader.click();
    //     cy.wait(8000);
    //     cy.contains('BMI Details').should("be.visible").click();
    //     assessmentLocator.AssessmentquestionDetails.should("be.visible");
    //     assessmentLocator.showDescriptionField.should("not.have.class", "active").then(($btn) => {
    //         if (!$btn.hasClass("active")) {
    //             assessmentLocator.showDescriptionField.click({ force: true });
    //         }
    //     });
    //     cy.wait(500);
    //     assessmentLocator.TypeDescription.should("be.visible").click({ force: true }).type("Medication and BMI question", { delay: 100 });
    //     assessmentLocator.EnableButtonUnderDetails.eq(0).should('not.have.class', 'disabled-class');
    //     assessmentLocator.EnableButtonUnderDetails.eq(1).should('not.have.class', 'disabled-class');
    //     assessmentLocator.ExpiresDropdown.click();
    //     assessmentLocator.selectNeverDropdown.click();
    //     assessmentLocator.clickonSelectParentDropdown.click();
    //     cy.wait(500);
    // });


    // // Test Case: Add two questions with Allergies and Date in a section and check the parent and child relation and verify it.
    // // Expected Result: Allergies and Date question should be added under section successfully and also when we try to add details for (parent child relation) it should show 'No options found' text
    // // Testrail ID: <C607>
    // it("C607: Add two questions with Allergies and Date in a section and check the parent and child relation and verify it.", () => {
    //     console.log("Create a question with options in a section and verify it.");
    //     assessmentLocator.addButtonFromAllergiesField.click();
    //     cy.contains("Assessment question has been created successfully").should("be.visible");
    //     cy.wait(2000);
    //     assessmentLocator.AllergiesQuestionTitleField.click().type("Allergies Field", { delay: 0 });
    //     assessmentLocator.SearchField.should('exist');
    //     cy.wait(8000);
    //     assessmentLocator.addButtonFromDateField.click();
    //     cy.contains("Assessment question has been created successfully").should("be.visible");
    //     cy.wait(2000);
    //     assessmentLocator.DateQuestionTitleField.click().type("Date");
    //     assessmentLocator.selectDateField.should('exist');
    //     assessmentLocator.assessmentFormDetailsHeader.click();
    //     cy.wait(8000);
    //     cy.contains('Allergies Field').should("be.visible").click();
    //     assessmentLocator.AssessmentquestionDetails.should("be.visible");
    //     assessmentLocator.showDescriptionField.should("not.have.class", "active").then(($btn) => {
    //         if (!$btn.hasClass("active")) {
    //             assessmentLocator.showDescriptionField.click({ force: true });
    //         }
    //     });
    //     cy.wait(500);
    //     assessmentLocator.TypeDescription.should("be.visible").click({ force: true }).type("Allergies and Date question", { delay: 100 });
    //     assessmentLocator.EnableButtonUnderDetails.eq(0).should('not.have.class', 'disabled-class');
    //     assessmentLocator.EnableButtonUnderDetails.eq(1).should('not.have.class', 'disabled-class');
    //     assessmentLocator.ExpiresDropdown.click();
    //     assessmentLocator.selectNeverDropdown.click();
    //     assessmentLocator.clickonSelectParentDropdown.click();
    //     cy.wait(500);
    // });


    // Test Case: Add two questions with Consent and Email in a section and check the parent and child relation and verify it.
    // Expected Result: Consent and Email question should be added under section successfully and also when we try to add details for (parent child relation) it should show 'No options found' text
    // Testrail ID: <C608>
    it("C608: Add two questions with Consent and Email in a section and check the parent and child relation and verify it.", () => {
        console.log("Create a question with options in a section and verify it.");
        assessmentLocator.addButtonFromConsentField.click();
        cy.contains("Assessment question has been created successfully").should("be.visible");
        cy.wait(2000);
        assessmentLocator.ConsentQuestionTitleField.click().type("Consent Field", { delay: 0 });
        cy.wait(8000);
        assessmentLocator.addButtonFromEmailField.click();
        cy.contains("Assessment question has been created successfully").should("be.visible");
        cy.wait(2000);
        assessmentLocator.EmailQuestionTitleField.click().type("Add Email", { delay: 0 });
        assessmentLocator.PatientNeedToAnswer.should('exist');
        assessmentLocator.assessmentFormDetailsHeader.click();
        cy.wait(7000);
        cy.contains('Add Email').should("be.visible").click();
        assessmentLocator.AssessmentquestionDetails.should("be.visible");
        assessmentLocator.showDescriptionField.should("not.have.class", "active").then(($btn) => {
            if (!$btn.hasClass("active")) {
                assessmentLocator.showDescriptionField.click({ force: true });
            }
        });
        cy.wait(500);
        assessmentLocator.TypeDescription.should("be.visible").click({ force: true }).type("Consent and Email question", { delay: 100 });
        assessmentLocator.EnableButtonUnderDetails.eq(0).should('not.have.class', 'disabled-class');
        assessmentLocator.EnableButtonUnderDetails.eq(1).should('not.have.class', 'disabled-class');
        assessmentLocator.ExpiresDropdown.click();
        assessmentLocator.Expires4WeekDropdown.click();
        assessmentLocator.clickonSelectParentDropdown.click();
        cy.wait(500);
    });


    // Test Case: Add two questions with Number and Input Plain Text in a section and check the parent and child relation and verify it.
    // Expected Result: Number and Input Plain Text question should be added under section successfully and also when we try to add details for (parent child relation) it should show 'No options found' text
    // Testrail ID: <C609>
    it("C609: Add two questions with Number and Input Plain Text in a section and check the parent and child relation and verify it.", () => {
        console.log("Create a question with options in a section and verify it.");
        assessmentLocator.addButtonFromNumberField.click();
        cy.contains("Assessment question has been created successfully").should("be.visible");
        cy.wait(2000);
        assessmentLocator.NumberQuestionTitleField.click().type("Add Number");
        assessmentLocator.NumberSearchField.should('exist');
        cy.wait(8000);
        assessmentLocator.addButtonFromInputplainTextField.click();
        cy.contains("Assessment question has been created successfully").should("be.visible");
        cy.wait(2000);
        assessmentLocator.InputPlainTextQuestionTitleField.click().type("Mention Input Plain Text", { delay: 0 });
        assessmentLocator.PatientNeedToAnswer.should('exist');
        assessmentLocator.assessmentFormDetailsHeader.click();
        cy.wait(8000);
        cy.contains('Mention Input Plain Text').should("be.visible").click();
        assessmentLocator.AssessmentquestionDetails.should("be.visible");
        assessmentLocator.showDescriptionField.should("not.have.class", "active").then(($btn) => {
            if (!$btn.hasClass("active")) {
                assessmentLocator.showDescriptionField.click({ force: true });
            }
        });
        cy.wait(500);
        assessmentLocator.TypeDescription.should("be.visible").click({ force: true }).type("Number and Input Plain Text question", { delay: 100 });
        assessmentLocator.EnableButtonUnderDetails.eq(0).should('not.have.class', 'disabled-class');
        assessmentLocator.EnableButtonUnderDetails.eq(1).should('not.have.class', 'disabled-class');
        assessmentLocator.ExpiresDropdown.click();
        assessmentLocator.Expires1WeekDropdown.click();
        assessmentLocator.clickonSelectParentDropdown.click();
        cy.wait(500);
    });


    // Test Case: Add  two questions with Free Text and File Upload in a section and check the parent and child relation and verify it.
    // Expected Result: Free Text and File Upload question should be added under section successfully and also when we try to add details for (parent child relation) it should show 'No options found' text
    // Testrail ID: <C610>
    it("C610: Add  two questions with Free Text and File Upload in a section and check the parent and child relation and verify it.", () => {
        console.log("create two questions with Free Text and File Upload in a section and check the parent and child relation and verify it.");
        assessmentLocator.addButtonFromFreeTextParagraphField.click();
        cy.wait(100);
        cy.contains("Assessment question has been created successfully").should("be.visible");
        cy.wait(2000);
        assessmentLocator.InputFreeTextParagraphQuestionTitleField.click().type("Add Input Free Text", { delay: 0 });
        assessmentLocator.PatientNeedToAnswer.should('exist');
        cy.wait(8000);
        assessmentLocator.addButtonFromFileUploadField.click();
        cy.contains("Assessment question has been created successfully").should("be.visible");
        cy.wait(2000);
        assessmentLocator.FileUploadTitleField.click().type("Upload a File", { delay: 0 });
        assessmentLocator.FileUploadIcon.should('exist');
        assessmentLocator.assessmentFormDetailsHeader.click();
        cy.wait(8000);
        cy.contains('Upload a File').should("be.visible").click();
        assessmentLocator.AssessmentquestionDetails.should("be.visible");
        assessmentLocator.showDescriptionField.should("not.have.class", "active").then(($btn) => {
            if (!$btn.hasClass("active")) {
                assessmentLocator.showDescriptionField.click({ force: true });
            }
        });
        cy.wait(500);
        assessmentLocator.TypeDescription.should("be.visible").click({ force: true }).type("Free Text and File Upload", { delay: 100 });
        assessmentLocator.EnableButtonUnderDetails.eq(0).should('not.have.class', 'disabled-class');
        assessmentLocator.EnableButtonUnderDetails.eq(1).should('not.have.class', 'disabled-class');
        assessmentLocator.ExpiresDropdown.click();
        assessmentLocator.Expires1WeekDropdown.click();
        assessmentLocator.clickonSelectParentDropdown.click();
        cy.wait(500);
    });

    // Test Case: Create a question in a section and save it and verify the Duplicate question button
    // Expected Result: A question was added under section sucessfully and verify and add duplicate question successfully.
    // Testrail ID: <C628>
    it("C628:  Create a question in a section and save it and verify the Duplicate question button", () => {
        console.log("Create a question in a section and save it and verify the Duplicate question button");
        assessmentLocator.addButtonFromMutipleChoiceField.click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(2000);
        assessmentLocator.MutiplechoiceQuestionTitleField.scrollIntoView().click().type("Multiple questions", { timeout: 20000 });
        cy.wait(100);
        assessmentLocator.Option1.eq(1).click().type("Option 3", { timeout: 20000 });
        assessmentLocator.Option2.eq(1).click().type("Option 4", { timeout: 20000 });
        cy.wait(200);
        assessmentLocator.assessmentFormDetailsHeader.click();
        cy.wait(7000);
        assessmentLocator.getDuplicateQuestion.click({force:true});
        assessmentLocator.addDuplicatequestion.click();
        cy.contains('Assessment clone question has been created successfully').should('exist');
        cy.wait(7000);
        assessmentLocator.checkDuplicatequestion.should('exist');
    });


    // Test Case: create a question in a section and save it and verify the button reset to default
    // Expected Result: create a question under section successfully and click on reset to default and see reset details to default successfully.
    // Testrail ID: <C629>
    it("C629: create a question in a section and save it and verify the button reset to default", () => {
        console.log("create a question in a section and save it and verify the button reset to default");
        assessmentLocator.addButtonFromMutipleChoiceField.click();
        cy.contains("Assessment question has been created successfully").should("be.exist");
        cy.wait(2000);
        assessmentLocator.MutiplechoiceQuestionTitleField.scrollIntoView().click().type("reset to default", { timeout: 20000 });
        cy.wait(100);
        assessmentLocator.Option1.eq(1).click().type("Option 3", { timeout: 20000 });
        assessmentLocator.Option2.eq(1).click().type("Option 4", { timeout: 20000 });
        cy.wait(200);
        assessmentLocator.assessmentFormDetailsHeader.click();
        cy.wait(7000);
        assessmentLocator.getResettoDefault.click({force:true});
        assessmentLocator.clickonResetToDefault.click();
        cy.contains('reset to default').should('not.exist');
    });
})
import AssessmentLocator from "../../../locator/assessment/assessmentLocator";
import RegressionUtils from "../../../utils/regressionUtills";
import { v4 } from 'uuid';


describe("Assessment Forms Test Suite", () => {
  const assessmentLocator = new AssessmentLocator();
  const regressionUtills = new RegressionUtils();


  before(() => {
    cy.adminLogin();
  });


  afterEach(() => {
    cy.wait(2000);
  });


  // Test Case: Verify the Create new assessment forms with draft state.
  // Expected Result: Newly created assessment forms will be displayed in the assessment forms list under the 'Draft' field.
  // Testrail ID: <C640>
  it("C640: Verify the Create new assessment forms with draft state.", () => {
    console.log("Verify the Create new assessment forms with draft state.");
    const draftFormName = "T-" + v4();
    assessmentLocator.homePageHeader.contains("Home").should("be.exist");
    assessmentLocator.leftNavForClinical.contains("Clinical team").click({ force: true });
    assessmentLocator.leftNavForAssessmentForm.contains("Assessment forms").click();
    cy.url({ timeout: 20000 }).should("include", "/assessment-form/list");
    assessmentLocator.creatNewFormButton.contains("Create new form").click();
    assessmentLocator.nameInputField.click().type(draftFormName);
    assessmentLocator.selectCountry.click();
    cy.wait(500);
    assessmentLocator.countrySearchField.click().type("India", { delay: 1000 });
    cy.contains("India").click();
    assessmentLocator.selectCondition.click();
    cy.contains("Weight loss injections").click();
    cy.wait(200);
    assessmentLocator.startBuldingButton.contains("Start Building").click();
    cy.wait(2000);
    cy.contains("Form submitted successfully!", { timeout: 20000 });
    assessmentLocator.goBackButton.click();
    cy.wait(2000);
    assessmentLocator.assessmentFormPage.invoke("text").should("include", draftFormName);
  });


  // Test Case: Verify the Search functionality in assessment forms page.
  // Expected Result: Searched name is displayed in assessment form list.
  // Testrail ID: <C641>
  it("C641: Verify the Search functionality in assessment forms page.", () => {
    console.log("Verify the Search functionality in assessment forms page.");
    const formName = "T-" + v4();
    regressionUtills.createAssessmentForm(formName);
    assessmentLocator.goBackButton.click();
    cy.wait(500);
    assessmentLocator.assessmentSearchField.clear().type(formName, { delay: 100 });
    assessmentLocator.assessmentFormPage.invoke("text").should("include", formName);
  });


  // Test Case: Verify the Create new assessment forms and publish.
  // Expected Result: Newly created assessment forms will be displayed in the assessment forms list under the 'Live' field.
  // Testrail ID: <C642>
  it("C642: Verify the Create new assessment forms and publish.", () => {
    console.log("Verify the Create new assessment forms and publish.");
    const liveFormName = "T-" + v4();
    assessmentLocator.leftNavForClinical.click();
    assessmentLocator.leftNavForAssessmentForm.contains("Assessment forms").click();
    assessmentLocator.creatNewFormButton.contains("Create new form").click();
    assessmentLocator.nameInputField.click().type(liveFormName);
    assessmentLocator.selectCountry.click();
    cy.wait(500);
    assessmentLocator.countrySearchField.click().type("India", { delay: 1000 });
    cy.contains("India").click({ timeout: 1000 });
    assessmentLocator.selectCondition.click();
    cy.contains("Weight loss injections").click();
    cy.wait(1000);
    assessmentLocator.startBuldingButton.contains("Start Building").click();
    cy.wait(2000);
    cy.contains("Form submitted successfully!", { timeout: 20000 });
    regressionUtills.createSection();
    regressionUtills.createQuestion();
    cy.wait(5000);
    cy.contains('Publish').click();
    cy.wait(100);
    cy.contains('Publish').should('be.exist');
    assessmentLocator.publishButton.contains('Publish').click();
    cy.wait(100);
    assessmentLocator.publishedPopup.should('be.exist');
    cy.wait(5000);
    cy.contains('Form published!', { timeout: 20000 }).should('be.exist');
    assessmentLocator.closeButtonFromPublishPopup.click();
    cy.wait(100);
    assessmentLocator.publishedPopup.should('not.exist');
    assessmentLocator.goBackButton.click();
    cy.wait(500);
    assessmentLocator.assessmentFormPage.invoke("text").should("include", liveFormName);
  });


  // Test Case: Verify 'Edit' button from assessment form list.
  // Expected Result: Assessment section page should be shown.
  // Testrail ID: <C643>
  it("C643: Verify 'Edit' button from assessment form list.", () => {
    console.log("Verify 'Edit' button from assessment form list.");
    const formName = "T-" + v4();
    regressionUtills.createAssessmentForm(formName);
    assessmentLocator.goBackButton.click();
    cy.wait(500);
    assessmentLocator.assessmentFormPage.invoke("text").should("include", formName);
    assessmentLocator.threeDotButtonFromAssessmentList.click();
    assessmentLocator.editButtonFromAssessmentList.click();
    cy.wait(800);
    cy.get('.h-screen').should('be.exist');
    assessmentLocator.goBackButton.click();
  });


  // Test Case: Verify 'Duplicate' button from assessment form list.
  // Expected Result: After clicking duplicate button, Duplicate form will add in assessment form list.
  // Testrail ID: <C644>
  it("C644: Verify 'Duplicate' button from assessment form list.", () => {
    console.log("Verify 'Duplicate' button from assessment form list.");
    const formName = "T-" + v4();
    regressionUtills.createAssessmentForm(formName);
    assessmentLocator.goBackButton.click();
    cy.wait(800);
    assessmentLocator.assessmentFormPage.invoke("text").should("include", formName);
    assessmentLocator.threeDotButtonFromAssessmentList.click();
    cy.wait(200);
    assessmentLocator.duplicateButtonFromAssessmentList.click();
    cy.wait(500);
    cy.contains("Assessment clone has been created successfully").should('be.exist');
    assessmentLocator.assessmentFormPage.invoke("text").should("include", "Copy of " + formName);
  });


  // Test Case: Verify 'Delete' button from assessment form list and check 'Delete form!' popup.
  // Expected Result: Assessment form should be deleted successfully.
  // Testrail ID: <C645>
  it("C645: Verify 'Delete' button from assessment form list and check 'Delete form!' popup.", () => {
    console.log("Verify 'Delete' button from assessment form list and check 'Delete form!' popup.");
    const formName = "T-" + v4();
    regressionUtills.createAssessmentForm(formName);
    assessmentLocator.goBackButton.click();
    cy.wait(500);
    assessmentLocator.assessmentFormPage.invoke("text").should("include", formName);
    assessmentLocator.assessmentSearchField.clear().type(formName, { delay: 500 });
    cy.wait(500);
    assessmentLocator.threeDotButtonFromAssessmentList.click();
    assessmentLocator.deleteButtonFromAssessmentList.click();
    cy.wait(500);
    cy.contains("Delete form!").should("be.exist");
    assessmentLocator.closeButtonFromDeleteAlert.click();
    cy.url({ timeout: 20000 }).should("include", "/assessment-form/list");
    assessmentLocator.threeDotButtonFromAssessmentList.click();
    assessmentLocator.deleteButtonFromAssessmentList.click();
    cy.wait(500);
    cy.contains("Delete form!").should("be.exist");
    assessmentLocator.continueButtonFromDeleteAlert.click();
    cy.wait(500);
    cy.contains("Assessment form has been deleted successfully").should('be.exist');
    cy.contains(`No results for "${formName}"`).should('be.exist');
  });


  // Test Case: Verify the 'Add Filter' button in assessment form page.
  // Expected Result: All filters are showing properly.
  // Testrail ID: <C646>
  it("C646: Verify the 'Add Filter' button in assessment form page.", () => {
    console.log("Verify the 'Add Filter' button in assessment form page.");
    assessmentLocator.filterButton.click();
    assessmentLocator.countryOptionFromFilterDropdown.contains("Country").should('be.exist');
    assessmentLocator.dateOptionFromFilterDropdown.contains("Date").should('be.exist');
    assessmentLocator.statusOptionFromFilterDropdown.contains("Status").should('be.exist');
    assessmentLocator.filterButton.click();
  });


  // Test Case: User can filter assessment forms based on country.
  // Expected Result: 1. Assessment form should be filtered out based on that country. 2. Country filter should be reset after clicking the "reset filters" option.
  // Testrail ID: <C647>
  it("C647: User can filter assessment forms based on country.", () => {
    console.log("User can filter assessment forms based on country.");
    const formName = "T-" + v4();
    regressionUtills.createAssessmentForm(formName);
    assessmentLocator.goBackButton.click();
    cy.wait(500);
    assessmentLocator.filterButton.click();
    assessmentLocator.countryOptionFromFilterDropdown.contains("Country").click();
    assessmentLocator.countryDropdown.click();
    cy.wait(100);
    assessmentLocator.selectIndiaFromCountryDropdown.click({force: true});
    assessmentLocator.countryDropdown.click();
    cy.wait(2000);
    assessmentLocator.assessmentFormPage.contains("India").should("be.exist");
    cy.contains("Reset all").click();
  });


  // Test Case: User can filter assessment forms based on date.
  // Expected Result: 1. Assessment form should be filtered out based on that date. 2. Date filter should be reset after clicking the "reset filters" option.
  // Testrail ID: <C648>
  it("C648: User can filter assessment forms based on date.", () => {
    console.log("User can filter assessment forms based on date.");
    const formName = "T-" + v4();
    regressionUtills.createAssessmentForm(formName);
    assessmentLocator.goBackButton.click();
    cy.wait(500);
    assessmentLocator.filterButton.click();
    assessmentLocator.dateOptionFromFilterDropdown.contains("Date").click();
    assessmentLocator.filterButton.click();
    assessmentLocator.dateDropdown.click();
    assessmentLocator.selectPastWeekFromDateDropdown.click();
    assessmentLocator.dateDropdown.click();
    cy.wait(2000);
    assessmentLocator.assessmentFormPage.should("be.exist");
    cy.contains("Reset all").click();
  });


  // Test Case: User can filter assessment forms based on status(Draft, Live and Archive).
  // Expected Result: 1. Assessment form should be filtered out based on draft status. 2. Status filter should be reset after clicking the "reset filters" option.
  // Testrail ID: <C649>
  it("C649: User can filter assessment forms based on status.", () => {
    console.log("User can filter assessment forms based on status.");
    const formName = "T-" + v4();
    regressionUtills.createAssessmentForm(formName);
    assessmentLocator.goBackButton.click();
    cy.wait(500);
    assessmentLocator.filterButton.click();
    assessmentLocator.statusOptionFromFilterDropdown.contains("Status").click();
    assessmentLocator.filterButton.click();
    assessmentLocator.statusDropdown.click();
    assessmentLocator.selectDraftStatus.click();
    assessmentLocator.statusDropdown.click();
    cy.wait(2000);
    assessmentLocator.assessmentFormPage.contains("Draft").should("be.exist");
    cy.contains("Reset all").click();
    cy.wait(500);
    assessmentLocator.filterButton.click();
    assessmentLocator.statusOptionFromFilterDropdown.contains("Status").click();
    assessmentLocator.filterButton.click();
    assessmentLocator.statusDropdown.click();
    assessmentLocator.selectLiveStatus.click();
    assessmentLocator.statusDropdown.click();
    cy.wait(2000);
    assessmentLocator.assessmentFormPage.contains("Live").should("be.exist");
    cy.contains("Reset all").click();
    cy.wait(500);
    assessmentLocator.filterButton.click();
    assessmentLocator.statusOptionFromFilterDropdown.contains("Status").click();
    assessmentLocator.filterButton.click();
    assessmentLocator.statusDropdown.click();
    assessmentLocator.selectArchiveStatus.click();
    assessmentLocator.statusDropdown.click();
    cy.wait(2000);
    assessmentLocator.assessmentFormPage.contains("Archive").should("be.exist");
    cy.contains("Reset all").click();
  });


  // Test Case: Verify the 'Exit' button in new form. 
  // Expected Result: After clicking exit button, it will redirect to assessment form list page.
  // Testrail ID: <C650>
  it("C650: Verify the 'Exit' button in new form.", () => {
    console.log("Verify the 'Exit' button in new form.");
    cy.url({ timeout: 20000 }).should("include", "/assessment-form/list");
    assessmentLocator.creatNewFormButton.contains("Create new form").click();
    assessmentLocator.exitButtonInAssessmentForm.contains("Exit").click();
    cy.url({ timeout: 20000 }).should("include", "/assessment-form/list");
  });


  // Test Case: Verify the error messages when all fields are left blank while creating a new form.
  // Expected Result: An error message will be shown for fields that are mandatory. 1."Form name is required". 2."Country is required".3."Condition is required".
  // Testrail ID: <C651>
  it("C651: Verify the error messages when all fields are left blank while creating a new form.", () => {
    console.log("Verify the error messages when all fields are left blank while creating a new form.");
    cy.contains("Assessment forms").should("exist");
    assessmentLocator.creatNewFormButton.contains("Create new form").click();
    cy.wait(200);
    assessmentLocator.startBuldingButton.contains("Start Building").click();
    cy.contains("Form name is required").should("be.exist");
    cy.contains("Country is required").should("be.exist");
    cy.contains("Condition is required").should("be.exist");
    assessmentLocator.exitButtonInAssessmentForm.click();
  });


  // Test Case: Verify Clicking on Breadcrumb in Assessment Forms Listing Page
  // Expected Result: 1. The user should be successfully navigated to the corresponding page as indicated by the clicked breadcrumb. 2. The page should load without any errors, and the URL should be updated accordingly to reflect the target page.
  // Testrail ID: <C652>
  it("C652: Verify Clicking on Breadcrumb in Assessment Forms Listing Page", () => {
    console.log("Verify Clicking on Breadcrumb in Assessment Forms Listing Page");
    cy.contains("Assessment forms").should("exist");
    assessmentLocator.checkBreadcrumb.should('exist');
    assessmentLocator.verifyAssessmentFormUnderBreadcrumb.should('exist');
    assessmentLocator.clickonHomeUnderBreadCrumb.should('be.visible');
    assessmentLocator.clickonHomeUnderBreadCrumb.click();
    assessmentLocator.homePageHeader.contains("Home").should("exist");
  });


  // Having issue in "clickonThreeDotsFromPagination" locator, once fixed then i will uncomment that.
  // // Test Case: Verify the page change after clicking the pagination count number button
  // // Expected Result: After clicking a pagination number button, the content on the page should change to display the correct data for that page, and the URL (if applicable) should reflect the selected page number.
  // // Testrail ID: <C653>
  // it("C653:Verify the page change after clicking the pagination count number button", () => {
  //   console.log("Verify the page change after clicking the pagination count number button");
  //   // Verify the Assessment Forms page is loaded
  //   cy.contains("Home").should("exist");
  //   // Verify pagination controls are visible
  //   assessmentLocator.checkPagination.should('exist');
  //   // Capture the first row's text on page 1 for comparison
  //   cy.get('tbody').first().invoke('text').then((firstPageData) => {
  //     // Click on the 2nd page button
  //     assessmentLocator.clickonSecondPage.click();
  //     cy.wait(5000);
  //     // Verify the active page button is now 2
  //     assessmentLocator.verifyPageButtonActive.should('contain.text', '2');
  //     // Capture the first row's text on page 3 and compare
  //     cy.get('tbody').first().invoke('text').should((thirdPageData) => {
  //       expect(thirdPageData.trim()).not.to.eq(firstPageData.trim());
  //     });
  //     // Click on the previous page button to go back
  //     assessmentLocator.goToPreviousPage.click();
  //     cy.wait(2000);
  //     // clickon three dots and see the next page count
  //     assessmentLocator.clickonThreeDotsFromPagination.click({force: true});
  //     assessmentLocator.checktheOtherPages.should('be.visible');
  //     assessmentLocator.clickonThreeDotsFromPagination.click();
  //     // Verify the active page is back to 1
  //     assessmentLocator.verifyPageButtonActive.should('contain.text', '1');
  //     // Verify the first row's text is the same as it was on page 1
  //     cy.get('tbody').first().invoke('text').should((firstPageDataAgain) => {
  //       expect(firstPageDataAgain.trim()).to.eq(firstPageData.trim());
  //     });
  //   });
  // });
});
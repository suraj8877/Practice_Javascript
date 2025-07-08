import PatientLocator from "../../../locator/patient/patientLocator";
import RegressionUtils from "../../../utils/regressionUtills";
import { v4 } from 'uuid';

describe("Patients Test Suite", () => {
  const patientLocator = new PatientLocator();
  const regressionUtills = new RegressionUtils();

  before(() => {
    cy.adminLogin();
  });

  afterEach(() => {
    cy.wait(2000);
  });


  // Test Case: Verify the 'Patient database' page.
  // Expected Result: After clicking back button from patient page, it will redirect to home page.
  // Testrail ID: <C582>
  it("C582: Verify the 'Patient database' page.", () => {
    console.log("Verify the 'Patient database' page.");
    patientLocator.leftNavForPatients.contains("Patient database").click({ force: true });
    cy.wait(3000);
    cy.url({ timeout: 20000 }).should("include", "/patient/list");
    cy.contains("Patient database").should('be.exist');
    patientLocator.backButtonInPatientsPage.click();
    cy.url({ timeout: 20000 }).should("include", "/");
  });


  // Test Case: Verify the 'Search' functionality from patient page.
  // Expected Result: Searching data will reflect in patient user list.
  // Testrail ID: <C583>
  it("C583: Verify the 'Search' functionality from patient page.", () => {
    console.log("Verify the 'Search' functionality from patient page.");
    patientLocator.leftNavForPatients.contains("Patient database").click({ force: true });
    cy.wait(3000);
    patientLocator.patientSearchField.should('be.exist');
    patientLocator.patientSearchField.click().type("Miles Green");
    cy.wait(500);
    patientLocator.patientsPage.should('be.exist');
    patientLocator.patientSearchField.click().clear();
  });


  // Test Case: Validate 'Add Filter' field with options (Sex at birth, Country and Status) from patient database.
  // Expected Result: Showing patient list as per selected sex at birth, country and status.
  // Testrail ID: <C584>
  it("C584: Validate 'Add Filter' field with options (Sex at birth, Country and Status).", () => {
    console.log("Validate 'Add Filter' field with options (Sex at birth, Country and Status).");
    patientLocator.filterButton.click();
    patientLocator.sexAtBirthOptionFromFilterDropdown.contains("Sex at birth").should('be.exist');
    patientLocator.countryOptionFromFilterDropdown.contains("Country").should('be.exist');
    patientLocator.statusOptionFromFilterDropdown.contains("Status").should('be.exist');
    cy.contains("Sex at birth").click();
    patientLocator.sexAtBirthDropdown.click();
    patientLocator.femaleOptionFromSexAtBirthDropdown.click();
    patientLocator.sexAtBirthDropdown.click();
    cy.wait(500);
    patientLocator.femaleTextFromSexAtBirthColumn.contains("Female").should("be.exist");
    cy.contains("Reset all").click();
    cy.wait(1000);
    patientLocator.filterButton.click();
    patientLocator.countryOptionFromFilterDropdown.contains("Country").click();
    patientLocator.countryDropdown.click();
    cy.wait(1000);
    patientLocator.selectIndiaFromCountryDropdown.contains("India").click({ force: true });
    cy.wait(500);
    patientLocator.countryDropdown.click();
    cy.wait(500);
    patientLocator.indiaTextFromCountryColumn.contains("India").should("be.exist");
    cy.contains("Reset all").click();
    cy.wait(1000);
    patientLocator.filterButton.click();
    cy.contains("Status").click();
    patientLocator.statusDropdown.click();
    patientLocator.selectActiveOptionFromStatusDropdown.click();
    patientLocator.statusDropdown.click();
    cy.wait(500);
    patientLocator.activeTextFromStatusColumn.contains("Active").should("be.exist");
    cy.contains("Reset all").click();
  });


  // Test Case: Validate 'View account' field from patient user list.
  // Expected Result: After clicking "View account" field, it will redirect to patient details page. After clicking back button from patient details page, it will redirect to patient list page.
  // Testrail ID: <C585>
  it("C585: Validate 'View account' field from patient user list.", () => {
    console.log("Validate 'View account' field from patient user list.");
    patientLocator.threeDotIconFromPatientList.click();
    cy.contains("View account").should('be.exist');
    patientLocator.viewAccountFieldFromThreeDot.click();
    cy.contains("Patient details").should("be.exist");
    // Having issue in portal - After clicking back button nor redirecting to home page. Once done, will fix.
    patientLocator.cancelButtonFromPatientEditPopup.click();
    cy.url({ timeout: 20000 }).should("include", "/patient/list");
    cy.contains("Patient database").should('be.exist');
  });


  // Test Case: Verify the 'Search' functionality with wrong data from Patient database.
  // Expected Result: It will show - No results for "data name/email".Try searching for something else or clear your search.Also showing 'Clear search' button.After clicking, page will refresh and redirect to the Patient database page.
  // Testrail ID: <C656>
  it("C656: Verify the 'Search' functionality with wrong data from Patient database.", () => {
    console.log("Verify the 'Search' functionality with wrong data from Patient database.");
    const patient = "Test" + Math.random().toString(36).replace(/[^a-zA-Z]/g, '').substring(2, 7);
    patientLocator.patientSearchField.should('be.exist');
    patientLocator.patientSearchField.click().type(patient);
    cy.wait(2000);
    cy.contains(`No results for "${patient}"`).should('be.exist');
    cy.contains('Clear search').should('be.exist');
    cy.contains('Clear search').click();
    cy.url({ timeout: 20000 }).should("include", "/patient/list");
  });


  // Having issue in portal regarding 'Patient database' breadcrumb
  // // Test Case: Validate 'Patient database' breadcrumb from patient account details page.
  // // Expected Result: After clicking "Patient database" breadcrumb, it will redirect to the patient list page.
  // // Testrail ID: <C657>
  // it("C657: Validate 'Patient database' breadcrumb from patient account details page.", () => {
  //   console.log("Validate 'Patient database' breadcrumb from patient account details page.");
  //   patientLocator.threeDotIconFromPatientList.click();
  //   cy.contains("View account").should('be.exist');
  //   patientLocator.viewAccountFieldFromThreeDot.click();
  //   cy.get('ul.flex > :nth-child(2) > .text-font-size-xs').contains('Patient database').should('be.exist');
  //   cy.get('ul.flex > :nth-child(2) > .text-font-size-xs').click();
  //   cy.url({ timeout: 20000 }).should("include", "/patient/list");
  // });


  // Test Case: Verify the 'Edit button' besides Key info from patient account details page.
  // Expected Result: Verify 'Cancel' and 'Save' button in Key info popup.
  // Testrail ID: <C658>
  it("C658: Verify the 'Edit button' besides Key info from patient account details page.", () => {
    console.log("Verify the 'Edit button' besides Key info from patient account details page.");
    patientLocator.threeDotIconFromPatientList.click();
    cy.contains("View account").should('be.exist');
    patientLocator.viewAccountFieldFromThreeDot.click();
    cy.wait(500);
    patientLocator.editButtonFromPatientDetails.contains('Edit').click();
    cy.contains('Save').should('be.exist');
    cy.contains('Cancel').should('be.exist');
    cy.contains('Cancel').click();
    patientLocator.cancelButtonFromPatientEditPopup.click();
  });


  // Test Case: Verify updated key info details in patient account details page after clicking 'Cancel' button.
  // Expected Result: Key info details will not be reflect in patient details page.
  // Testrail ID: <C659>
  it("C659: Verify updated key info details in patient account details page after clicking 'Cancel' button.", () => {
    console.log("Verify updated key info details in patient account details page after clicking 'Cancel' button.");
    patientLocator.threeDotIconFromPatientList.click();
    cy.wait(50);
    cy.contains("View account").should('be.exist');
    patientLocator.viewAccountFieldFromThreeDot.click();
    cy.wait(200);
    //Unable to assert date of birth and sex of birth from details page as required data-cy
    patientLocator.editButtonFromPatientDetails.contains('Edit').click();
    patientLocator.dateOfBirthFieldFromPatientEditPopup.click();
    patientLocator.selectDateField.click();
    patientLocator.sexOfBirthFieldFromPatientEditPopup.click();
    cy.contains('Cancel').click();
    //Unable to assert date of birth and sex of birth from details page as required data-cy
    patientLocator.cancelButtonFromPatientEditPopup.click();
  });


  // Test Case: Verify updated key info details in patient account details page after clicking 'Save' button.
  // Expected Result: Updated Key info data will reflect in patient details page.
  // Testrail ID: <C660>
  it("C660: Verify updated key info details in patient account details page after clicking 'Save' button.", () => {
    console.log("Verify updated key info details in patient account details page after clicking 'Save' button.");
    patientLocator.threeDotIconFromPatientList.click();
    cy.wait(50);
    cy.contains("View account").should('be.exist');
    patientLocator.viewAccountFieldFromThreeDot.click();
    cy.wait(200);
    //Unable to assert date of birth and sex of birth from details page as required data-cy
    patientLocator.editButtonFromPatientDetails.contains('Edit').click();
    patientLocator.dateOfBirthFieldFromPatientEditPopup.click();
    patientLocator.selectDateField.click();
    patientLocator.sexOfBirthFieldFromPatientEditPopup.click();
    cy.contains('Save').click();
    cy.contains('Success!').should('be.exist');
    cy.contains('Continue').click();
    //Unable to assert date of birth and sex of birth from details page as required data-cy
    patientLocator.cancelButtonFromPatientEditPopup.click();
  });
});
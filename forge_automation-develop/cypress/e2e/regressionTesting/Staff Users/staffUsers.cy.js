import StaffLocator from "../../../locator/staff/staffLocator";
import RegressionUtils from "../../../utils/regressionUtills";
import { v4 } from 'uuid';
let inboxId;
let emailAddress;

describe("Staff users Test Suite", () => {
  const staffLocator = new StaffLocator();
  const regressionUtills = new RegressionUtils();


  before(() => {
    cy.adminLogin();
  });


  afterEach(() => {
    cy.wait(2000);
  });


  // Test Case: Verify the staff user page.
  // Expected Result: After clicking back button from staff user page, it will redirect to home page.
  // Testrail ID: <C562>
  it("C562: Verify the staff user page.", () => {
    console.log("Verify the staff user page.");
    staffLocator.leftNavForStaffUsers.contains("Staff users").click({ force: true });
    cy.wait(3000);
    cy.url({ timeout: 20000 }).should("include", "/staff/list");
    cy.contains("Staff users").should('be.exist');
    staffLocator.backButtonInStaffUsersPage.click();
    cy.url({ timeout: 20000 }).should("include", "/");
  });


  // Test Case: Verify the cancel button from 'Add staff user' popup.
  // Expected Result: After clicking the cancel button, it will redirect to the staff user list page.
  // Testrail ID: <C557>
  it("C557: Verify the cancel button from 'Add staff user' popup.", () => {
    console.log("Verify the cancel button from 'Add staff user' popup.");
    staffLocator.leftNavForStaffUsers.contains("Staff users").click({ force: true });
    cy.wait(1000);
    staffLocator.addStaffUserButton.contains("Add staff user").click();
    cy.wait(100);
    cy.contains("Cancel").click();
    cy.url({ timeout: 20000 }).should("include", "/staff/list");
  });


  // Test Case: Verify the cross icon from 'Add staff user' popup.
  // Expected Result: After clicking the cross icon, it will redirect to the staff user list page.
  // Testrail ID: <C558>
  it("C558: Verify the cross icon from 'Add staff user' popup.", () => {
    console.log("Verify the cross icon from 'Add staff user' popup.");
    staffLocator.addStaffUserButton.contains("Add staff user").click();
    cy.wait(100);
    staffLocator.staffUserPopupCrossIcon.click();
    cy.wait(200);
    cy.url({ timeout: 20000 }).should("include", "/staff/list");
  });


  // Test Case: Verify the error message in 'Add staff user' popup without entering department and role.
  // Expected Result: Error messages should be displayed -1. Department is required. 2. Role is required.
  // Testrail ID: <C563>
  it("C563: Verify the error message in 'Add staff user' popup without entering department and role.", () => {
    console.log("Verify the error message in 'Add staff user' popup without entering department and role.");
    staffLocator.addStaffUserButton.contains("Add staff user").click();
    cy.wait(100);
    cy.contains("Continue").click();
    cy.wait(500);
    cy.contains("Department is required").should("be.exist");
    cy.contains("Role is required").should("be.exist");
    cy.contains("Cancel").click();
  });


  // Test Case: Verify the cancel button from 'Add staff member' page.
  // Expected Result: After clicking the cancel button, it will redirect to the staff user list page.
  // Testrail ID: <C564>
  it("C564: Verify the cancel button from 'Add staff member' page.", () => {
    console.log("Verify the cancel button from 'Add staff member' page.");
    staffLocator.addStaffUserButton.contains("Add staff user").click();
    cy.wait(100);
    staffLocator.staffDepartmentField.click();
    staffLocator.prescriberFromStaffDepartmentDropdown.click();
    cy.wait(500);
    cy.contains("Select role...").click();
    staffLocator.prescriberFromStaffRoleDropdown.click();
    cy.contains("Continue").click();
    cy.wait(500);
    cy.contains("Cancel").click();
    cy.url({ timeout: 20000 }).should("include", "/staff/list");
  });


  // Test Case: Verify the error message in 'Add staff member' page without entering any data.
  // Expected Result: Error messages should be displayed - 1. This field cannot be left blank. 2.Please generate a password. This field cannot be left blank.
  // Testrail ID: <C565>
  it("C565: Verify the error message in 'Add staff member' page without entering any data.", () => {
    console.log("Verify the error message in 'Add staff member' page without entering any data.");
    staffLocator.addStaffUserButton.contains("Add staff user").click();
    cy.wait(100);
    staffLocator.staffDepartmentField.click();
    staffLocator.prescriberFromStaffDepartmentDropdown.click();
    cy.wait(500);
    cy.contains("Select role...").click();
    staffLocator.prescriberFromStaffRoleDropdown.click();
    cy.contains("Continue").click();
    cy.wait(500);
    cy.contains("Create user").click();
    cy.contains("This field cannot be left blank").should("be.exist");
    cy.contains("Please generate a password. This field cannot be left blank").should("be.exist");
    cy.contains("Cancel").click();
  });


  // Test Case: Create new staff user with 'Prescriber' role.
  // Expected Result: The newly added user will appear in the Staff User list with prescriber role.
  // Testrail ID: <C556>
  it("C556: Create new staff user with 'Prescriber' role.", () => {
    console.log("Create new staff user with 'Prescriber' role.");
    const staffFirstName = "Staff"
    const staffLastName = "Test" + Math.random().toString(36).replace(/[^a-zA-Z]/g, '').substring(2, 7);
    console.log(staffLastName);
    const staffEmail = "staff" + staffLastName + "@yopmail.com";
    cy.wait(5000);
    staffLocator.addStaffUserButton.contains("Add staff user").click();
    cy.wait(200);
    staffLocator.staffDepartmentField.click();
    staffLocator.prescriberFromStaffDepartmentDropdown.click();
    cy.wait(500);
    cy.contains("Select role...").click();
    staffLocator.prescriberFromStaffRoleDropdown.click();
    cy.contains("Continue").click();
    cy.wait(500);
    staffLocator.staffFirstName.click().type(staffFirstName);
    cy.wait(100);
    staffLocator.staffLastName.click().type(staffLastName);
    staffLocator.staffEmail.click().type(staffEmail);
    staffLocator.generatePasswordButton.click();
    staffLocator.selectCountryField.click();
    staffLocator.selectIndiaFromCountryDropdown.click();
    staffLocator.licenseNumberField.click().type("123");
    staffLocator.licenseExpiryDateField.click();
    staffLocator.selectDate.click();
    // Unable to select checkbox as required data-cy for checkbox only
    staffLocator.uploadSignatureField.click({force: true});
    cy.wait(100);
    staffLocator.uploadSignatureField.selectFile('cypress/fixtures/signature.png');
    cy. wait(1000);
    cy.contains("Create user").click();
    cy.wait(500);
    cy.contains("User created successfully!").should("be.exist");
    cy.contains("Go to staff list").click();
    cy.wait(1000);
    cy.url({ timeout: 20000 }).should("include", "/staff/list");
    staffLocator.staffListPage.invoke("text").should("include", staffFirstName + " " + staffLastName);
  });


  // Test Case: Verify the search functionality from Staff user page.
  // Expected Result: Searching data will reflect in staff user list.
  // Testrail ID: <C559>
  it("C559: Verify the search functionality from Staff user page.", () => {
    console.log("Verify the search functionality from Staff user page.");
    const staffFirstName = "Staff"
    const staffLastName = "Test" + Math.random().toString(36).replace(/[^a-zA-Z]/g, '').substring(2, 7);
    console.log(staffLastName);
    const staffEmail = "staff" + staffLastName + "@yopmail.com";
    regressionUtills.createStaffWithPCT(staffFirstName, staffLastName, staffEmail);
    staffLocator.staffSearchField.click().type(staffFirstName + " " + staffLastName);
    cy.wait(500);
    staffLocator.staffListPage.invoke("text").should("include", staffFirstName + " " + staffLastName);
    staffLocator.staffSearchField.click().clear();
  });


  // Test Case: Validate 'View account' field from staff user list.
  // Expected Result: After clicking "View account" field, it will redirect to staff user page with cancel, delete and save button.
  // Testrail ID: <C561>
  it("C561: Validate 'View account' field from staff user list.", () => {
    console.log("Validate 'View account' field from staff user list.");
    staffLocator.threeDotIconFromStaffList.click();
    cy.contains("View account").should('be.exist');
    staffLocator.viewAccountFieldFromThreeDot.contains("View account").click();
    cy.contains('Save').should('be.exist');
    cy.contains('Cancel').should('be.exist');
    cy.contains('Delete').should('be.exist');
    // Having issue in portal - QA Env: If we click on back button from staff edit page , then it will redirect to staff list page (like patient database). But now redirected to the home page.
    cy.contains('Cancel').click();
  });


  // Test Case: Validate 'Add Filter' field with options(Role, Department and Status).
  // Expected Result: Showing user list as per selected role, department and status.
  // Testrail ID: <C560>
  it("C560: Validate 'Add Filter' field with options(Role, Department and Status).", () => {
    console.log("Validate 'Add Filter' field with options(Role, Department and Status).");
    cy.contains("Add filter").click();
    cy.contains("Role").should("be.exist");
    cy.contains("Department").should("be.exist");
    cy.contains("Status").should("be.exist");
    cy.contains("Role").click();
    cy.wait(100);
    staffLocator.roleDropdown.click();
    cy.wait(100);
    staffLocator.prescriberFromRoleDropdown.click();
    cy.wait(500);
    staffLocator.roleDropdown.click();
    staffLocator.prescriberTextFromRoleColumn.contains("Prescriber").should("be.exist");
    cy.contains("Reset all").click();
    cy.wait(1000);
    cy.contains("Add filter").click();
    cy.contains("Department").click();
    cy.wait(100);
    staffLocator.departmentDropdown.click();
    cy.wait(100);
    staffLocator.prescriberFromDepartmentDropdown.contains("Prescriber").click();
    cy.wait(500);
    staffLocator.departmentDropdown.click();
    cy.wait(100);
    staffLocator.prescriberTextFromDepartmentColumn.contains("Prescriber").should("be.exist");
    cy.contains("Reset all").click();
    cy.wait(2000);
    cy.contains("Add filter").click();
    cy.contains("Status").click();
    cy.wait(100);
    staffLocator.statusDropdown.click();
    cy.wait(100);
    staffLocator.onlineFieldFromStatusDropdown.click();
    cy.wait(500);
    staffLocator.statusDropdown.click();
    staffLocator.onlineTextFromStatusColumn.contains("Online").should("be.exist");
    cy.contains("Reset all").click();
  });


  // Test Case: Create new staff user with 'Pharmacists' role.
  // Expected Result: The newly added user will appear in the Staff User list with pharmacists role.
  // Testrail ID: <C661>
  it("C661: Create new staff user with 'Pharmacists' role.", () => {
    console.log("Create new staff user with 'Pharmacists' role.");
    const staffFirstName = "Staff"
    const staffLastName = "Test" + Math.random().toString(36).replace(/[^a-zA-Z]/g, '').substring(2, 7);
    console.log(staffLastName);
    const staffEmail = "staff" + staffLastName + "@yopmail.com";
    cy.wait(5000);
    staffLocator.addStaffUserButton.contains("Add staff user").click();
    cy.wait(200);
    staffLocator.staffDepartmentField.click();
    staffLocator.pharmacistFromStaffDepartmentDropdown.click();
    cy.wait(500);
    cy.contains("Select role...").click();
    staffLocator.pharmacistFromStaffRoleDropdown.click();
    cy.contains("Continue").click();
    cy.wait(500);
    staffLocator.staffFirstName.click().type(staffFirstName);
    cy.wait(100);
    staffLocator.staffLastName.click().type(staffLastName);
    staffLocator.staffEmail.click().type(staffEmail);
    staffLocator.generatePasswordButton.click();
    staffLocator.selectCountryField.click();
    staffLocator.selectIndiaFromCountryDropdown.click();
    staffLocator.licenseNumberField.click().type("123");
    staffLocator.licenseExpiryDateField.click();
    staffLocator.selectDate.click();
    staffLocator.uploadSignatureField.click({force: true});
    cy.wait(100);
    staffLocator.uploadSignatureField.selectFile('cypress/fixtures/signature.png');
    cy. wait(1000);
    cy.contains("Create user").click();
    cy.wait(500);
    cy.contains("User created successfully!").should("be.exist");
    cy.contains("Go to staff list").click();
    cy.wait(2000);
    cy.url({ timeout: 20000 }).should("include", "/staff/list");
    staffLocator.staffListPage.invoke("text").should("include", staffFirstName + " " + staffLastName);
  });


  // Test Case: Validate 'Staff user' breadcrumb from Staff edit page.
  // Expected Result: After clicking "Staff user" breadcrumb, it will redirect to the staff list page.
  // Testrail ID: <C662>
  it("C662: Validate 'Staff user' breadcrumb from Staff edit page.", () => {
    console.log("Validate 'Staff user' breadcrumb from Staff edit page.");
    staffLocator.threeDotIconFromStaffList.click();
    cy.contains("View account").should('be.exist');
    staffLocator.viewAccountFieldFromThreeDot.contains("View account").click();
    staffLocator.staffUserBreadcrumpFromAccountDetails.contains('Staff users').should('be.exist');
    staffLocator.staffUserBreadcrumpFromAccountDetails.click();
    cy.url({ timeout: 20000 }).should("include", "/staff/list");
  });


  // Test Case: Verify the staff user edit functionality.
  // Expected Result: After clicking cancel button, the updated data won't be reflect in staff user list.After clicking save button, the updated data will reflect in staff user list
  // Testrail ID: <C663>
  it("C663: Verify the staff user edit functionality.", () => {
    console.log("Verify the staff user edit functionality.");
    const staffFirstName = "Staff"
    const staffLastName = "Test" + Math.random().toString(36).replace(/[^a-zA-Z]/g, '').substring(2, 7);
    const updateFirstName = "Staff"
    const updateLastName = "Test" + Math.random().toString(36).replace(/[^a-zA-Z]/g, '').substring(2, 7);
    console.log(staffLastName);
    const staffEmail = "staff" + staffLastName + "@yopmail.com";
    regressionUtills.createStaffWithPCT(staffFirstName, staffLastName, staffEmail);
    staffLocator.staffSearchField.click().type(staffFirstName + " " + staffLastName);
    cy.wait(500);
    staffLocator.staffListPage.invoke("text").should("include", staffFirstName + " " + staffLastName);
    staffLocator.threeDotIconFromStaffList.click();
    cy.contains("View account").should('be.exist');
    staffLocator.viewAccountFieldFromThreeDot.contains("View account").click();
    staffLocator.staffFirstNameFieldInEditPage.click().clear().type(updateFirstName);
    staffLocator.staffLastNameFieldInEditPage.click().clear().type(updateLastName);
    cy.contains('Cancel').click();
    cy.wait(200);
    staffLocator.staffListPage.invoke("text").should("include", staffFirstName + " " + staffLastName);
    staffLocator.threeDotIconFromStaffList.click();
    cy.contains("View account").should('be.exist');
    staffLocator.viewAccountFieldFromThreeDot.contains("View account").click();
    staffLocator.staffFirstNameFieldInEditPage.click().clear().type(updateFirstName);
    staffLocator.staffLastNameFieldInEditPage.click().clear().type(updateLastName);
    cy.contains('Save').click();
    cy.contains('Changes saved successfully!').should('be.exist');
    cy.contains('Continue').click();
    staffLocator.staffUserBreadcrumpFromAccountDetails.click();
    staffLocator.staffListPage.invoke("text").should("include", updateFirstName + " " + updateLastName);
  });


  // Commented out as required valid mailslurp api key
  // // Test Case: Verify the email received for 'Activate Your Account' after creating staff user.
  // // Expected Result: Email has been received with credential for login and activate your account.
  // // Testrail ID: <C567>
  // it("C567: Verify the email received for 'Activate Your Account' after creating staff user.", () => {
  //   console.log("Verify the email received for 'Activate Your Account' after creating staff user.");
  //   const staffFirstName = "Staff"
  //   const staffLastName = "Test" + Math.random().toString(36).replace(/[^a-zA-Z]/g, '').substring(2, 7);
  //   console.log(staffLastName);
  //   // const staffEmail = "staff" + staffLastName + "@yopmail.com";
  //   cy.createInbox().then(inbox => {
  //     // verify a new inbox was created
  //     assert.isDefined(inbox, "Inbox was successfully created.");

  //     // save the inboxId for later checking the emails
  //     inboxId = inbox.id
  //     emailAddress = inbox.emailAddress;
  //     cy.log(`Created inbox with ID: ${inboxId}`);
  //     cy.log(`Email Address: ${emailAddress}`);
  //     cy.wait(5000);
  //     staffLocator.addStaffUserButton.contains("Add staff user").click();
  //     cy.wait(200);
  //     staffLocator.staffDepartmentField.click();
  //     staffLocator.pctFromStaffDepartmentDropdown.click();
  //     cy.wait(500);
  //     cy.contains("Select role...").click();
  //     staffLocator.pctFromStaffRoleDropdown.click();
  //     cy.contains("Continue").click();
  //     cy.wait(500);
  //     staffLocator.staffFirstName.click().type(staffFirstName);
  //     cy.wait(100);
  //     staffLocator.staffLastName.click().type(staffLastName.toString());
  //     staffLocator.staffEmail.click().type(emailAddress);
  //     staffLocator.generatePasswordButton.click();
  //     cy.contains("Create user").click();
  //     cy.wait(500);
  //     cy.contains("User created successfully!").should("be.exist");
  //     cy.contains("Go to staff list").click();
  //     cy.wait(2000);
  //     cy.url({ timeout: 20000 }).should("include", "/staff/list");
  //     staffLocator.staffListPage.invoke("text").should("include", `${staffFirstName} ${staffLastName}`);
  //     cy.waitForLatestEmail(inboxId).then(email => {
  //       // verify we received an email
  //       assert.isDefined(email);
  //       expect(email.body).to.include('Your Temporary Login Details');
  //       expect(email.body).to.include('Next Steps to Activate Your Account');
  //     })
  //   });
  // });


  // // Test Case: Validate 'Resend invite' option from three dot in staff user list.
  // // Expected Result: Resend email has been received with credential for login and activate your account.
  // // Testrail ID: <C664>
  // it("C664: Validate 'Resend invite' option from three dot in staff user list.", () => {
  //   console.log("Validate 'Resend invite' option from three dot in staff user list.");
  //   const staffFirstName = "Staff"
  //   const staffLastName = "Test" + Math.random().toString(36).replace(/[^a-zA-Z]/g, '').substring(2, 7);
  //   console.log(staffLastName);
  //   // const staffEmail = "staff" + staffLastName + "@yopmail.com";
  //   cy.createInbox().then(inbox => {
  //     // verify a new inbox was created
  //     assert.isDefined(inbox, "Inbox was successfully created.");

  //     // save the inboxId for later checking the emails
  //     inboxId = inbox.id
  //     emailAddress = inbox.emailAddress;
  //     cy.log(`Created inbox with ID: ${inboxId}`);
  //     cy.log(`Email Address: ${emailAddress}`);
  //     cy.wait(5000);
  //     staffLocator.addStaffUserButton.contains("Add staff user").click();
  //     cy.wait(200);
  //     staffLocator.staffDepartmentField.click();
  //     staffLocator.pctFromStaffDepartmentDropdown.click();
  //     cy.wait(500);
  //     cy.contains("Select role...").click();
  //     staffLocator.pctFromStaffRoleDropdown.click();
  //     cy.contains("Continue").click();
  //     cy.wait(500);
  //     staffLocator.staffFirstName.click().type(staffFirstName);
  //     cy.wait(100);
  //     staffLocator.staffLastName.click().type(staffLastName.toString());
  //     staffLocator.staffEmail.click().type(emailAddress);
  //     staffLocator.generatePasswordButton.click();
  //     cy.contains("Create user").click();
  //     cy.wait(500);
  //     cy.contains("User created successfully!").should("be.exist");
  //     cy.contains("Go to staff list").click();
  //     cy.wait(2000);
  //     cy.url({ timeout: 20000 }).should("include", "/staff/list");
  //     staffLocator.staffListPage.invoke("text").should("include", `${staffFirstName} ${staffLastName}`);
  //     cy.waitForLatestEmail(inboxId).then(email => {
  //       // verify we received an email
  //       assert.isDefined(email);
  //       expect(email.body).to.include('Your Temporary Login Details');
  //       expect(email.body).to.include('Next Steps to Activate Your Account');
  //     })
  //   });
  //   staffLocator.threeDotIconFromStaffList.click();
  //   cy.contains("Resend invite").click();
  //   cy.wait(200);
  //   cy.waitForLatestEmail(inboxId).then(email => {
  //     // verify we received an email
  //     assert.isDefined(email);
  //     expect(email.body).to.include('Your Temporary Login Details');
  //     expect(email.body).to.include('Next Steps to Activate Your Account');
  //   })
  // });

  // Note: C566 is pending as required to add data-cy for copy icon.
});
import LoginLocator from "../../../locator/login/loginLocator";
import AssessmentLocator from "../../../locator/assessment/assessmentLocator";

describe("Login Test Suite", () => {

  let loadData;

  const loginLocator = new LoginLocator();
  const assessmentLocator = new AssessmentLocator();

  beforeEach(() => {
    cy.fixture('loadData.json').then((jsonData) => {
      loadData = jsonData;
    });
  });

  afterEach(() => {
    cy.wait(1000);
  });

  // Test Case:Verify the successful login functionality with valid credential.
  // Expected Result : User should be redirect to assessment page.
  // Testrail id : <C568>
  it("C568: Verify the successful login functionality with valid credential.", () => {
    console.log("Verify the successful login functionality with valid credential.");
    cy.adminLogin();
    assessmentLocator.homePageHeader.contains("Home").should("be.exist");
    cy.adminLogout();
    cy.wait(800);
  });


  // Test Case: Unsuccessful login with an invalid email id and valid password
  // Expected Result : An Error/Validate message will show "Please enter a valid email".
  // Testrail id : <C569>
  it("C569: Unsuccessful login with an invalid email id and valid password", () => {
    console.log("Unsuccessful login with an invalid email id and valid password");
    cy.visit("/login");
    cy.wait(2000);
    loginLocator.username.should('be.visible').type(loadData.invalidEmail);
    loginLocator.password.should('be.visible').type(loadData.validPassword);
    loginLocator.loginButton.click();
    cy.contains("Please enter a valid email").should('be.exist');
  });


  // Test Case: Login with blank username and valid password.
  // Expected Result : Unable to click submit button.
  // Testrail id : <C570>
  it("C570: Login with blank username and valid password.", () => {
    console.log("Login with blank username and valid password.");
    cy.visit("/login");
    cy.wait(500);
    loginLocator.username.should('be.visible').click();
    loginLocator.password.should('be.visible').type(loadData.validPassword, { timeout: 2000 });
    cy.wait(100);
    loginLocator.loginButton.should("be.disabled")
  });


  // Test Case: Unsuccessful login with valid email id and invalid password.
  // Expected Result : An Error message will show "Your password is incorrect".
  // Testrail id : <C571>
  it("C571: Unsuccessful login with valid email id and invalid password.", () => {
    console.log("Unsuccessful login with valid email id and invalid password.");
    cy.visit("/login");
    cy.wait(500);
    loginLocator.username.should('be.visible').type(loadData.validEmail);
    loginLocator.password.should('be.visible').type(loadData.invalidPassword);
    loginLocator.loginButton.click();
    cy.contains("Your password is incorrect").should('be.exist');
  });


  // Test Case: Unsuccessful login with email id with invalid domain name.
  // Expected Result : An Error message will show "This account does’t exist. Please enter a different account and try again."
  // Testrail id : <C572>
  it("C572: Unsuccessful login with email id with invalid domain name.", () => {
    console.log("Unsuccessful login with email id with invalid domain name.");
    cy.visit("/login");
    cy.wait(500);
    loginLocator.username.should('be.visible').type(loadData.validEmailWithInvalidDomain);
    loginLocator.password.should('be.visible').type(loadData.validPassword);
    loginLocator.loginButton.click();
    cy.contains("This account does’t exist. Please enter a different account and try again.").should('be.exist');
  });


  // Test Case: Unsuccessful login with password less than 8 characters.
  // Expected Result : An Error/Validation message will show "Password must be at least 8 characters". 
  // Testrail id : <C573>
  it("C573: Unsuccessful login with password less than 8 characters", () => {
    console.log("Unsuccessful login with password less than 8 characters");
    cy.visit("/login");
    cy.wait(500);
    loginLocator.username.should('be.visible').type(loadData.validEmail);
    loginLocator.password.should('be.visible').type(loadData.invalidPasswordLessThanEightCharecter);
    loginLocator.loginButton.click();
    cy.contains("Password must be at least 8 character").should('be.exist');
  });


  // Test Case: Unsuccessful login with email id with '..'/'@@' present in the ID.
  // Expected Result : An error message will show "Please enter a valid email".
  // Testrail id : <C574>
  it("C574: Unsuccessful login with email id with '..'/'@@' present in the ID", () => {
    console.log("Unsuccessful login with email id with '..'/'@@' present in the ID");
    cy.visit("/login");
    cy.wait(500);
    loginLocator.username.should('be.visible').type(loadData.invalidEmail1);
    loginLocator.password.should('be.visible').type(loadData.validPassword);
    loginLocator.loginButton.click();
    cy.contains("Please enter a valid email").should('be.exist');
  });
});

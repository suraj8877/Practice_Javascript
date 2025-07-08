describe("Logout Test Suite", () => {
  
  // Test Case: Verify the logout icon.
  // Expected Result : After clicking logout icon, it will redirect to login page.
  // Testrail id : <C581>
  it("C581: Verify the logout icon.", () => {
    console.log("Verify the logout icon.");
    cy.adminLogin();
    cy.adminLogout();
    cy.contains('Log in').should('be.visible');
  });
});

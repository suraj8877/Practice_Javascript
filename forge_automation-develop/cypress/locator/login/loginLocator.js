class LoginLocator {
    get username() {
        return cy.get('[data-testid="username-input"]',{timeout:5000});  // Locator for username input
    }

    get password() {
        return cy.get('[data-testid="password-input"]',{timeout:5000}); // Locator for password input
    }

    get loginButton() {
        return cy.get('[data-testid="login-submit"]',{timeout:5000})// Locator for the login button
    }
}

export default LoginLocator;                             

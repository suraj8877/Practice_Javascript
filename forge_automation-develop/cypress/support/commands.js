// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// cypress/support/commands.js
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';
import LoginLocator from "../locator/login/loginLocator";
import addContext from "mochawesome/addContext";
import LogoutLocator from "../locator/logout/logoutLocator";

const { MailSlurp } = require('mailslurp-client');
// set your api key with an environment variable `CYPRESS_API_KEY` or configure using `env` property in config file
// (cypress prefixes environment variables with CYPRESS)
//const apiKey = Cypress.env('API_KEY');
const apiKey = 'a466d55f40d775e54266ee1cdd8e6ce59aef8d975657faf0d7eb59fa53d6bc93';
const mailslurp = new MailSlurp({ apiKey });

Cypress.on("test:after:run", (test, runnable) => {
  const runId = Cypress.env("runId"); // Retrieve the TestRail run ID
  if (runId) {
    if (test.state === "failed") {
      const screenshotPath =
        `/cypress/screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`
          .replaceAll(":", "")
          .replace(". (failed)", " (failed)");
      addContext({ test }, screenshotPath);
    }

    const videoPath = `/cypress/videos/${Cypress.spec.name}.mp4`;
    addContext({ test }, videoPath);
  }
});

const loginLocator = new LoginLocator();
const logoutLocator = new LogoutLocator()


// Login Flow

Cypress.Commands.add("adminLogin", () => {
  // cy.session("login", () => {
  const username = Cypress.env("LOGIN_USERNAME");
  const password = Cypress.env("LOGIN_PASSWORD");
  cy.visit("/login");
  cy.wait(2000);
  loginLocator.username.should('be.visible').type(username);
  loginLocator.password.should('be.visible').type(password);
  cy.wait(500);
  loginLocator.loginButton.click();
  cy.wait(5000);
  // });
  // cy.visit("/login");
});

//Logout Flow
Cypress.Commands.add("adminLogout", () => {
  logoutLocator.clickThreeDots.should('be.visible').click();
  logoutLocator.ClickOnLogout.should('be.visible').click();
  cy.wait(2000);
  cy.url().should('include', '/login');
});


// Save local storage
let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

//Restore local storage
Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

Cypress.Commands.add("createInbox", () => {
  return mailslurp.createInbox();
});

Cypress.Commands.add("waitForLatestEmail", (inboxId) => {
  // how long we should hold connection waiting for an email to arrive
  const timeoutMillis = 30000;
  return mailslurp.waitForLatestEmail(inboxId, timeoutMillis)
});

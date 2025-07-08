const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require("cypress-mochawesome-reporter/lib");
const TestRailReporter = require("cypress-testrail");
const path = require("path");
require("dotenv").config();

const runId = process.env.TESTRAIL_RUN_ID;

module.exports = defineConfig({
  viewportWidth: 1576,
  viewportHeight: 767,
  "video": true,  // Enable video recording
  "screenshotOnRunFailure": true,
  pageLoadTimeout: 180000, // Increase to 3 minutes
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome-report/jsons",  // Fixed directory path
    reportFilename: "report",
    embeddedScreenshots: true,
    charts: false,
    html: false,
    json: true,
    overwrite: false,
    embeddedVideos: true,  // Ensure videos are embedded
    inlineAssets: true
  },
  env: {
    runId: runId,
  },
  e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 30000,
    requestTimeout: 30000,
    //pageLoadTimeout: 240000,
    specPattern: [
      "cypress/e2e/regressionTesting/Login/login.cy.js",
      "cypress/e2e/regressionTesting/Logout/logout.cy.js",
      "cypress/e2e/regressionTesting/Assessment Forms/assessmentForms.cy.js",
      "cypress/e2e/regressionTesting/Assessment Forms/Assessment Section/assessmentSection.cy.js",
      "cypress/e2e/regressionTesting/Assessment Forms/Assessment Question/assessmentQuestion.cy.js",
      "cypress/e2e/regressionTesting/Assessment Forms/Assessment Settings/assessmentSettings.cy.js",
      "cypress/e2e/regressionTesting/Assessment Forms/Assessment Preview/assessmentPreview.cy.js",
      "cypress/e2e/regressionTesting/Staff Users/staffUsers.cy.js",
      "cypress/e2e/regressionTesting/Patient Database/patientDatabase.cy.js"
    ],
    setupNodeEvents(on, config) {
      const configFile = config.env.configFile || "qa";
      const configPath = path.resolve(__dirname, `./cypress/config/config.${configFile}.json`);

      try {
        const envConfig = require(configPath);
        Object.assign(config, envConfig);
      } catch (error) {
        console.error(`Failed to load config file at ${configPath}: ${error.message}`);
        throw error;
      }

      on("before:run", async (details) => {
        await beforeRunHook(details);
      });

      // Updated after:run hook to ensure videos are linked
      on("after:run", async (results) => {
        await afterRunHook();
        if (results && results.video) {
          console.log(`Video recorded at: ${results.video}`);
        } else {
          console.log("No video was recorded.");
        }
      });

      require("cypress-mochawesome-reporter/plugin")(on);

      if (runId) {
        new TestRailReporter(on, config).register();
      } else {
        console.log("TestRail run ID not provided. Skipping TestRail reporter registration.");
      }

      return config;
    },
    testIsolation: false,
  },
});

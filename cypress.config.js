const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  env: {
    allure: true,
    allureResultsPath: 'allure-results',
    allureReuseAfterSpec: true,
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {
      const { plugin: cypressGrepPlugin } = require("@cypress/grep/plugin");
      cypressGrepPlugin(config);
      allureWriter(on, config);

      return config;
    },
  },
});

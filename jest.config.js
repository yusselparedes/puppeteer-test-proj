const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const suites = require('./suites');

const argv = yargs(hideBin(process.argv))
  .options({ suite: { type: 'string' } })
  .parseSync();
let specFiles;
if (argv.suite) {
  specFiles = suites[argv.suite] || [];
} else {
  specFiles = ['<rootDir>/**/*spec.js'];
}
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
module.exports = {
  testMatch: specFiles,
  // Stop running tests after `n` failures
  // bail: 0,
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // A preset that is used as a base for Jest's configuration
  preset: 'jest-puppeteer',
  // The root directory that Jest should scan for tests and modules within
  rootDir: 'dist',
  testTimeout: 5 * 60 * 1000,
  verbose: false,
};

# Cypress Test Automation Framework

This repository contains a Cypress test automation framework developed using the Page Object Model and Data Driven Testing approach. The framework also integrates with `cypress-mochawesome-reporter` to generate visually appealing HTML reports.

## Prerequisites

- Node.js and npm should be installed on your machine.

## Getting Started

1. Clone this repository:

   ```bash
   gh repo clone krmlsy/cypressAutomationProject

## Running the Tests
To run all the tests in the framework, use the following command:

<pre>
npx cypress run --browser chrome --headed
</pre>

## Test Reports
After running the tests, the framework will generate HTML reports using cypress-mochawesome-reporter. You can find the reports in the ./cypress/reports directory. Open the generated index.html file in any web browser to view the detailed test results.
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

# Pipefy

## __Project Dependencies__
* NVM install: https://github.com/nvm-sh/nvm || Node install: https://nodejs.org/en/download/
~~~javascript
    npm install
~~~
>___
## __Execution Tests__
### __UI Tests__
* QA Environment:
~~~javascript
    npm run smoke-test:ui:qa
~~~
> ___
### __API Tests__
* QA Environment:
~~~javascript
    npm run regression-test:api:qa
~~~
> ___
### __Project folder structure__
* [cypress/](./cypress/)
  * [downloads/](./cypress/downloads)
  * [fixtures/](./cypress/fixtures)
    * [example.json](./cypress/fixtures/example.json)
    * [pipefy-img.png](./cypress/fixtures/pipefy-img.png)
  * [integration/](./cypress/integration)
    * [api/](./cypress/integration/api)
      * [interview.spec.js](./cypress/integration/api/interview.spec.js)
    * [ui/](./cypress/integration/ui)
      * [interview.spec.js](./cypress/integration/ui/interview.spec.js)
  * [plugins/](./cypress/plugins)
    * [index.js](./cypress/plugins/index.js)
  * [results-report/](./cypress/results-report)
    * [mochawesome_2022-02-11T111835-0300.json](./cypress/results-report/mochawesome_2022-02-11T111835-0300.json)
    * [result-test-qa.html](./cypress/results-report/result-test-qa.html)
    * [result-test-qa.json](./cypress/results-report/result-test-qa.json)
  * [support/](./cypress/support)
    * [api/](./cypress/support/api)
      * [payloads/](./cypress/support/api/payloads)
        * [mutations/](./cypress/support/api/payloads/mutations)
          * [create.js](./cypress/support/api/payloads/mutations/create.js)
        * [querys/](./cypress/support/api/payloads/querys)
      * [expects.js](./cypress/support/api/expects.js)
    * [elements/](./cypress/support/elements)
      * [elements.js](./cypress/support/elements/elements.js)
    * [environments/](./cypress/support/environments)
      * [qa.json](./cypress/support/environments/qa.json)
    * [commands-api.js](./cypress/support/commands-api.js)
    * [commands-ui.js](./cypress/support/commands-ui.js)
    * [index.js](./cypress/support/index.js)


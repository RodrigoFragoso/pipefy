import './commands-ui'
import './commands-api'
import 'cypress-file-upload'

Cypress.SelectorPlayground.defaults({
  selectorPriority: ['data-cy', 'data-test', 'data-testid', 'id', 'class', 'tag', 'nth-child', 'attributes']
})

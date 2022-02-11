import * as body from '../support/api/payloads/mutations/create'

Cypress.Commands.add('requestApi', (body) => {
  cy.request({
    method: 'POST',
    url: Cypress.config().api.url,
    headers: {
      Authorization: Cypress.config().api.token
    },
    body: body,
    failOnStatusCode: false
  })
})

Cypress.Commands.add('checkCharset', (response) => {
  expect(response).to.have.property('content-type').an('string').equal('application/json; charset=utf-8')
})

Cypress.Commands.add('checkStatusCodeAndRequestTime', (response) => {
  expect(response.status).to.eq(200)
  expect(response.duration).to.be.lessThan(Cypress.config().api.durationRequest)
})

Cypress.Commands.add('createPipe', (namePipe) => {
  cy.requestApi(body.pipe(namePipe))
})

Cypress.Commands.add('createPhaseField', (pipeId, namePhase) => {
  cy.requestApi(body.phaseField(pipeId, namePhase))
})

Cypress.Commands.add('createCard', (pipeId) => {
  cy.requestApi(body.card(pipeId))
})

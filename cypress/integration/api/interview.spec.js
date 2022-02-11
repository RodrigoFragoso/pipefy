/// <reference types="cypress" />
import expects from '../../support/api/expects'

describe('API - Pipefy QA Interview', () => {
  let pipeId
  let namePipe

  context('PIPE', () => {
    namePipe = `PipeFragosoTest${Cypress._.random(0, 1e12)}`

    it('Create a pipe', () => {
      cy.createPipe(namePipe).then(response => {
        expects.createPipe(response, namePipe)
      })
    })
  })

  context('PHASEFIELD', () => {
    before(() => {
      namePipe = `PipeFragosoTest${Cypress._.random(0, 1e12)}`

      cy.createPipe(namePipe).then(response => {
        pipeId = response.body.data.createPipe.pipe.id
      })
    })

    it('Create a PhaseField', () => {
      const namePhase = `PhaseFragosoTest${Cypress._.random(0, 1e12)}`

      cy.createPhaseField(pipeId, namePhase).then(response => {
        expects.createPhaseField(response, namePhase)
      })
    })
  })

  context('CARD', () => {
    before(() => {
      namePipe = `PipeFragosoTest${Cypress._.random(0, 1e12)}`

      cy.createPipe(namePipe).then(response => {
        pipeId = response.body.data.createPipe.pipe.id
      })
    })

    it('Create Card', () => {
      cy.createCard(pipeId).then(response => {
        expects.createCard(response, pipeId, namePipe)
      })
    })
  })
})

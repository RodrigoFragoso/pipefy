/// <reference types="cypress" />

const faker = require('faker-br')

describe('UI - Pipefy QA Interview Form', () => {
  const yourName = faker.internet.userName()
  const yourEmail = faker.internet.email()
  const resonPipefy = faker.lorem.words()
  const phoneNumber = 11981000000

  beforeEach(() => {
    cy.visitFormInterview()
  })

  after(() => {
    cy.checkFormSuccess()
  })

  it('Fill out the interview form', () => {
    cy.fillOutForm(yourName, resonPipefy, phoneNumber, yourEmail)
  })
})

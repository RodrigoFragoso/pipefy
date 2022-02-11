import dayjs from 'dayjs'
import EL from './elements/elements'

Cypress.Commands.add('visitFormInterview', () => {
  cy.visit('/')
  cy.contains(EL.FORM.TEXT_INTERVIEW).should('be.visible')
  cy.get(EL.FORM.IMG_PIPEFY).find('img').should('be.visible')
  cy.intercept('POST', '**/public_api').as('checkPublicAPI')
})

Cypress.Commands.add('checkFormSuccess', () => {
  cy.wait('@checkPublicAPI').its('response').should('deep.include', {
    statusCode: 200,
    statusMessage: 'OK'
  })
  cy.contains(EL.SUCCESS_FORM.TEXT_THANKS).should('be.visible')
  cy.contains(EL.SUCCESS_FORM.TEXT_CHECK_EMAIL).should('be.visible')
})

Cypress.Commands.add('fillOutForm', (yourName, workPipefy, phoneNumber, yourEmail) => {
  const option = 'B'
  cy.get(EL.FORM.NAME).should('exist').type(yourName)
  cy.get(EL.FORM.REASON_WORK).type(workPipefy)
  cy.get(EL.FORM.CHECKBOX_OPTION_B).check(option, { force: true }).should('have.value', option)
  const responsible = ['felipe', 'Kaio', 'Luiz', 'Thialison']
  for (const i in responsible) {
    cy.get(EL.FORM.SELECT_USER).click()
    cy.get(EL.FORM.FILTER_USER).should('be.visible').type(responsible[i])
    cy.get(`a[title*=${responsible[i]}`).should('be.visible').click()
  }
  cy.get(EL.FORM.SELECT_DATE).click({ force: true })
  cy.get(EL.FORM.BUTTON_SAVE).click()
  cy.get(EL.FORM.SELECT_OPTION_B).select(option).should('have.value', option)
  const hourNow = dayjs().format('HH:mm')
  cy.get(EL.FORM.HOUR).type(hourNow)
  cy.get(EL.FORM.UPLOAD_FILE).attachFile('pipefy-img.png')
  cy.get(EL.FORM.PHONE).type(phoneNumber)
  cy.get(EL.FORM.BUTTON_SUBMIT_1).should('exist').eq(0).click()
  cy.contains(EL.FORM.TEXT_EMAIL).should('be.visible')
  cy.get(EL.FORM.EMAIL).type(yourEmail)
  cy.get(EL.FORM.BUTTON_SUBMIT_2).should('exist').click()
})

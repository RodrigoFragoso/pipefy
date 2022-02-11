// const faker = require('faker-br')

function pipe (namePipe) {
  cy.log('Create Pipe')
  const mutation = {
    query: `
      mutation{
        createPipe(input: {name: "${namePipe}", organization_id: ${Cypress.config().api.organizationId}}){
          pipe{
            created_at
            id
            name
            noun
            organizationId
          }
        }
      }
    `
  }
  return mutation
}

function phaseField (pipeId, namePhase) {
  cy.log('Create PhaseField')
  const mutation = {
    query: `
      mutation{
        createPhase(input: {pipe_id: "${pipeId}", name: "${namePhase}"}){
          phase{
            created_at
            id
            name
          }
        }
      }
    `
  }
  return mutation
}

function card (pipeId) {
  cy.log('Create Card')
  const mutation = {
    query: `
      mutation{
        createCard(input: {pipe_id: "${pipeId}"}){
          card{
            created_at
            id
            pipe{
              id
              name
            }
            attachments_count
            checklist_items_checked_count
            checklist_items_count
            comments_count
            expired
            inboxEmailsRead
            late
            title
          }
        }
      }
    `
  }
  return mutation
}

export {
  pipe,
  phaseField,
  card
}

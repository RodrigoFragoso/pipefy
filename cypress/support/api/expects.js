const checkDependencies = (response) => {
  cy.checkCharset(response.headers)
  cy.checkStatusCodeAndRequestTime(response)
}

class Expects {
  createPipe (response, namePipe) {
    checkDependencies(response)
    const data = response.body.data.createPipe.pipe
    expect(data.created_at).to.be.not.a('null')
    expect(data.id).to.be.not.a('null')
    expect(data.name).to.eql(namePipe)
    expect(data.noun).to.eql('cards')
    expect(data.organizationId).to.eql(`${Cypress.config().api.organizationId}`)
  }

  createPhaseField (response, namePhase) {
    checkDependencies(response)
    const data = response.body.data.createPhase.phase
    expect(data.created_at).to.be.not.a('null')
    expect(data.id).to.be.not.a('null')
    expect(data.name).to.eql(namePhase)
  }

  createCard (response, pipeId, namePipe) {
    checkDependencies(response)
    const data = response.body.data.createCard.card
    expect(data.created_at).to.be.not.a('null')
    expect(data.id).to.be.not.a('null')
    expect(data.pipe.id).to.eql(pipeId)
    expect(data.pipe.name).to.eql(namePipe)
    expect(data.title).to.eql('Rascunho')
  }
}

export default new Expects()

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('visit web site portifolio', () => {
  it('visits portifolio', () => {
    cy.visit('http://localhost:5173')
  })
})
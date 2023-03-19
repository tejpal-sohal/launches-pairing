describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})
describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
})

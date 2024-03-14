/// <reference types="cypress" />

describe('Test Dyanamic Routing', () => {
  it('Should be correct pass', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('詳細はこちら').first().click()
    cy.visit('http://localhost:3000/animals/electrical_eel')
  })
})
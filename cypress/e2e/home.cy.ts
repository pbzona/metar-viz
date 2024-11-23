describe('Home Page', () => {
  it('successfully loads with dark theme and tab structure', () => {
    cy.visit('/')
    cy.get('body').should('have.class', 'bg-slate-900')
    cy.contains('Airport Weather Alert System').should('be.visible')
    cy.contains('Map View').should('be.visible')
    cy.contains('List View').should('be.visible')
    cy.contains('Airport Map').should('be.visible')
    cy.contains('List View').click()
    cy.contains('Airport List').should('be.visible')
  })
})


describe('Inventory Page', () => {
  it('Loads products', () => {
    cy.login()
    cy.get('.inventory_item').should('have.length.greaterThan', 0)
  })
})

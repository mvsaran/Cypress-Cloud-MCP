describe('Cart Test', () => {
  it('Add to cart', () => {
    cy.login()
    cy.get('.inventory_item button').first().click()
    cy.get('.shopping_cart_badge').should('contain', '1')
  })
})

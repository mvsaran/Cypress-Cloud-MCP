describe('Checkout Test', () => {
  it('Checkout flow', () => {
    cy.login()
    cy.get('.inventory_item button').first().click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('John')
    cy.get('[data-test="lastName"]').type('Doe')
    cy.get('[data-test="postalCode"]').type('12345')
   // cy.get('[data-test="pin"]').type('12345')
  })
})

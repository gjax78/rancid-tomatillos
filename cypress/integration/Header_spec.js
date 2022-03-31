describe("Header should render", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it("Should have a header", () => {
    cy.get('header').should('be.visible')
  })

  it("Should have a sign in button", () => {
    cy.get('.sign-in-button').should('be.visible')
  })
})

describe("Header should render", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Should have a header", () => {
    cy.get('header').should("be.visible")
  })
})

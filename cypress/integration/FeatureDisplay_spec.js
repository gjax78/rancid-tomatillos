describe("Header should render", () => {
  beforeEach(() => {
    cy.fixture('AllMovieData.json').then((movie) => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', movie)
  })

    cy.visit('/')
  })

  it("As a user, I should see page name Rancid Tomatillos", () => {
    cy.get('.featureDisplay').contains('Rancid Tomatillos')
  })

  it("As a user, I should see the feature movie title", () => {
    cy.get('h3').should('have.text', '')
  })

  it("As a user, I should see the feature movie backdrop", () => {
    cy.get('.featureImage').should('be.visible')
  })

})

describe("As a user, I should see a page with a single movies info", () => {
  beforeEach(() => {
    cy.fixture('SingleMovieData.json').then((movie) => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/718444', movie)
  })

    cy.visit('/718444')
  })

  it("As a user, I should see a movie backdrop", () => {
    cy.get('.movie-backdrop').url("https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg")
  })
})

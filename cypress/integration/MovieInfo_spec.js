describe("As a user, I should see a page with a single movies info", () => {
  beforeEach(() => {
    cy.fixture('SingleMovieData.json').then((movie) => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/718444', movie)
  })

    cy.visit('/718444')
  })

  it("As a user, I should see the movie backdrop", () => {
    cy.get('.movie-backdrop').url("https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg")
  })

  it("As a user, I should see the movies tagline", () => {
    cy.get('.movie-tagline').should('have.text', "When the hunter becomes the prey.")
  })

  it("As a user, I should see the movies genre and release date", () => {
    cy.get('.movie-genres-and-release-date').should('have.text', "Action · 2020-08-20")
  })

  it("As a user, I should see the movies title", () => {
    cy.get('.movie-title').should('have.text', "Rogue")
  })

  it("As a user, I should see the movies poster", () => {
    cy.get('.movie-poster').url("https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg")
  })

  it("As a user, I should see text that displays the word information", () => {
    cy.get('.information-title').should('have.text', "Information")
  })

  it("As a user, I should see text that displays the word about", () => {
    cy.get('.overview-title').should('have.text', "About")
  })

  it("As a user, I should see text that displays descriptions of movie info", () => {
    cy.get('.movie-titles').should('have.text', "Release DateAverage RatingAverage RuntimeGenres")
  })

  it("As a user, I should see text that displays the movie release date", () => {
    cy.get('.movie-release-date').should('have.text', "2020-08-20")
  })
})

describe("Error handling test", () => {
  beforeEach(() => {
    cy.fixture('SingleMovieData.json').then((movie) => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/718444', movie)
  })
})

  it('should throw error when incorrect movie id is passed', () => {
    cy.visit('http://localhost:3000/movies/433')
    cy.get('.error').should('have.text', 'Something went wrong')
  })
})

describe("Error handling test", () => {
  beforeEach(() => {
    cy.fixture('SingleMovieData.json').then((movie) => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/718444', movie)
  })
})

it('should throw error when incorrect url path is passed', () => {
  cy.visit('http://localhost:3000/geena')
  cy.get('.error').should('have.text', 'Something went wrong')
})
})

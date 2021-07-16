import movieData from './testData.js'

describe('dummy test', () => {
  it('should confirm true is true', () =>{
    expect(true).to.equal(true)
  })
})

describe('Page is loaded', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should direct to the correct URL upon load', () => {
    cy.get('header')
    .contains('Rancid Tomatillos')
    .get('section')
    .contains('Featured')
    .get('div')
    .should('have.class', 'movies-container')
  })

  it('should fetch all movies from API and display on the page', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
      statusCode: 200,
      body: { movieData }
    })
    .get('div')
    .should('have.class', 'movies-container')
    .get('button')
    .should('have.class', 'movie-card')
    .get('button')
    .should('have.class', 'featured-movie-section')
  })

  it('should show an error if 404 status code');

  it('should show an error if 500 status code');

  it('should allow the user to click on a movie card to view a detail page for that movie');

  it('should allow the user to click on the featured movie banner to view a detail page for that movie');

  it('should allow the user to automatically scroll down to the movie cards by clicking the Browse button');

})

describe('Page is loaded', () => {

  it('should direct to the correct URL upon load', () => {
    cy.visit('http://localhost:3000/')
    cy.get('header')
    .contains('Rancid Tomatillos')
    .get('section')
    .contains('Featured')
    .get('div')
    .should('have.class', 'movies-container')
  })

  it('should fetch all movies from API and display on the page', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'movieData.json'
    })
    .get('div')
    .should('have.class', 'movies-container')
    .get('button')
    .should('have.class', 'movie-card')
    .get('button')
    .should('have.class', 'featured-movie-section')
  })

  it('should allow the user to click on a movie card to view a detail page for that movie', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#337401').click()
    cy.url().should('eq', 'http://localhost:3000/movies/337401')
  });

  it('should allow the user to click on the featured movie banner to view a detail page for that movie', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.featured-movie-section').click()
    //assert that you see details since movie changes every time
  });

  //button should show 'browse'
})

describe('Page is loaded', () => {
   beforeEach(()=> {
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
    cy.get('#337401').click()
    cy.url().should('eq', 'http://localhost:3000/movies/337401')
  });

  it('should allow the user to click on the featured movie banner to view a detail page for that movie', () => {
    cy.get('.featured-movie-section').click()
    cy.get('header')
    .contains('Rancid Tomatillos')
    .get('section')
    .get('div')
    .should('have.class', 'movie-details')
    .and('contain', 'Overview')
    .and('contain', 'Rating')
    .and('contain', 'Genre')
    .and('contain', 'Release Date')
    .and('contain', 'Runtime')
  });

  it('should have a nav button that reads Browse Movies', () => {
    cy.get('.nav-button')
      .contains('Browse Movies')
    cy.contains('Home').should('not.exist')
  });
})

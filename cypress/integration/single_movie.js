describe('Single Movie Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/movies/337401')
  })

  it('should direct to the correct URL upon load', () => {
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

  it('should fetch a single movie from the API', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
      statusCode: 200
    })
    cy.contains('Mulan')
    cy.contains('5.3/10')
    cy.contains('115 minutes')
    cy.contains('Action, Adventure, Drama, Fantasy')
    cy.contains('September 4, 2020')
  });

  it('should be able to load a different single movie', () => {
    cy.visit('http://localhost:3000/movies/737568')
    cy.contains('The Doorman')
    cy.contains('5.8/10')
    cy.contains('97 minutes')
    cy.contains('Action, Thriller')
    cy.contains('October 1, 2020')
  });

  it('should allow the user to click the browser\'s forward and back arrows to navigate', () => {
    cy.visit('http://localhost:3000')
    cy.get('#337401').click()
    cy.url().should('eq', 'http://localhost:3000/movies/337401')
    cy.go('back')
    cy.url().should('eq', 'http://localhost:3000/')
    cy.go('forward')
    cy.url().should('eq', 'http://localhost:3000/movies/337401')
  });

  it('should not show the movie cards section', () => {
    cy.get('.movies-container').should('not.exist')
  });

  it('should not show the featured movie section', () => {
    cy.get('.featured-movie-section').should('not.exist')
  });

  it('should have a nav button that reads Home', () => {
    cy.get('.nav-button')
      .contains('Home')
    cy.contains('Browse Movies').should('not.exist')
  });

  it('should allow the user to click a button to go back to the main dashboard', () => {
    cy.get('.nav-button').click()
    cy.url().should('eq', 'http://localhost:3000/')
  });
});

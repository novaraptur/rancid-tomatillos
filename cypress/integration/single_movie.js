
describe('dummy test for single movie', () => {
  it('should confirm that false is false', () => {
    expect(false).to.equal(false);
  });
});

describe('Single Movie Page', () => {
  it('should direct to the correct URL upon load', () => {
    cy.visit('http://localhost:3000/movies/337401')
      .get('header')
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
  });

  it('should allow the user to click the browser\'s forward and back arrows to navigate', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#337401').click()
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

  //button should show 'home'

  it('should allow the user to click a button to go back to the main dashboard', () => {
    cy.get('.nav-button').click()
    cy.url().should('eq', 'http://localhost:3000/')
  });
});

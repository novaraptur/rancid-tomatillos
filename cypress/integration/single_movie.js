
describe('dummy test for single movie', () => {
  it('should confirm that false is false', () => {
    expect(false).to.equal(false);
  });
});

describe('Single Movie Page', () => {
  it('should direct to the correct URL upon load', () => {
    cy.visit('http://localhost:3000/')
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
});

// URL path is baseURL/id

// the user can click the browser's forward and back arrows to navigate

// no other movies are visible

// featured movie is not visible

// click browse to go back home

//single movie is fetched

// if 500 see 500 error page

//if 404 see 404 error page

//if bad / error (general) see general error page

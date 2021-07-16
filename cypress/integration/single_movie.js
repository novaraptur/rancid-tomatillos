
describe('dummy test for single movie', () => {
  it('should confirm that false is false', () => {
    expect(false).to.equal(false);
  });
});

describe('Single Movie Page', () => {
  it('should direct to the correct URL upon load', () => {
    cy.visit('http://localhost:3000/') //http://localhost:3000/movie-id
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

  it('should fetch a single movie from the API');

  it('should show an error if 404 status code');

  it('should show an error if 500 status code');

  it('should show a general error if any other failing status code');

  it('should allow the user to click the browser\'s forward and back arrows to navigate');

  it('should not show the movie cards section');

  it('should not show the featured movie section');

  it('should allow the user to click a button to go back to the main dashboard');
});

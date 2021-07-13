describe('Fetch errors', () => {
  it('should display an error if server responds with 500 error code', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 500
      }
    );
    cy.visit('http://localhost:3000/');
    cy.contains('Rancid Tomatillos');
    cy.contains('Internal Server Error. Our whole team is now aware.').should(
      'be.visible'
    );
  });

  it('should display an error if server responds with 404 error code', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 404
      }
    )
      .visit('http://localhost:3000/')
      .get('.error-message')
      .should(
        'have.text',
        "Sorry, we can't find the page you are looking for."
      );
  });
});

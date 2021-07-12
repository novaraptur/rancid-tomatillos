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
})


//all movies are fetched (201) see all movies

// if 500 see error

//if 404 see error

//can click a movie card go to the correct single moviepage

//can click browse to scroll down

// can click the featured movie and see the single movie

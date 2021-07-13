import React, { Component } from 'react';
import './App.css';
import { cleanAPIData } from '../../apiCalls/util';
import Header from '../HeaderAndNav/Header';
import FeatMovie from '../FeatMovie/FeatMovie';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import { fetchMovies, fetchMovie } from '../../apiCalls/apiCalls';
import util from '../../apiCalls/util';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      selectedMovie: null
    };
  }

  clearSelectedMovie = () => {
    this.setState({ selectedMovie: null });
  };

  updateSelectedMovie = clickedMovieID => {
    fetchMovie(clickedMovieID)
      .then(data => cleanAPIData(data))
      .then(movie => this.setState({ selectedMovie: movie.movie }))
      .catch(err => console.error(err));
  };

  navigate = () => {
    if (!this.state.selectedMovie) {
      console.log('Scroll down to movie cards');
    } else {
      this.clearSelectedMovie();
    }
  };

  componentDidMount() {
    fetchMovies('movies')
      .then(data => this.setState({ movies: data.movies }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <main>
        <Header navigate={this.navigate} />
        {!this.state.movies.length && (
          <h1 className='loading'>Movies loading...</h1>
        )}
        {!!this.state.movies.length && (
          <Movies
            movies={this.state.movies}
            selectedMovie={this.state.selectedMovie}
            updateSelectedMovie={this.updateSelectedMovie}
          />
        )}
        <Footer />
      </main>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { cleanAPIData } from '../../apiCalls/util';
import Header from '../HeaderAndNav/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import { fetchMovies, fetchMovie } from '../../apiCalls/apiCalls';
import Errors from '../Errors/Errors'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      selectedMovie: null,
      error: ''
    };
  }

  clearSelectedMovie = () => {
    this.setState({ selectedMovie: null });
  };

  updateSelectedMovie = clickedMovieID => {
    fetchMovie(clickedMovieID)
      .then(data => cleanAPIData(data))
      .then(movie => this.setState({ selectedMovie: movie.movie }))
      .catch(err => this.setState({error: err.message}));
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
      .catch(err => this.setState({error: err.message}));
  }

  render() {
    const {error} = this.state;
    return (
      <main>
        <Header navigate={this.navigate} />
        {!!error.length && <Errors error={error}/>}

        {!error.length && !this.state.movies.length && (
          <h1 className='loading'>Movies loading...</h1>
        )}

        {!error.length && !!this.state.movies.length && (
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

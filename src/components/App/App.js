import React, { Component } from 'react';
import './App.css';

import Header from '../HeaderAndNav/Header';
import FeatMovie from '../FeatMovie/FeatMovie';
import Movies from '../Movies/Movies';
import { fetchMovies } from '../../apiCalls/apiCalls';
import util from '../../apiCalls/util';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      selectedMovie: null
    };
  }

  updateSelectedMovie = clickedMovie => {
    // this will happen after a successful fetch:
    this.setState({ selectedMovie: clickedMovie });
  };

  navigate = () => {
    if (!this.state.selectedMovie) {
      console.log('Scroll down to movie cards');
    } else {
      this.updateSelectedMovie(null);
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
      </main>
    );
  }
}

export default App;

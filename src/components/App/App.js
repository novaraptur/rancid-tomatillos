import React, { Component } from 'react';
import './App.css';

import Header from '../HeaderAndNav/Header';
import FeatMovie from '../FeatMovie/FeatMovie';
import Movies from '../Movies/Movies';
import { movieData, singleMovie } from '../../movieData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movieData,
      movie: singleMovie,
      selectedMovie: null
    };
  }

  updateSelectedMovie = clickedMovie => {
    this.setState({ selectedMovie: clickedMovie });
  }

  navigate = () => {
    if (!this.state.selectedMovie) {
      console.log("Scroll down to movie cards");
    } else {
      this.updateSelectedMovie(null);
    }
  }

  render() {
    return (
      <main>
        <Header
          navigate={this.navigate}
        />
        <Movies
          movies={this.state.movies}
          movie={this.state.movie}
          selectedMovie={this.state.selectedMovie}
          updateSelectedMovie={this.updateSelectedMovie} />
      </main>
    );
  }
}

export default App;

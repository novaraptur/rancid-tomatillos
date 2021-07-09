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
      movie: singleMovie
    };
  }

  render() {
    return (
      <main>
        <Header />
        <FeatMovie movies={this.state.movies} movie={this.state.movie} />
        <Movies movies={this.state.movies} movie={this.state.movie} />
      </main>
    );
  }
}

export default App;

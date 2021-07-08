import React, { Component } from 'react';
import './App.css';

import Header from '../HeaderAndNav/Header';
import FeatMovie from '../FeatMovie/FeatMovie';
import Movies from '../Movies/Movies';
import movieData from '../../movieData'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movieData
    }
  }

  render() {
    return (
      <main>
        {/* <Header />
        <FeatMovie movies={movieData} /> */}
        <Movies movies={this.state.movies}/>
      </main>
    );
  }
}

export default App;

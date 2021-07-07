import React, { Component } from 'react';
import './App.css';

import Header from '../HeaderAndNav/Header';
import FeatMovie from '../FeatMovie/FeatMovie';
import Movies from '../Movies/Movies';
import movieData from '../../movieData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movieData
    }
  }

  render() {
    return (
      <div>
        <Header />
        <h2>THIS DOESN'T WORK UNLESS I HAVE ANOTHER ELEMENT HERE</h2>
      </div>
        // <FeatMovie movies={this.state.movieData} />
        // <Movies movies={this.state.movieData}/>
    );
  }
}

export default App;

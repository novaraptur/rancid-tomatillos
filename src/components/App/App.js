import React, { Component } from 'react';
import logo from '../../images/logo.svg';
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

  return (
    <main>
      <Header />
      <FeatMovie movies={movieData} />
      <Movies movies={movieData}/>
    </main>
  );
}

export default App;

import React, { Component } from 'react';
import './FeatMovie.css';

class FeatMovie extends Component {
  constructor(props) {
    super(props);
  }

  generateMovie() {
    return Math.floor(Math.random() * this.props.movies.movies.length);
  }

  render() {
    return (
      <section className="featured-movie-section">
        <img className="featured-movie-img" src={this.props.movies.movies[this.generateMovie()].backdrop_path} />
      </section>
    )
  }
}

export default FeatMovie;

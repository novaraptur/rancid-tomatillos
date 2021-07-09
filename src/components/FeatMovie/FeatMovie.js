import React, { Component } from 'react';
import './FeatMovie.css';

class FeatMovie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="featured-movie-section">
        <img src={this.props.movies.movies[0].backdrop_path} />
      </section>
    )
  }
}

export default FeatMovie;

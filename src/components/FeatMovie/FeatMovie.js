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
    const movieIndex = this.generateMovie();
    return (
      <section className="featured-movie-section">
        <img className="featured-movie-img" src={this.props.movies.movies[movieIndex].backdrop_path} alt={this.props.movies.movies[movieIndex].title + ' preview image.'}/>
        <div className='featured-title'>
          <h2>{this.props.movies.movies[movieIndex].title}</h2>
        </div>
      </section>
    )
  }
}

export default FeatMovie;

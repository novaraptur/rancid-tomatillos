import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import FeatMovie from '../FeatMovie/FeatMovie';
import './Movies.css';
import { NavLink } from 'react-router-dom';

class Movies extends Component {
  getMovieCards = () => {
    const { movies } = this.props;
    return movies.map(movie => {
      return (
        <NavLink to={`/${movie.id}`} key={movie.id}>
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            rating={movie.average_rating}
            releaseDate={movie.release_date}
            updateSelectedMovie={this.props.updateSelectedMovie}
          />
        </NavLink>
      );
    });
  };

  render() {
    return (
      <section>
        <div>
          <FeatMovie
            props={this.props}
            updateSelectedMovie={this.props.updateSelectedMovie}
          />
          <div className='movies-container'>{this.getMovieCards()}</div>
        </div>
      </section>
    );
  }
}

export default Movies;

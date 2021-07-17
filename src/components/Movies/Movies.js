import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import FeatMovie from '../FeatMovie/FeatMovie';
import './Movies.css';
import { NavLink } from 'react-router-dom';
import { Element } from 'react-scroll';
import PropTypes from 'prop-types';

class Movies extends Component {
  getMovieCards = () => {
    const { movies } = this.props;
    return movies.map(movie => {
      return (
        <NavLink to={`/movies/${movie.id}`} key={movie.id}>
          <MovieCard {...movie} />
        </NavLink>
      );
    });
  };

  render() {
    const { movies } = this.props;
    return (
      <section>
        <div>
          <FeatMovie movies={movies} />
          <Element
            className='movies-container'
            id='movieCards'
            name='movieCards'
          >
            {this.getMovieCards()}
          </Element>
        </div>
      </section>
    );
  }
}

export default Movies;

Movies.propTypes = {
  movies: PropTypes.array
};

import React from 'react';
import './FeatMovie.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const FeatMovie = ({ movies }) => {
  const movie = movies[Math.floor(Math.random() * movies.length)];
  const { id, backdrop_path, title } = movie;

  return (
    <NavLink to={`/movies/${id}`} key={id}>
      <button className='featured-movie-section' id={`${id}-featured`}>
        <div className='featured'>
          <h2>Featured Movie</h2>
          <h3>{title}</h3>
        </div>
        <img
          className='featured-movie-img'
          src={backdrop_path}
          alt={title + ' preview image'}
        />
      </button>
    </NavLink>
  );
};

export default FeatMovie;

FeatMovie.propTypes = {
  movies: PropTypes.array
};

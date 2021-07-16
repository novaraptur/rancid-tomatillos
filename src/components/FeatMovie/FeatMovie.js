import React from 'react';
import './FeatMovie.css';
import { NavLink } from 'react-router-dom';

const FeatMovie = ({ movies }) => {
  const movie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <NavLink to={`/movies/${movie.id}`} key={movie.id}>
      <button className='featured-movie-section' id={`${movie.id}-featured`}>
        <div className='featured'>
          <h2>Featured Movie</h2>
          <h3>{movie.title}</h3>
        </div>
        <img
          className='featured-movie-img'
          src={movie.backdrop_path}
          alt={movie.title + ' preview image'}
        />
      </button>
    </NavLink>
  );
};

export default FeatMovie;

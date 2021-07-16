import React from 'react';
import './FeatMovie.css';

const FeatMovie = ({ movies }) => {
  const movieIndex = Math.floor(Math.random() * movies.length);
  const { id, backdrop_path, title } = movies[movieIndex];

  return (
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
  );
};

export default FeatMovie;

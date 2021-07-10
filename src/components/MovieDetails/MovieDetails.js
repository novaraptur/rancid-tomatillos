import React from 'react';
import './MovieDetails.css';
const dayjs = require('dayjs');

const MovieDetails = ({ selectedMovie }) => {
  const releaseDate = selectedMovie.release_date;
  return (
    <div className='movie-details' id={selectedMovie.id}>
      <img
        src={selectedMovie.backdrop_path}
        alt={`${selectedMovie.title} poster`}
      />
      <div className='text-box'>
        <div className='title-container'>
          <h2 className='title'>{selectedMovie.title}</h2>
        </div>
        <h3>Overview:</h3>
        <p>{selectedMovie.overview}</p>
        <h3>Rating:</h3>
        <p>{selectedMovie.average_rating.toFixed(1)}/10 </p>
        <h3>Runtime:</h3>
        <p>{selectedMovie.runtime} minutes</p>
        <h3>Genre:</h3>
        <p>{selectedMovie.genres}</p>
        <h3>Release Date:</h3>
        <p>{dayjs(releaseDate).format('MMMM D, YYYY')}</p>
      </div>
    </div>
  );
};

export default MovieDetails;

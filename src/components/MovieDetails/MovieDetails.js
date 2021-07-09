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
      <h1>{selectedMovie.title}</h1>
      <h2>Rating: {selectedMovie.average_rating}</h2>
      <h2>Release Date:{dayjs(releaseDate).format('MMM DD YYYY')}</h2>
      <p>Overview: {selectedMovie.overview}</p>
      <p>Genre: {selectedMovie.genres}</p>
      <p>Runtime:{selectedMovie.runtime} minutes</p>
    </div>
  );
};

export default MovieDetails;

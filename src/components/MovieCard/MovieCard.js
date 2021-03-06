import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';
const dayjs = require('dayjs');

const MovieCard = ({ ...movie }) => {
  const { id, average_rating, poster_path, release_date, title } = movie;
  const [inHover, setHover] = useState(false);
  const release = dayjs(release_date).format('MMM D, YYYY');
  const rating = average_rating.toFixed(1) + ' / 10';

  return (
    <button
      className='movie-card'
      id={id}
      onMouseEnter={event => setHover(true)}
      onMouseLeave={event => setHover(false)}
    >
      <img src={poster_path} alt={title + ' movie poster'} />
      {inHover && (
        <div className='more-info'>
          <h2>{title}</h2>
          <h3>Rating: {rating}</h3>
          <h3>Release: {release}</h3>
        </div>
      )}
    </button>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  average_rating: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

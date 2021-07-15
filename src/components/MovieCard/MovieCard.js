import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';
const dayjs = require('dayjs');

const MovieCard = ({ ...movie }) => {
  const { id, average_rating, poster_path, release_date, title } = movie;
  const [inHover, setHover] = useState(false);
  const release = dayjs(release_date).format('MMM DD YYYY');

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
          <h3>Rating: {average_rating.toFixed(2)}</h3>
          <h3>Release: {release}</h3>
        </div>
      )}
    </button>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  id: PropTypes.number,
  poster: PropTypes.string,
  backdrop: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  releaseDate: PropTypes.string
};

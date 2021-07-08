import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';
const dayjs = require('dayjs');

const MovieCard = props => {
  const { id, poster, backdrop, title, rating, releaseDate } = props;

  return (
    <div className='movie-card' id={id}>
      <h2>{title}</h2>
      <img src={poster} alt={title + ' movie poster'} />
      <h3>{rating.toFixed(2)}</h3>
      <h3>{dayjs(releaseDate).format('MMM DD YYYY')}</h3>
    </div>
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

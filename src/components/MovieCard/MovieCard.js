import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = props => {
  const { id, poster, backdrop, title, rating, releaseDate } = props;

  return (
    <div className='movie-card'>
      <h2>Card Title</h2>
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

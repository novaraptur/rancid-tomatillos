import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';
const dayjs = require('dayjs');

const MovieCard = props => {
  const { id, poster, title, rating, releaseDate, filterMovies } = props;
  const [inHover, setHover] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    const target = parseInt(event.target.closest('button').id);
    // instead of filterMovies
    // just give the target(id) to something in App to make a fetch request
    filterMovies(target);
  }

  return (
    <button
      className='movie-card'
      id={id}
      onMouseEnter={event => setHover(true)}
      onMouseLeave={event => setHover(false)}
      onClick={event => handleClick(event)}
    >
      <img src={poster} alt={title + ' movie poster'} />
      {inHover && (
        <div className='more-info'>
          <h2>{title}</h2>
          <h3>Rating: {rating.toFixed(2)}</h3>
          <h3>Release: {dayjs(releaseDate).format('MMM DD YYYY')}</h3>
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

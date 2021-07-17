import React from 'react';
import PropTypes from 'prop-types';
import './MovieTrailer.css';

const MovieTrailer = ({ trailerKey, title }) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${trailerKey}`}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title={`Embedded YouTube video, movie trailer for ${title}`}
    />
  );
};

export default MovieTrailer;

MovieTrailer.propTypes = {
  trailerKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

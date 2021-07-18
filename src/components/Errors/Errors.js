import React from 'react';
import './Errors.css';
import PropTypes from 'prop-types';

const Errors = ({ error }) => {
  return (
    <div className='error-container'>
      <h2 className='error-message'>{error}</h2>
    </div>
  );
};

export default Errors;

Errors.propTypes = {
  error: PropTypes.string.isRequired
};
